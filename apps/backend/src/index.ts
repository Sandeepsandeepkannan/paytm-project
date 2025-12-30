import express from "express";
import { userrouter } from "./routes/user";
import { accountrouter } from "./routes/account";

const app=express()

app.use("/api/users",userrouter)
app.use("/api/account",accountrouter)

app.listen(3000,()=>{console.log("server running on port 3000")})