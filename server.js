import { config } from "dotenv";
import express from "express";
import dbconnection from "./config/dbconnection.js";
import router from "./routes/index.routes.js";



config();

const app = express();

app.use(express.json())
dbconnection();

app.use("/api",router)
app.get("/",(req,res)=>{
    res.send("working correctly")
})

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000")
})