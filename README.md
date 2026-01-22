# Siddhant Patil’s Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-online-brightgreen)](https://siprofile.me)  
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## About

I build agentic AI systems that replace manual work, not demo well and die later. This site highlights production-focused projects, systems thinking, and how I approach reliability, evaluation, and failure handling.

---

## What You’ll Find Here

- **Selected work** with outcomes, hooks, and production context
- **Writing** on agentic systems, evaluation, and real-world AI delivery
- **Contact** and resume links

---

## Tech Stack

| Frontend                | Backend & API        | AI/ML & Retrieval     | Infra & Hosting |
| :---------------------- | :------------------- | :-------------------- | :-------------- |
| Next.js & React         | Node.js & Express.js | OpenAI, LangChain     | Vercel          |
| TypeScript & Tailwind   | REST APIs            | Weaviate, FAISS       | Docker          |
|                         | PostgreSQL           | RAG systems           | GitHub Actions  |

---

## Featured Projects

### EyeTrack Impairment Detector

> Real‑time alcohol impairment prediction using just your eye movements.

- Engineered a pipeline in Python to extract saccades, smooth pursuit, pupil dilation
- Trained XGBoost & RandomForest models achieving **85%+ accuracy**
- Live demo uses WebSockets to stream data from an eye‑tracker to a Next.js dashboard

### AI‑Powered Document Q&A

> Ask complex questions of PDFs in natural language.

- Ingests contracts into GCP buckets, chunks & embeds text via Vertex AI
- RAG pipeline with custom prompts for precision & context retention
- Interactive UI with instant answer cards & source citation

For the full project list, check out the **Work** section on the site!

---

## Get Started Locally

```bash
# 1. Clone the repo
git clone https://github.com/siddhant8019/siddhant-profile.git
cd siddhant-profile

# 2. Install dependencies & run
npm install
npm run dev

# 3. Open http://localhost:3000 and enjoy!
```
