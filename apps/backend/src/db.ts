import mongoose from "mongoose";
import { Schema } from "mongoose";
import { Model } from "mongoose";

const userschema=new Schema({
    username:String,
    password:String,
    email:String

})


export const usermodel=mongoose.model("Users",userschema)