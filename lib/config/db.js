import mongoose from "mongoose";

const getMongoUri = () => {
  const uri = process.env.MONGODB_URI?.trim();

  if (!uri) {
    throw new Error("MONGODB_URI is not configured. Add it to .env.local.");
  }

  if (!/^mongodb(?:\+srv)?:\/\//.test(uri)) {
    throw new Error(
      "MONGODB_URI is invalid. It must start with mongodb:// or mongodb+srv://."
    );
  }

  const uriWithoutScheme = uri.replace(/^mongodb(?:\+srv)?:\/\//, "");
  const atSigns = (uriWithoutScheme.match(/@/g) || []).length;
  if (atSigns > 1) {
    throw new Error(
      "MONGODB_URI is invalid. URL-encode special characters in the username or password, such as @ as %40."
    );
  }

  return uri;
};

export const ConnectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  const globalWithMongoose = globalThis;
  if (!globalWithMongoose.mongooseConnection) {
    globalWithMongoose.mongooseConnection = { promise: null };
  }

  const cached = globalWithMongoose.mongooseConnection;
  if (!cached.promise) {
    cached.promise = mongoose.connect(getMongoUri()).catch((error) => {
      cached.promise = null;
      throw error;
    });
  }

  await cached.promise;
  console.log("DB Connected");
};
