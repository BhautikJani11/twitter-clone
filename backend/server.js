import express from "express";
import authroutes from "./routes/auth.routes.js";

const app=express();

app.get("/",(req,res)=>{
    res.send("server is ready");
});

app.listen(8000,()=>{
    console.log("server is runnig on port 8000");
});