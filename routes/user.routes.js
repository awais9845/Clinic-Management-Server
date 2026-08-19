import express from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/user.controller.js";

const router = express.Router();
router.post("/createUser",createUser);
router.get("/getUsers",getUsers);
router.get("/getUser/:id",getUserById);
router.put("/updateUser/:id",updateUser);
router.delete("/deleteUser/:id",deleteUser);



export default router;