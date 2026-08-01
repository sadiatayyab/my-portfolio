// Centralized portfolio data for Sadia Tayyab.
// Edit this file to update any content on the portfolio.

export const personal = {
  name: "Sadia Tayyab",
  firstName: "Sadia",
  lastName: "Tayyab",
  initials: "ST",
  roles: [
    "Full-Stack Developer",
    "AI Application Developer",
    "Backend Engineer",
    "CS Undergraduate",
  ],
  tagline:
    "Computer Science undergraduate building scalable web apps & AI-powered solutions with FastAPI, React, Python and modern LLM tooling.",
  location: "Lahore, Pakistan",
  phone: "+92 321 5700742",
  phoneHref: "+923215700742",
  email: "sadiaishereoky@gmail.com",
  linkedin: "https://linkedin.com/in/sadia-tayyab-a2a9a7292",
  github: "https://github.com/sadiatayyab",
  summary:
    "Motivated and detail-oriented Computer Science undergraduate with hands-on experience in full-stack web development, AI-powered application development, and backend engineering. Skilled in building scalable web applications using FastAPI, React.js, Python, JavaScript, and PostgreSQL. Experienced with modern Artificial Intelligence technologies including Large Language Models (LLMs), LangChain, Retrieval-Augmented Generation (RAG), Agentic AI, Prompt Engineering, and AI Chatbots. Passionate about software engineering, artificial intelligence, problem-solving, and developing innovative, user-focused applications.",
};

export const stats = [
  { label: "CGPA", value: "3.79", suffix: "/4.00", icon: "graduation" },
  { label: "Academic Projects", value: "4", suffix: "+", icon: "code" },
  { label: "Certifications", value: "2", suffix: "", icon: "badge" },
  { label: "Matric Score", value: "93.6", suffix: "%", icon: "star" },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "terminal",
    accent: "rose",
    skills: ["Python", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Web Development",
    icon: "globe",
    accent: "cyan",
    skills: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "React.js",
      "Node.js",
      "FastAPI",
      "RESTful APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: "sparkles",
    accent: "violet",
    skills: [
      "Large Language Models (LLMs)",
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "Agentic AI",
      "Prompt Engineering",
      "AI Chatbots",
      "Gemini API",
      "AI Application Development",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    accent: "emerald",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Firebase"],
  },
  {
    title: "Developer Tools",
    icon: "wrench",
    accent: "amber",
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
  },
];

export const education = [
  {
    qualification: "BS Computer Science (BSCS)",
    status: "In Progress",
    institution: "Minhaj University Lahore",
    result: "CGPA: 3.79 / 4.00",
    resultType: "cgpa",
  },
  {
    qualification: "Intermediate (F.Sc.)",
    status: "Completed",
    institution: "BISE Lahore",
    result: "88.9%",
    resultType: "percentage",
  },
  {
    qualification: "Matriculation",
    status: "Completed",
    institution: "BISE Lahore",
    result: "93.6%",
    resultType: "percentage",
  },
];

export const projects = [
  {
    name: "AI Travel Planner",
    tagline: "Full-stack AI-powered travel planning platform",
    description: [
      "Developed a full-stack AI-powered travel planning platform.",
      "Generated personalized travel itineraries using Large Language Models (LLMs).",
      "Integrated weather, hotel, map, and destination recommendation services.",
      "Designed secure user authentication and authorization using JWT.",
      "Developed RESTful APIs with FastAPI for frontend-backend communication.",
      "Built a responsive React.js frontend with modern UI components.",
      "Managed trip planning data using PostgreSQL.",
    ],
    tech: [
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "LangChain",
      "RAG",
      "Gemini API",
      "JWT Auth",
    ],
    icon: "plane",
    accent: "rose",
    featured: true,
    link: "https://github.com/sadiatayyab",
  },
  {
    name: "Weather Application",
    tagline: "Real-time weather with clean responsive UI",
    description: [
      "Developed a responsive weather application using public weather APIs.",
      "Displayed real-time weather information based on user search.",
      "Designed a clean and responsive interface.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    icon: "cloud",
    accent: "cyan",
    link: "https://github.com/sadiatayyab",
  },
  {
    name: "Tic Tac Toe Game",
    tagline: "Interactive browser game with win detection",
    description: [
      "Developed an interactive browser-based Tic Tac Toe game.",
      "Implemented game logic, winner detection, and reset functionality.",
      "Designed a responsive user interface.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "gamepad",
    accent: "violet",
    link: "https://github.com/sadiatayyab",
  },
  {
    name: "OTP Generator",
    tagline: "Secure random OTP generation tool",
    description: [
      "Developed a secure random OTP generator.",
      "Built a responsive and user-friendly interface.",
      "Implemented dynamic OTP generation using JavaScript.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "shield",
    accent: "emerald",
    link: "https://github.com/sadiatayyab",
  },
];

export const certifications = [
  {
    title: "Certified JavaScript Specialist",
    issuer: "Certiport (A Pearson VUE Business)",
    date: "June 2026",
    credentialId: "w9ynx-H94X",
    verifyUrl: "https://drive.google.com/file/d/1BWRc-JbmBU392Q0z2ul9_JQ16kUETZw3/view?usp=drive_link",
    accent: "amber",
  },
  {
    title: "Pitman English",
    issuer: "Pitman Training",
    date: "2023",
    credentialId: null,
    verifyUrl: "https://drive.google.com/file/d/1o2Nu1ZxScC13O-wOJJYUDMGoM7a_JSLP/view?usp=drive_link",
    accent: "cyan",
  },
];

export const achievements = [
  {
    title: "Academic Excellence",
    description:
      "Maintained a CGPA of 3.79 / 4.00 in BS Computer Science at Minhaj University Lahore, consistently ranking among top performers.",
    icon: "graduation",
  },
  {
    title: "AI-Powered Applications",
    description:
      "Developed multiple AI-powered and full-stack web applications integrating LLMs, LangChain, RAG, and the Gemini API for real-world use cases.",
    icon: "sparkles",
  },
  {
    title: "Responsive Frontend Work",
    description:
      "Built responsive frontend projects using HTML, CSS, JavaScript, and React with a focus on clean UI and smooth user experience.",
    icon: "layout",
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
];

export const interests = [
  "Artificial Intelligence",
  "Full-Stack Web Development",
  "Backend Development",
  "Open Source",
  "Problem Solving",
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
