import express from  "express";
import {usermodel} from "./db"
import jwt from "jsonwebtoken";
const secretpassword="hjbvkjjber1242323"

const app=express()
app.use(express.json());



app.post("/signup", async (req,res)=>{
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

app.post("/signin", async (req,res)=>{
   const {username,password}=req.body

   const user=  await usermodel.findOne({username,password})
    
   if(!user){
          return  res.json({message:"invalid credentials"})
        }
   
    const token=jwt.sign({userid:user._id},secretpassword)
            
     res.json({ message: "Signin successful  , token: ",token});
       
})