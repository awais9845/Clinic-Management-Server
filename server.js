import { config } from "dotenv";
import express from "express";
import dbconnection from "./config/dbconnection.js";



config();

const app = express();

app.use(express.json())
dbconnection();


app.get("/",(req,res)=>{
    res.send("working correctly")
})

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})