import  express  from "express";
import { accountmiddleware } from "../middleware/accountauth";
import { accountmodel } from "../db";
import mongoose from "mongoose";


export const accountrouter=express.Router()

accountrouter.get("/dashboard",accountmiddleware,(req,res)=>{
    const  balance=(req as any).accountbalance

    res.json({balance})

})

accountrouter.post("/transaction",accountmiddleware,  async(req,res)=>{
    const session=await mongoose.startSession();
    session.startTransaction();

    const {senderid,receiverid,amount }=req.body
    const  balance=(req as any).accountbalance

    const senderccount= await accountmodel.findOne({userid:senderid},null,{session})
         if(!senderccount){
             await session.abortTransaction();       
             session.endSession(); 
               return res.json({message:"senderid does not exist "})
                      }
        if (senderccount.accountbalance == null) {
                await session.abortTransaction();
                session.endSession();
                return res.json({ message: "account balance not found" });
                }              

         if(senderccount.accountbalance<amount){
               await session.abortTransaction();      
               session.endSession();   
                  return res.json({message:"you dont have sufficient balance"})
    }            
    await accountmodel.updateOne({ userid: senderid },{ $inc: { balance: -amount } },{ session });


    const receiveraccount=await accountmodel.findOne({userid:receiverid},null,{session})
          if(!receiveraccount){
             await session.abortTransaction();      
             session.endSession(); 
             return res.json({message:"receiver does not exist "})
                }
    await accountmodel.updateOne(  { userid: receiverid }, { $inc: { balance: amount } },{ session });

                
    await session.commitTransaction();
     session.endSession();
         res.json({message:"transfer successful"})          

})