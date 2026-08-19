import express from "express";
import {
  createClinic,
  deleteClinic,
  getClinicById,
  getClinics,
  updateClinic,
} from "../controllers/clinic.controller.js";

const router = express.Router();

router.post("/createClinic", createClinic);
router.get("/getClinics", getClinics);
router.get("/getClinic/:id", getClinicById);
router.put("/updateClinic/:id", updateClinic);
router.delete("/deleteClinic/:id", deleteClinic);
export default router;
