import express from "express";
import cors from "cors";
import { userrouter } from "./routes/user";
import { accountrouter } from "./routes/account";
import mongoose from "mongoose";



const app=express()
app.use(cors());
app.use(express.json());

app.use("/api/users",userrouter)
app.use("/api/account",accountrouter)

async function startServer() {
                    try {
                        await mongoose.connect(
                        "url"
                        );

                    console.log("MongoDB connected")

app.listen(3000, () => {
                 console.log("Server running on port 3000");
                    });
                       }
                 catch (error) {
                        console.error("Failed to connect DB", error);
                            }
                            }

startServer();
