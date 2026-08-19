import { Clinic } from "../models/Clinic.model.js";

export const createClinic = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    if (!name || !email || !phone || !address) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const existClinic = await Clinic.findOne({ email });
    if (existClinic) {
      return res.status(409).json({
        success: false,
        message: "Clinic already exist.",
      });
    }

    const clinic = await Clinic.create({
      name,
      email,
      phone,
      address,
      // owner: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Your clinic created successfully.",
      clinic,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const getClinics = async (req, res) => {
  try {
    const clinics = await Clinic.find();
    return res.status(200).json({
      success: true,
      clinics,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const getClinicById = async (req, res) => {
  try {
    const clinic = await Clinic.findById(req.params.id);
    if (!clinic) {
      return res.status(404).json({
        success: false,
        message: "Clinic not found.",
      });
    }

    return res.status(200).json({
      success: true,
      clinic,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const updateClinic = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    if (!name || !email || !phone || !address) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const clinic = await Clinic.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        phone,
        address,
      },
      { new: true },
    );

    if (!clinic) {
      return res.status(404).json({
        success: false,
        message: "Clinic not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Clinic updated successfully.",
      clinic,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const deleteClinic = async (req, res) => {
  try {
    const clinic = await Clinic.findByIdAndDelete(req.params.id);
    if (!clinic) {
      return res.status(404).json({
        success: false,
        message: "Clinic not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Clinic deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
