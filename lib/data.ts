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
    name: "Blog",
    hash: "#blog",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "California State University, Long Beach",
    description:
      "• Developed a responsive ML dashboard using Next.js + Node.js to visualize sparse ML decision trees\n• Engineered ML-driven data pipeline that streamed data from SFTP to S3 using AWS SQS\n• Implemented a FastAPI-based RESTful service with robust error handling and live health checks\n• Reduced backend latency by 30% via query profiling, caching, and advanced PostgreSQL indexing",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - May 2025",
    csulb: true,
    link: "https://www.csulb.edu/",
  },
  {
    title: "Software Engineer, Humancloud Inc.",
    location: "Remote",
    description:
      "• Delivered a full-stack legal compliance platform with component-based architecture\n• Optimized server-side services with Firebase auth and application-based authorization\n• Led Angular-to-React migration using TypeScript with robust state management\n• Collaborated with legal teams to gather requirements for the compliance platform",
    icon: React.createElement(FaReact, { className: "text-blue-500" }),
    date: "Jun 2022 - Jul 2023",
    humancloud: true,
    link: "https://humancloud.ltd/",
  },
  {
    title: "MS in Computer Science",
    location: "California State University, Long Beach",
    description:
      "• Full Stack & Engineering focus\n• Research in cloud-native systems and ML pipelines\n• Focus on scalable backend and ML pipeline development",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - May 2025",
    mscs: true,
    link: "https://www.csulb.edu/college-of-engineering/computer-engineering-computer-science",
  },
  {
    title: "BTech in Information Technology",
    location: "Vishwakarma Institute of Information Technology, India",
    description:
      "• CGPA: 9.26/10\n• Information Technology\n• Focus on computer science fundamentals and software engineering",
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
    title: "LLM-Based Intelligent Query Engine",
    description:
      "• Built an LLM-driven Q&A system for healthcare policies with natural-language interface\n• Enhanced clinical decision support by integrating RAG with medical term filtering\n• Formed a secure, privacy-focused document indexing system with JWT authentication",
    tags: [
      "Python",
      "LLM",
      "RAG",
      "Healthcare",
      "JWT",
      "Natural Language Processing",
    ],
    imageUrl: "/llm.png",
    width: 1200,
    height: 800,
  },
  {
    title: "Eye-Tracking-Based Impairment Detection",
    description:
      "• Developed ML model using XGBoost and Random Forest for visual impairment analysis\n• Achieved 85% accuracy in detecting HGN patterns\n• Built anomaly detection module with 92% accuracy for erratic eye movements",
    tags: [
      "Python",
      "Machine Learning",
      "XGBoost",
      "Computer Vision",
      "Eye Tracking",
    ],
    imageUrl: "/eye.png",
    width: 1200,
    height: 800,
    link: "https://github.com/siddhant8019/eye-tracking-detection",
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
