const express = require('express');
const router = express.Router();

const { Intro, About, Project, Contact, Experience, Course } = require('../models/portfolioModel');

// Get all portfolio data
router.get('/get-portfolio-data', async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Course.find();

    return res.status(200).json({
      success: true,
      data: {
        intros,
        abouts,
        projects,
        contacts,
        experiences,
        courses,
      }
    });
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
});

// Update Intro
router.post('/update-intro', async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      data: intro,
      success: true,
      message: "Intro updated successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating intro",
      error: error.message
    });
  }
});

// Update About
router.post('/update-about', async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      data: about,
      success: true,
      message: "About updated successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating about",
      error: error.message
    });
  }
});

// Update Experiences
router.post('/update-experiences', async (req, res) => {
  try {
    console.log("Received data:", req.body.experiences);

    await Experience.deleteMany({}); // Xóa hết dữ liệu cũ

    // Xóa _id nếu không phải ObjectId hợp lệ
    const sanitizedExperiences = req.body.experiences.map(({ _id, ...rest }) => rest);

    const newExperiences = await Experience.insertMany(sanitizedExperiences);

    res.status(200).json({
      data: newExperiences,
      success: true,
      message: "Experience updated successfully"
    });
  } catch (error) {
    console.error("Error updating experiences:", error);
    res.status(500).json({
      success: false,
      message: "Error updating Experience",
      error: error.message
    });
  }
});

// Update projects
router.post('/update-projects', async (req, res) => {
  try {
    console.log("Received data:", req.body.projects);

    await Project.deleteMany({}); // Xóa hết dữ liệu cũ

    // Xóa _id nếu không phải ObjectId hợp lệ
    const sanitizedProjects = req.body.projects.map(({ _id, ...rest }) => rest);

    const newProjects = await Project.insertMany(sanitizedProjects);

    res.status(200).json({
      data: newProjects,
      success: true,
      message: "Projects updated successfully"
    });
  } catch (error) {
    console.error("Error updating projects:", error);
    res.status(500).json({
      success: false,
      message: "Error updating projects",
      error: error.message
    });
  }
});

// Update courses
router.post('/update-courses', async (req, res) => {
  try {
    console.log("Received data:", req.body.courses);

    await Course.deleteMany({}); // Xóa hết dữ liệu cũ

    // Xóa _id nếu không phải ObjectId hợp lệ
    const sanitizedCourses = req.body.courses.map(({ _id, ...rest }) => rest);

    const newCourses = await Course.insertMany(sanitizedCourses);

    res.status(200).json({
      data: newCourses,
      success: true,
      message: "Courses updated successfully"
    });
  } catch (error) {
    console.error("Error updating courses:", error);
    res.status(500).json({
      success: false,
      message: "Error updating courses",
      error: error.message
    });
  }
});

// Update Contact
router.post('/update-contact', async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      data: contact,
      success: true,
      message: "Contact updated successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating contact",
      error: error.message
    });
  }
});


module.exports = router;
