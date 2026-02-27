# Career Roadmap Generator 🚀

A comprehensive web application that helps professionals identify skill gaps and create personalized career development roadmaps. The **Skill Gap Analyzer & Career Roadmap Generator** matches your current skills against industry-required skills for your target job role.

## 📋 Overview

This project is designed to bridge the gap between your current skill set and the requirements for your desired career position. By analyzing your skills against role-specific requirements, the application generates a personalized learning roadmap to guide your professional development.

## ⭐ Key Features

### 1. **Role Selection**
   - Choose from 11 different career paths:
     - Java Developer
     - Python Developer
     - Frontend Developer
     - Full Stack Developer
     - Data Analyst
     - Data Scientist
     - Cloud Engineer
     - DevOps Engineer
     - Cyber Security Analyst
     - Software Tester
     - Mobile App Developer

### 2. **Skill Requirements Display**
   - Instantly view all required skills for your selected role
   - Clear breakdown of industry-standard skills needed for each position

### 3. **Skill Gap Analysis**
   - Input your current skills
   - Real-time comparison with role requirements
   - Identify exactly which skills you're missing

### 4. **Personalized Learning Roadmap**
   - Automatic generation of a customized learning path
   - Practical recommendations for each missing skill
   - Step-by-step guidance: "Learn [Skill]: Practice by building a small module"

### 5. **Supported Technologies**
   - **Frontend Skills**: HTML, CSS, JavaScript, React
   - **Backend Skills**: Java, Python, Spring Boot, Django, Flask
   - **Database**: SQL
   - **DevOps/Cloud**: AWS, Azure, Docker, Kubernetes, Jenkins
   - **Security**: Ethical Hacking, Cryptography
   - **Data**: Machine Learning, Statistics, Excel, Power BI
   - **Mobile**: Java, Kotlin, Android, Firebase
   - **Version Control**: Git

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Responsive styling and design
- **Vanilla JavaScript** - Dynamic interactivity and API communication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimal web framework
- **CORS** - Cross-Origin Resource Sharing for frontend communication

## 📁 Project Structure

```
Career-Roadmap-Generator/
├── Frontend/
│   ├── index.html          # Main UI with role selector and skill input
│   ├── script.js           # Frontend logic and API calls
│   └── style.css           # Styling and responsiveness
├── Backend/
│   ├── server.js           # Express server with skill analysis logic
│   ├── package.json        # Node dependencies configuration
│   └── package-lock.json   # Locked dependency versions
└── README.md               # Project documentation
```

## 🎯 How It Works

### Step 1: Select Your Target Role
- Choose your desired job position from the dropdown menu
- Required skills for that role are displayed automatically

### Step 2: Enter Your Current Skills
- Input all the skills you currently possess
- Format: `Skill1, Skill2, Skill3` (comma-separated)
- Example: `Java, SQL, OOP`

### Step 3: Analyze & Review Results
- Click the "Analyze Skills" button
- The application displays:
  - **Missing Skills**: Skills required but not yet acquired
  - **Career Roadmap**: Learning recommendations for each missing skill

### Step 4: Follow Your Personalized Roadmap
- Practice the recommended learning activities
- Build projects to strengthen each skill
- Progress towards your career goal

## 💻 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- Any modern web browser

### Backend Setup

1. **Navigate to Backend Directory**
   ```bash
   cd Backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Server**
   ```bash
   node server.js
   ```
   
   Expected output:
   ```
   Server is running on http://localhost:8080
   ```

### Frontend Setup

1. **Navigate to Frontend Directory**
   ```bash
   cd Frontend
   ```

2. **Open in Browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Or using Node.js (with http-server)
     npx http-server
     ```

3. **Access the Application**
   - Open your browser and navigate to `http://localhost:8000` (or the port shown)

## 🚀 Usage Guide

### Basic Workflow

1. **Start the Backend Server**
   ```bash
   cd Backend
   npm install  # Only needed on first setup
   node server.js
   ```

2. **Open Frontend in Browser**
   - Open `Frontend/index.html` in your web browser

3. **Use the Application**
   - Select a job role from the dropdown
   - Review the required skills displayed
   - Enter your current skills (comma-separated)
   - Click "Analyze Skills" button
   - Review your missing skills and learning roadmap

### Example

**Input:**
- Role: "Full Stack Developer"
- Your Skills: "Java, HTML, JavaScript"

**Output:**
```
Missing Skills:
- Spring Boot
- CSS
- SQL

Career Roadmap:
- Learn Spring Boot: Practice by building a small module.
- Learn CSS: Practice by building a small module.
- Learn SQL: Practice by building a small module.
```

## 🔄 API Endpoints

### Analyze Skills
- **Endpoint**: `POST /api/analyze`
- **Base URL**: `http://localhost:8080`
- **Request Body**:
  ```json
  {
    "role": "Java Developer",
    "skills": "Java, SQL, OOP"
  }
  ```
- **Response**:
  ```json
  {
    "missingSkills": ["Spring Boot", "Git"],
    "roadmap": [
      "Learn Spring Boot: Practice by building a small module.",
      "Learn Git: Practice by building a small module."
    ]
  }
  ```

## 📊 Supported Job Roles & Skills

| Role | Required Skills |
|------|-----------------|
| Java Developer | Java, OOP, Spring Boot, SQL, Git |
| Python Developer | Python, OOP, Django, Flask, SQL, Git |
| Frontend Developer | HTML, CSS, JavaScript, React |
| Full Stack Developer | Java, Spring Boot, HTML, CSS, JavaScript, SQL |
| Data Analyst | Python, SQL, Excel, Statistics, Power BI |
| Data Scientist | Python, Machine Learning, Statistics |
| Cloud Engineer | AWS, Azure, Linux, Networking, Docker |
| DevOps Engineer | Linux, Git, Docker, Jenkins, Kubernetes |
| Cyber Security Analyst | Networking, Ethical Hacking, Cryptography |
| Software Tester | Manual Testing, Selenium, Test Cases |
| Mobile App Developer | Java, Kotlin, Android, Firebase |

## 🎓 Learning Path Features

- **Personalized Recommendations**: Each roadmap is tailored to your current skill set
- **Practical Guidance**: Learn through hands-on project building
- **Skill Prioritization**: Missing skills are highlighted for focused learning
- **Real-world Alignment**: Requirements match industry standards

## 💡 Tips for Success

1. **Be Honest About Your Skills**: Enter only skills you're confident using
2. **Practice Consistently**: Follow the roadmap recommendations methodically
3. **Build Projects**: Create practical projects for each skill you're learning
4. **Update Regularly**: As you learn new skills, re-run the analyzer to track progress
5. **Seek Resources**: Use the roadmap as a guide for finding tutorials and courses

## 🔧 Configuration

The skill requirements for each role are defined in the backend's `server.js` file. To customize:

1. Edit the `roleRequirements` object in `Backend/server.js`
2. Add new roles or modify existing skill lists
3. Restart the server

## 📝 Dependencies

### Backend (Node.js)
```json
{
  "express": "^5.2.1",
  "cors": "^2.8.6"
}
```

- **Express**: Web framework for building REST APIs
- **CORS**: Middleware for handling cross-origin requests

## 🌟 Future Enhancements

- [ ] User authentication and profile storage
- [ ] Persistence of learning progress
- [ ] Integration with online courses and resources
- [ ] Skill proficiency levels (Beginner, Intermediate, Advanced)
- [ ] Community discussion forums
- [ ] Progress tracking and analytics dashboard
- [ ] Export learning roadmap as PDF
- [ ] Mobile application
- [ ] AI-powered skill recommendations
- [ ] Estimated learning time for each skill

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

**Harini** - Career Roadmap Generator Project

## 📞 Support

For issues, questions, or suggestions, please:
- Open an issue on GitHub
- Contact the development team
- Check existing documentation

## 🎯 Project Goals

✅ Help professionals identify skill gaps  
✅ Create actionable learning roadmaps  
✅ Bridge the gap between current and desired skills  
✅ Provide clear career development guidance  
✅ Make career planning accessible to everyone  

---

**Happy Learning! 🎉**

*This tool empowers you to take control of your career development. Remember, every skill starts with a single step. Choose your role, follow your roadmap, and build your future today!*
