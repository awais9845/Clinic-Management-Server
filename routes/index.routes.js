import express from "express";
import userRoutes from "./user.routes.js";
import clinicRoutes from "./clinic.routes.js";
import authRoutes from "./auth.routes.js";
import { authMiddleware } from "../middlewares/authmiddleware.js";
const router = express.Router();

router.use("/user", authMiddleware, userRoutes);
router.use("/clinic", authMiddleware, clinicRoutes);
router.use("/auth", authRoutes);
export default router;
