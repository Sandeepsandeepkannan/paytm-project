import  express, { Router }  from "express";
import { accountmiddleware } from "../middleware/accountauth";


export const accountrouter=express.Router()

accountrouter.get("/dashboard",accountmiddleware,(req,res)=>{
    const  balance=(req as any).accountbalance

    res.json({balance})

})