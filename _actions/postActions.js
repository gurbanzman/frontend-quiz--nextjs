"use server";

import PostModel from "@/models/postModel";
import connectDB from "@/src/config/database";

export async function getPosts() {
  try {
    await connectDB();
    const data = JSON.parse(JSON.stringify(await PostModel.find()));
    return { data };
  } catch (error) {
    return { errMsg: error.message };
  }
}  

export async function addPost(msg) {
  try {
    await connectDB();
    const newPost = new PostModel(msg);
    await newPost.save();
    return { success: true, newPost:msg };
  } catch (error) {
    return { errMsg: error.message };
  }
}
