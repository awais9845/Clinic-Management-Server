import express from "express";
import userRoutes from "./user.routes.js";
import clinicRoutes from "./clinic.routes.js";
const router = express.Router();

router.use("/user", userRoutes);
router.use("/clinic", clinicRoutes);

export default router;
