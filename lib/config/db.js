import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect('mongodb+srv://meherlaasya:sriraagam@cluster0.cwo3oou.mongodb.net/Blog-App')
  console.log("DB Connected");
}