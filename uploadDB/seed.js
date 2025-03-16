const mongoose = require("mongoose");
const connectDB = require("./db");
const { Intro, About, Experience, Projects, Courses, Contacts } = require("./models");

// Dữ liệu giả định để nhập vào cơ sở dữ liệu MongoDB
const introData = [
  {
    welcomeText: "Welcome to my portfolio!",
    firstName: "John",
    lastName: "Doe",
    caption: "Full-Stack Developer",
    description: "I am passionate about building scalable, efficient, and user-friendly applications that solve real-world problems. My expertise lies in full-stack development, leveraging modern technologies to create seamless digital experiences."
  }
];

const aboutData = [
  {
    description1: "I have accumulated over 5 years of experience in software development, working across various industries, including e-commerce, finance, and AI-driven applications.",
    description2: "My passion lies in utilizing modern web technologies to solve complex problems and improve user experiences. I continuously strive to enhance my skills and stay updated with the latest industry trends.",
    skills: "MongoDB, Python, Node.js, React, Express, Docker, Kubernetes"
  }
];

const experienceData = [
  {
    title: "Software Engineer",
    period: "2022 - Present",
    company: "Tech Corp",
    description: "At Tech Corp, I am responsible for designing, developing, and maintaining microservices for a large-scale cloud-based application. I work closely with cross-functional teams to ensure the performance, scalability, and reliability of the system."
  },
  {
    title: "Intern Developer",
    period: "2021 - 2022",
    company: "Startup Inc.",
    description: "During my internship at Startup Inc., I contributed to the development of a real-time chat application using WebSockets. I collaborated with senior developers to improve the system's performance and enhance user engagement."
  }
];

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "I built a full-stack e-commerce platform from the ground up using the MERN stack. The platform supports user authentication, product management, order processing, and a secure payment gateway. The project demonstrates my ability to handle both frontend and backend development effectively.",
    link: "https://github.com/example/ecommerce",
    technologies: "MongoDB, Express, React, Node.js, Redux, Stripe API"
  },
  {
    title: "AI Chatbot",
    description: "This AI-powered chatbot leverages NLP techniques and integrates with the OpenAI API to provide intelligent and context-aware responses. The chatbot can assist users in various domains, including customer support and personal assistance.",
    link: "https://github.com/example/ai-chatbot",
    technologies: "Python, TensorFlow, OpenAI API, Flask, Socket.io"
  }
];

const coursesData = [
  {
    title: "Machine Learning",
    description: "I completed an extensive online course covering the fundamentals of machine learning, including supervised and unsupervised learning, neural networks, and model evaluation techniques.",
    link: "https://coursera.org/example-ml"
  },
  {
    title: "Web Development Bootcamp",
    description: "This bootcamp provided me with hands-on experience in full-stack web development, covering HTML, CSS, JavaScript, React, Node.js, and database management. The course projects solidified my understanding of building dynamic and responsive web applications.",
    link: "https://udemy.com/example-webdev"
  }
];

const contactsData = [
  {
    name: "Jane Doe",
    gender: "Female",
    email: "jane.doe@example.com",
    mobile: "123-456-7890",
    age: "25",
    address: "123 Main St, City, Country"
  }
];

const importData = async () => {
  try {
    // Kết nối tới cơ sở dữ liệu MongoDB
    await connectDB();
    console.log("Database connected successfully.");

    // Xóa dữ liệu cũ để đảm bảo không bị trùng lặp dữ liệu
    await Intro.deleteMany();
    await About.deleteMany();
    await Experience.deleteMany();
    await Projects.deleteMany();
    await Courses.deleteMany();
    await Contacts.deleteMany();
    console.log("Existing data removed.");

    // Nhập dữ liệu mới vào cơ sở dữ liệu
    await Intro.insertMany(introData);
    await About.insertMany(aboutData);
    await Experience.insertMany(experienceData);
    await Projects.insertMany(projectsData);
    await Courses.insertMany(coursesData);
    await Contacts.insertMany(contactsData);

    console.log("Data imported successfully!");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

// Gọi hàm nhập dữ liệu
importData();