import express from "express";
import {
  logInUser,
  logOutUser,
  registerUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/logIn", logInUser);
router.post("/login", logOutUser);
export default router;
