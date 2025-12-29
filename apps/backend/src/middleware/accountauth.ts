import  express  from "express";
import  jwt  from "jsonwebtoken";
import { Request,Response,NextFunction } from "express";
import { accountmodel } from "../db";
const secretpassword="hjbvkjjber1242323"

const app=express()


export  async function accountmiddleware(req:Request,res:Response,next:NextFunction){
   const authHeader=req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
        }
    
   const token = authHeader.split(" ")[1];
   
   try{
        const user=jwt.verify(token!,secretpassword) as any
        const accountuserid=user._id    

        const accountdata=await accountmodel.findOne({userid:accountuserid})
        
        if (!accountdata) {
                            return res.status(404).json({ message: "Account not found" })
                            }

        (req as any).account={balance:accountdata!.accountbalance}

            
            next()

            }
     catch(err){
           return res.status(401).json({ message: "Invalid token" });
     }       

    

}

