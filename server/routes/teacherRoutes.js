const express = require("express");
const router = express.Router();

const {
  addTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");

// Create Teacher
router.post("/", addTeacher);

// Get All Teachers
router.get("/", getTeachers);

// Update Teacher
router.put("/:id", updateTeacher);

// Delete Teacher
router.delete("/:id", deleteTeacher);

module.exports = router;