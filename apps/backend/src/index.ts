import express from "express";
import { userrouter } from "./routes/user";
const app=express()

app.use("/api/v1",userrouter)

app.listen(3000)