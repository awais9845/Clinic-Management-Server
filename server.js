import { config } from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbconnection from "./config/dbconnection.js";
import router from "./routes/index.routes.js";

config();

const app = express();
app.use(cookieParser());
dbconnection();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("working correctly");
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
