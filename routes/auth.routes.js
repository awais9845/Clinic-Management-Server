import express from "express";
import {
  logInUser,
  logOutUser,
  registerUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/logIn", logInUser);
router.post("/logOutUser", logOutUser);
export default router;
