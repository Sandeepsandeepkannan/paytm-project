import mongoose from "mongoose";
import { Schema } from "mongoose";
import { Model } from "mongoose";
import { required } from "zod/mini";

const userschema=new Schema({
    username:String,
    password:String,
    email:String

})

const accountschema=new Schema({
    userid:
        {type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true },

    accountbalance:
        {
            type:Number
        }
})

export const usermodel=mongoose.model("Users",userschema)
export const accountmodel=mongoose.model("Account",accountschema)