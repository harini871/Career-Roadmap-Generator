const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const roleRequirements = {
  "Java Developer": ["Java", "OOP", "Spring Boot", "SQL", "Git"],
  "Python Developer": ["Python", "OOP", "Django", "Flask", "SQL", "Git"],
  "Frontend Developer": ["HTML", "CSS", "JavaScript", "React"],
  "Full Stack Developer": [
    "Java",
    "Spring Boot",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
  ],
  "Data Analyst": ["Python", "SQL", "Excel", "Statistics", "Power BI"],
  "Data Scientist": ["Python", "Machine Learning", "Statistics"],
  "Cloud Engineer": ["AWS", "Azure", "Linux", "Networking", "Docker"],
  "DevOps Engineer": ["Linux", "Git", "Docker", "Jenkins", "Kubernetes"],
  "Cyber Security Analyst": ["Networking", "Ethical Hacking", "Cryptography"],
  "Software Tester": ["Manual Testing", "Selenium", "Test Cases"],
  "Mobile App Developer": ["Java", "Kotlin", "Android", "Firebase"],
};

app.post("/api/analyze", (req, res) => {
  const { role, skills } = req.body;
  const requiredSkills = roleRequirements[role] || [];
  const userSkillsList = skills
    ? skills.split(",").map((s) => s.trim().toLowerCase())
    : [];

  const missingSkills = requiredSkills.filter(
    (skill) => !userSkillsList.includes(skill.toLowerCase()),
  );

  const roadmap = missingSkills.map(
    (skill) => `Learn ${skill}: Practice by building a small module.`,
  );

  res.json({
    missingSkills: missingSkills,
    roadmap: roadmap,
  });
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
