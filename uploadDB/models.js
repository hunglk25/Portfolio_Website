const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcomeText: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  caption: { type: String, required: true },
  description: { type: String, required: true }
});

const aboutSchema = new mongoose.Schema({
  description1: { type: String, required: true },
  description2: { type: String, required: true },
  skills: { type: String, required: true }
});

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  period: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true }
});

const projectsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  technologies: { type: String, required: true }
});

const coursesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true }
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  age: { type: String, required: true },
  address: { type: String, required: true }
});

// Tạo Model
const Intro = mongoose.model("Intro", introSchema);
const About = mongoose.model("About", aboutSchema);
const Experience = mongoose.model("Experience", experienceSchema);
const Projects = mongoose.model("Projects", projectsSchema);
const Courses = mongoose.model("Courses", coursesSchema);
const Contacts = mongoose.model("Contacts", contactSchema);

module.exports = { Intro, About, Experience, Projects, Courses, Contacts };
