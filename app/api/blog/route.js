import { ConnectDB } from "@/lib/config/db"
import { NextResponse } from "next/server"
import { mkdir, writeFile } from 'fs/promises'
import path from 'path'
import BlogModel from '@/lib/models/BlogModel'
import EmailModel from '@/lib/models/EmailModel'
import { sendBlogNotificationEmail } from '@/lib/config/mail'

const fs = require('fs')

const LoadDB = async () => {
  await ConnectDB();
}

LoadDB();


// API endpoint to get all blogs
export async function GET(request) {

  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  }
  else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}


// API Endpoint for uploading blogs
export async function POST(request) {
  const formData = await request.formData();
  const image = formData.get('image');

  if (!image || typeof image.name !== 'string') {
    return NextResponse.json({ success: false, msg: "Please upload an image" });
  }

  const timestamp = Date.now();
  const safeName = image.name.replace(/[^a-zA-Z0-9._-]+/g, '-');
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, `${timestamp}_${safeName}`);
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  await writeFile(filePath, buffer);

  const imgUrl = `/uploads/${timestamp}_${safeName}`;
  const blogData = {
    title: `${formData.get('title')}`,
    description: `${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get('authorImg')}`
  }
  const blog = await BlogModel.create(blogData);
  console.log("Blog Created");

  try {
    const subscribers = await EmailModel.find({});
    const blogUrl = `/blogs/${blog._id}`;
    await sendBlogNotificationEmail({
      blogTitle: blog.title,
      blogDescription: blog.description,
      blogUrl,
      subscribers,
    });
  } catch (mailError) {
    console.error('Failed to send reminder emails:', mailError);
  }

  return NextResponse.json({ success: true, msg: "Blog Added" })
}

//API endpoint to delete blog
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get('id');
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => { });
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog Deleted" })
}