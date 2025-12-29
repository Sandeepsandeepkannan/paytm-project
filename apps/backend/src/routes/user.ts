import express from  "express";
import { usermodel } from "../db";
import jwt from "jsonwebtoken";
import {z} from "zod";
import { Request,Response } from "express";
import { Usermiddleware } from "../middleware/user";

const secretpassword="hjbvkjjber1242323"

const app=express()
export const userrouter=express.Router()

app.use(express.json());



userrouter.post("/signup", async (req,res)=>{
   const {username,password,email}=req.body
   const data=  await usermodel.findOne({username,email})
   if(data){
        res.json({message:"user alredy exits"})
            }
   else{
        usermodel.create({username,password,email})
           res.json({ message: "Signup successful" });
       }
})


userrouter.post("/signin", async (req,res)=>{
   const {username,password}=req.body
   const user=  await usermodel.findOne({username,password})
   if(!user){
          return  res.json({message:"invalid credentials"})
        }
    const token=jwt.sign({userid:user._id},secretpassword)  
         res.json({ message: "Signin successful" ,token: token});
       
})


const updateuser=z.object({
    username:z.string().optional() ,
    password:z.string().optional()
})

userrouter.put("/update", Usermiddleware, async (req:Request,res:Response)=>{
    const {success}=updateuser.safeParse(req.body)

    if(!success){
        return  res.json({message:"error while updating the information "})
    }

    await usermodel.updateOne({id:req.userid},req.body)
    res.json({message:"updated information successfully"})
    
})