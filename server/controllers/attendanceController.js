const Attendance = require("../models/Attendance");

// Save Attendance
exports.saveAttendance = async (req, res) => {
  try {
    const { records } = req.body;

    await Attendance.insertMany(records);

    res.status(201).json({
      success: true,
      message: "Attendance Saved Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Attendance
exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate("student");

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};