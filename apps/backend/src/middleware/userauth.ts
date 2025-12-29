import  express  from "express";
import  jwt  from "jsonwebtoken";
import { Request,Response,NextFunction } from "express";
const secretpassword="hjbvkjjber1242323"

const app=express()
app.use(express.json())

export  function Usermiddleware(req:Request,res:Response,next:NextFunction){
   const authHeader=req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
        }
    
   const token = authHeader.split(" ")[1];
   
   try{
        const user=jwt.verify(token!,secretpassword) as any
            
            (req as any).user={  username:user.username,
                    password:user.password,
                    email :user.email,
                    userid:user._id}
                
            next()

            }
     catch(err){
           return res.status(401).json({ message: "Invalid token" });
     }       

    

}

