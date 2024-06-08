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
