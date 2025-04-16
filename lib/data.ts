import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaGoogle } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiGooglecloud } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer, College of Business (CSULB)",
    location: "Long Beach, CA",
    description:
      "• Designed Next.js dashboard visualizing Rashomon effect in decision trees\n• Engineered tools for TimberTrek & TreeFarms to analyze ML models\n• Developed evaluation toolkit reducing analysis time by 35%",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Present",
    csulb: true,
    link: "https://www.csulb.edu/college-of-business",
  },
  {
    title: "Software Engineer, Humancloud Inc.",
    location: "Remote",
    description:
      "• Architected digital signature platform using React/Node.js/PostgreSQL\n• Developed Firebase auth system with role-based access controls\n• Led migration to Node.js, cutting infrastructure costs by $10K yearly",
    icon: React.createElement(FaReact, { className: "text-blue-500" }),
    date: "Jun 2022 - Jul 2023",
    humancloud: true,
    link: "https://humancloud.ltd/",
  },
  {
    title: "MS in Computer Science",
    location: "California State University, Long Beach",
    description:
      "• Research: Interpretable AI & Decision Tree Models\n• Courses: Algorithms, Distributed Computing, AI/ML \n • Thesis: Rashomon Effect in Decision Tree Ensembles",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - May 2025",
    mscs: true,
    link: "https://www.csulb.edu/college-of-engineering/computer-engineering-computer-science",
  },
  {
    title: "BTech in Information Technology",
    location: "Vishwakarma Institute of Information Technology, India",
    description:
      "• CGPA: 9.24/10\n• Courses: Data Structures, Algorithms, Databases\n• Project: Healthcare Predictive Analytics using ML",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2019 - May 2023",
    viit: true,
    link: "https://www.viit.ac.in/",
  },
  {
    title: "Google Cloud Ready Facilitator",
    location: "Remote",
    description:
      "• Completed 30+ hands-on labs on ML, data analytics, and app modernization on Google Cloud\n• Guided 2000+ student peers through Google Cloud certification preparation\n• Achieved multiple skill badges in Kubernetes, ML APIs, and Cloud infrastructure",
    icon: React.createElement(SiGooglecloud, { className: "text-[#4285F4]" }),
    date: "Feb 2022 - May 2022",
    google: true,
    link: "https://cloud.google.com/",
  },
] as const;

export const projectsData = [
  {
    title: "Eye-Based Analysis System",
    description:
      "• Developed a comprehensive eye movement analysis system for detecting various impairments\n• Implemented multiple specialized models for smooth pursuit, nystagmus, and cannabis influence detection\n• Created modular architecture with base model class for easy extension and maintenance",
    tags: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "Eye Tracking",
      "MLOps",
    ],
    imageUrl: "/eye.png",
    width: 1200,
    height: 800,
    link: "https://github.com/siddhant8019/eye_based-analysis",
  },
  {
    title: "LLM Powered Document QA System",
    description:
      "• Developed cloud-based system for automatic PDF analysis and knowledge extraction\n• Implemented LLM-based architecture for indexing, embedding, and chunking documents\n• Created intelligent QA pipeline with predefined queries and dynamic user questioning",
    tags: [
      "Cloud Storage",
      "Document Analysis",
      "Embeddings",
      "AI Agents",
      "Knowledge Base",
    ],
    imageUrl: "/llm.png",
    width: 1200,
    height: 800,
  },
] as const;

export const skillsData = [
  // Core Languages
  "Python",
  "JavaScript/TypeScript",
  "SQL",

  // Web Development
  "React",
  "Next.js",
  "Node.js",

  // Data & ML
  "Machine Learning",
  "Deep Learning/NLP",
  "TensorFlow/PyTorch",
  "Data Analysis",
  "Microservices",

  // Infrastructure
  "AWS/GCP",
  "Docker/Kubernetes",
  "CI/CD",

  // Databases
  "PostgreSQL",
  "MongoDB",

  // Tools
  "Git/GitHub",
  "Linux",
] as const;
