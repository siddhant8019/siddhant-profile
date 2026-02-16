import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaGoogle } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiGooglecloud } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Work",
    hash: "/work",
  },
  {
    name: "Experience",
    hash: "/experience",
  },
  {
    name: "Blog",
    hash: "/blog",
  },
  {
    name: "About",
    hash: "/about",
  },
  {
    name: "Contact",
    hash: "/contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Co-Founder (AI Engineer)",
    company: "Teamcast.ai",
    dates: "Aug 2025 – Present",
    location: "Palo Alto, CA",
    description:
      "Building intelligent hiring systems with multi-agent evaluation pipelines, adaptive interviews, and AI-powered candidate scoring. Focused on creating AI products that help teams move from 300+ applicants to a decisive short list with better signal quality.",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "AI Research Engineer",
    company: "CSULB",
    dates: "Jun 2024 – May 2025",
    location: "California, US",
    description:
      "Developed AI-powered research tools including ML dashboards for decision tree visualization, SFTP→S3 data pipelines with AWS SQS, and FastAPI services with 30% latency improvements through advanced PostgreSQL optimization.",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Co-Founder",
    company: "humancloud",
    dates: "Aug 2023 – Present",
    location: "Palo Alto, CA",
    description:
      "Humancloud build and deploy AI systems for enterprises — everything from fine-tuning large language models (LLMs) and setting up retrieval-augmented generation (RAG) pipelines, to building multi-agent workflows, cloud infrastructure for ML operations (MLOps), and governance frameworks.",
    icon: React.createElement(FaReact, { className: "text-[#7B7B7B]" }),
  },
  {
    title: "AI & Cloud Facilitator",
    company: "Google Cloud Community India",
    dates: "Mar 2022 – Sep 2022",
    location: "India",
    description:
      "Led hands-on sessions on AI/ML APIs, GCP services, and containerized deployment. Helped 2000+ students build real-world AI applications and achieve Google Cloud certifications.",
    icon: React.createElement(SiGooglecloud, { className: "text-[#7B7B7B]" }),
  },
] as const;

export const projectsData = [
  {
    slug: "teamcast-evaluation",
    name: "Teamcast.ai",
    tagline: "Real candidate evaluation, not resume roulette",
    problem:
      "Recruiters drown in 300+ applicants, resumes are keyword-stuffed.",
    whatBuilt:
      "Multi-agent evaluation pipeline, adaptive interviews, scoring, hiring ops hooks.",
    impact: "Top-3 candidates in days, faster shortlisting and better signal.",
    hook:
      "Reduced time-to-shortlist by letting agents disagree before deciding.",
    credibility: "In production. Used daily. Evaluated continuously.",
    stack: [
      "FastAPI",
      "Node",
      "React",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "LangChain",
    ],
    link: {
      label: "Visit Teamcast.ai",
      href: "https://teamcast.ai/",
    },
  },
  {
    slug: "cybersecurity-analyzer",
    name: "Cybersecurity Log Analyzer",
    tagline: "AI-powered threat detection for security logs",
    problem:
      "Security teams struggle to analyze massive log files and detect threats in real-time.",
    whatBuilt:
      "Full-stack application with multi-format log parsing, AI threat detection, and real-time analysis dashboard.",
    impact:
      "Automated threat detection with 85% accuracy, reduced manual review time by 70%, faster incident response within 2 minutes.",
    hook:
      "Reduced review time from minutes to seconds with agent-assisted triage.",
    credibility: "In production. Used daily. Evaluated continuously.",
    stack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "OpenAI GPT-3.5",
      "Docker",
      "React",
      "Tailwind CSS",
    ],
    link: {
      label: "View project details",
      href: "https://github.com/siddhant8019/cybersecurity-analyzer.git",
    },
  },
  {
    slug: "lead-generation-system",
    name: "Lead Generation System",
    tagline: "Multi-agent lead discovery and qualification",
    problem:
      "Sales teams need intelligent lead generation from multiple sources with automated qualification.",
    whatBuilt:
      "Sophisticated multi-agent system using CrewAI for lead discovery, research, and qualification across 12+ data sources.",
    impact:
      "Automated lead pipeline with 3x more qualified prospects, reduced manual research time by 80%, increased conversion rate by 45%.",
    hook:
      "Let agents research, qualify, and route leads without manual follow-up.",
    credibility: "In production. Used daily. Evaluated continuously.",
    stack: [
      "Python",
      "CrewAI",
      "FastAPI",
      "Redis",
      "Weaviate",
      "OpenAI",
      "Docker",
    ],
    link: {
      label: "View project details",
      href: "/work/lead-generation-system",
    },
  },
  {
    slug: "document-qa-platform",
    name: "Document QA Platform",
    tagline: "AI-powered document intelligence",
    problem:
      "Teams need to quickly extract insights from complex PDF documents and ask questions about content.",
    whatBuilt:
      "Modern web application with PDF processing, AI-powered Q&A, conversation history, and bookmarking system.",
    impact:
      "Faster document analysis, improved knowledge extraction, better team collaboration.",
    hook:
      "Answer complex documents with traceable, production-grade retrieval.",
    credibility: "In production. Used daily. Evaluated continuously.",
    stack: [
      "Next.js",
      "FastAPI",
      "Python",
      "SQLite/PostgreSQL",
      "AI/ML",
      "React",
    ],
    link: {
      label: "See architecture",
      href: "/mail",
    },
  },
  {
    slug: "complianceguard",
    name: "ComplianceGuard",
    tagline: "Real-time risk checks for healthcare APIs",
    problem: "PHI leaks and policy drift across microservices.",
    whatBuilt:
      "Classification agent, risk agent for policy checks, audit agent to immutable log.",
    impact: "Reduced manual review, faster approvals, clearer audit trail.",
    hook:
      "Automated policy checks with agent verdicts and immutable logs.",
    credibility: "In production. Used daily. Evaluated continuously.",
    stack: ["FastAPI", "PostgreSQL", "Redis Streams", "Vector store"],
    link: {
      label: "View architecture notes",
      href: "/docs/complianceguard.pdf",
    },
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

// New portfolio content structure
export const portfolioData = {
  home: {
    hero: {
      name: "Siddhant Patil",
      title: "I build agentic AI systems that replace manual work, not demo well and die later.",
      subtitle:
        "I design, debug, and ship production-grade LLM systems where reliability, evaluation, and failure handling actually matter.",
      supportingLine:
        "Most AI projects fail after the first demo. I focus on the part that comes after.",
      primaryCta: {
        label: "View selected work",
        href: "/work",
      },
      secondaryCta: { label: "Read how I think", href: "/blog" },
    },
    credibility: ["Teamcast.ai", "CSULB", "humancloud"],
    services: [
      {
        title: "AI Product Development",
        body: "Intelligent systems that solve real business problems.",
      },
      {
        title: "Agentic Workflows",
        body: "Multi-agent systems, RAG, and intelligent automation.",
      },
      {
        title: "Full-stack AI",
        body: "End-to-end AI products from concept to deployment.",
      },
    ],
    positioning: {
      lineOne:
        "I work at the intersection of agentic workflows, retrieval systems, and backend engineering.",
      lineTwo:
        "My job is turning ambiguous problems into systems that run without babysitting.",
    },
    thinkingBullets: [
      "I don’t trust a single agent when accuracy matters.",
      "I treat evaluation as a first-class system, not a metric at the end.",
      "If a system can’t explain its own uncertainty, it’s not production-ready.",
      "Most complexity comes from edge cases, not prompts.",
    ],
    toolGroups: [
      {
        label: "LLMs & agents",
        items: ["OpenAI", "LangChain", "CrewAI"],
      },
      {
        label: "Retrieval",
        items: ["Weaviate", "FAISS", "Postgres"],
      },
      {
        label: "Backend",
        items: ["FastAPI", "Redis", "Docker"],
      },
      {
        label: "Infra",
        items: ["AWS", "CI/CD", "monitoring"],
      },
    ],
    aboutTeaser:
      "I’m an AI engineer focused on shipping systems that survive contact with real users. I care more about reliability than cleverness, and more about outcomes than demos.",
  },
  about: {
    bio: "I build AI systems that survive real usage. I turn messy workflows into reliable agents and retrieval stacks that teams trust in production.",
    mission: "Making AI accessible and practical for real-world applications",
    approach:
      "I believe the best AI products come from understanding both the technical possibilities and the human needs they serve. That's why I work at the intersection of AI engineering, product design, and user experience.",
    strengths: [
      {
        title: "AI Product Development",
        description:
          "End-to-end AI product creation from concept to deployment",
      },
      {
        title: "Multi-agent Systems",
        description:
          "Building intelligent agent workflows that work together seamlessly",
      },
      {
        title: "RAG & Vector Search",
        description:
          "Creating intelligent retrieval systems for better AI responses",
      },
      {
        title: "Production AI",
        description: "Making AI systems reliable, scalable, and maintainable",
      },
    ],
    interests: [
      "Agentic Automation",
      "Intelligent Document Processing",
      "AI-powered Lead Generation",
      "Cybersecurity AI",
      "Product Strategy",
      "User Experience Design",
    ],
    tools: [
      "Python",
      "FastAPI",
      "Next.js",
      "OpenAI",
      "LangChain",
      "CrewAI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Weaviate",
    ],
    stats: [
      { label: "AI Products Shipped", value: "5+" },
      { label: "Years Building AI Systems", value: "4+" },
      { label: "Technologies Mastered", value: "15+" },
      { label: "Articles Written", value: "10+" },
    ],
  },
  personality: [
    "Coffee-fueled debugging sessions",
    "Late-night architecture discussions",
    "Obsessed with clean code",
    "Always learning new AI frameworks",
    "Believes in shipping fast, iterating faster",
  ],
  contact: {
    email: "sidhnpatil08@gmail.com",
    linkedin: "https://www.linkedin.com/in/siddhantnpatil",
    github: "https://github.com/siddhant8019",
    resume:
      "https://drive.google.com/file/d/1UOeLtTotuDFfFq7ul-hgXzf7DP1AB6UW/view?usp=sharing",
  },
  blog: [
    {
      title: "Clawdbot Was the Prototype. OpenClaw Is the Interface War",
      description:
        "Why the real battle in AI is shifting from models to interfaces — and what OpenClaw means for builders. Published in Towards Artificial Intelligence.",
      link: "https://medium.com/towards-artificial-intelligence/clawdbot-was-the-prototype-openclaw-is-the-interface-war-aafcb68c6979",
      date: "2025",
    },
    {
      title: "How Microsoft's Optimind Unlocks Optimization for the Rest of Us",
      description:
        "How Optimind makes advanced optimization accessible beyond research labs and what it means for practical AI systems.",
      link: "https://medium.com/@siddhantnitin/how-microsofts-optimind-unlocks-optimization-for-the-rest-of-us-d745abff99ea",
      date: "2025",
    },
    {
      title: "Clawdbot, Moltbot: Why This AI Isn't a Chatbot — It's an Operator",
      description:
        "Exploring why the next wave of AI isn't about chat interfaces but about systems that operate and execute in the real world.",
      link: "https://medium.com/@siddhantnitin/clawdbot-moltbot-why-this-ai-isnt-a-chatbot-it-s-an-operator-216a3381ab53",
      date: "2025",
    },
    {
      title: "The AI Model Wars Are Over. The Interface Wars Just Started.",
      description:
        "Why the frontier has shifted from who has the biggest model to who builds the interfaces that people actually use.",
      link: "https://medium.com/@siddhantnitin/the-ai-model-wars-are-over-the-interface-wars-just-started-a185e11126fb",
      date: "2025",
    },
    {
      title: "GLM-5 Is Not Just Bigger — It's More Disciplined",
      description:
        "What makes GLM-5 a different kind of leap: discipline, efficiency, and readiness for production.",
      link: "https://medium.com/@siddhantnitin/glm-5-is-not-just-bigger-its-more-disciplined-eb28edc85895",
      date: "2025",
    },
    {
      title: "GPT-5.3, Codex, and GPT-5.3 Codex Spark: Why This Launch Changes How We Build",
      description:
        "How the latest OpenAI launch reshapes the stack for AI engineers and product builders.",
      link: "https://medium.com/@siddhantnitin/gpt-5-3-codex-and-gpt-5-3-codex-spark-why-this-launch-changes-how-we-build-22bbfd1be850",
      date: "2025",
    },
    {
      title: "Gemini 3 Deep Think",
      description:
        "What Google's deep-thinking Gemini 3 capability means for reasoning, long-horizon tasks, and how we build with frontier models.",
      link: "https://medium.com/@siddhantnitin/gemini-3-deep-think-0c7cbd4d7587",
      date: "2025",
    },
    {
      title: "Google Is Betting On You. OpenAI Is Betting On Everyone",
      description:
        "A perspective on how big tech bets shape builders, talent, and the future of AI distribution.",
      link: "https://medium.com/@siddhantnitin/google-is-betting-on-you-openai-is-betting-on-everyone-16860cef91e8",
      date: "January 2026",
    },
    {
      title: "DeepSeek’s Engram Is a Bigger Deal Than Bigger Models",
      description:
        "Why memory and retrieval breakthroughs may matter more than sheer model size.",
      link: "https://medium.com/gopenai/deepseeks-engram-is-a-bigger-deal-than-bigger-models-e361a5ae356f",
      date: "January 2026",
    },
    {
      title: "GLM-4.7 and the Big Three",
      description:
        "Comparing frontier models and what the next tier of capabilities means for teams.",
      link: "https://medium.com/gopenai/glm-4-7-and-the-big-three-593877d6c761",
      date: "January 2026",
    },
    {
      title: "The Quiet Shift in Automation",
      description:
        "How automation is evolving beyond tools into autonomous, coordinated systems.",
      link: "https://medium.com/gopenai/the-quiet-shift-in-automation-5a8975957cda",
      date: "January 2026",
    },
    {
      title: "Turn Web Pages into CRM Data for Sales Partnerships",
      description:
        "A practical blueprint for transforming web data into structured CRM insights.",
      link: "https://medium.com/siddhants-ai-lab/turn-web-pages-into-crm-data-for-sales-partnerships-3e40c4ed0b98",
      date: "January 2026",
    },
    {
      title: "Multi-Agent Systems Are No Longer Just AI Assistants",
      description:
        "Why multi-agent systems are evolving into orchestrated, goal-driven workflows.",
      link: "https://medium.com/gopenai/multi-agent-systems-are-no-longer-just-ai-assistants-b36ca46ba276",
      date: "January 2026",
    },
    {
      title: "Multi-Agent Systems Are No Longer Just AI Assistants",
      description:
        "Exploring how multi-agent architectures are revolutionizing complex workflows and decision-making processes in enterprise environments.",
      link: "https://medium.com/@siddhantnitin/multi-agent-systems-are-no-longer-just-ai-assistants-b36ca46ba276",
      date: "August 2025",
    },
    {
      title: "Why Compliance-Heavy Industries Need Multi-Agent AI Architecture",
      description:
        "Deep dive into how multi-agent systems can transform regulatory compliance, risk management, and audit processes in heavily regulated industries.",
      link: "https://medium.com/@siddhantnitin/why-compliance-heavy-industries-need-multi-agent-ai-architecture-e305ba34d83d",
      date: "May 2025",
    },
    {
      title:
        "Production-Ready AI Engineering: Building Scalable, Reliable Systems That Deliver",
      description:
        "A comprehensive guide to engineering AI systems that work reliably in production environments, covering deployment, monitoring, and maintenance strategies.",
      link: "https://medium.com/@siddhantnitin/production-ready-ai-engineering-building-scalable-reliable-systems-that-deliver-ef8c0619e481",
      date: "April 2025",
    },
    {
      title:
        "From Entry-Level to Obsolete: How AI is Rewriting the Engineer's First Job",
      description:
        "Explore how artificial intelligence is transforming entry-level engineering roles and what this means for the future of software development careers.",
      link: "https://medium.com/@siddhantnitin/from-entry-level-to-obsolete-how-ai-is-rewriting-the-engineers-first-job-5bc377f89456",
      date: "May 2025",
    },
    {
      title:
        "Cybersecurity is Broken in Business Schools: I Spent 6 Months Fixing It",
      description:
        "A deep dive into how I built an AI-powered cybersecurity log analyzer to address the gap in business school cybersecurity education.",
      link: "https://medium.com/@siddhantnitin/cybersecurity-is-broken-in-business-schools-i-spent-6-months-fixing-it-1ce7f54d0882",
      date: "March 2025",
    },
    {
      title: "RAG PDFs in Minutes with Google Cloud's Vertex AI",
      description:
        "Step-by-step tutorial on building a production-ready RAG system for PDF document Q&A using Google Cloud's Vertex AI and Matching Engine.",
      link: "https://medium.com/siddhants-ai-lab/rag-pdfs-in-minutes-with-google-clouds-vertex-ai-7baa824ba66f",
      date: "April 2025",
    },
    {
      title:
        "👁️ Eye Track Analysis: Building an Impairment Detection System with Just Eye Movements",
      description:
        "Technical deep dive into developing AI-powered eye tracking systems for medical diagnosis and impairment detection using computer vision and machine learning.",
      link: "https://medium.com/@siddhantnitin/%EF%B8%8F-%EF%B8%8F-eye-track-analysis-building-an-impairment-detection-system-with-just-eye-movements-f877bca560e0",
      date: "February 2025",
    },
    {
      title:
        "From Lines of Code to Conversations: How Cursor is Rewriting the IDE",
      description:
        "Analyzing how AI-powered development tools like Cursor are transforming the software development workflow and reshaping the future of coding.",
      link: "https://medium.com/@siddhantnitin/from-lines-of-code-to-conversations-how-cursor-is-rewriting-the-ide-2383a387e3d8",
      date: "January 2025",
    },
  ],
} as const;
