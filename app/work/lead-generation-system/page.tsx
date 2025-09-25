"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BsArrowRight,
  BsGithub,
  BsLinkedin,
  BsGlobe,
  BsDatabase,
  BsRobot,
  BsGraphUp,
} from "react-icons/bs";
import { FaPython, FaDocker, FaAws } from "react-icons/fa";
import { SiFastapi, SiRedis, SiOpenai } from "react-icons/si";
import Link from "next/link";

export default function LeadGenerationSystemPage() {
  const features = [
    {
      icon: <BsRobot className="w-6 h-6" />,
      title: "Multi-Agent Architecture",
      description:
        "CrewAI-powered agents for intelligent lead discovery and qualification",
    },
    {
      icon: <BsDatabase className="w-6 h-6" />,
      title: "12+ Data Sources",
      description:
        "LinkedIn, Crunchbase, Apollo, and 9+ other sources for comprehensive data",
    },
    {
      icon: <BsGraphUp className="w-6 h-6" />,
      title: "Vector Search",
      description:
        "Advanced similarity search using Weaviate for intelligent matching",
    },
    {
      icon: <BsGlobe className="w-6 h-6" />,
      title: "Real-time Processing",
      description:
        "Handles both real-time and batch processing with Redis caching",
    },
  ];

  const techStack = [
    {
      name: "Python",
      icon: <FaPython className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      name: "FastAPI",
      icon: <SiFastapi className="w-5 h-5" />,
      color: "bg-green-500",
    },
    {
      name: "Redis",
      icon: <SiRedis className="w-5 h-5" />,
      color: "bg-red-500",
    },
    {
      name: "OpenAI",
      icon: <SiOpenai className="w-5 h-5" />,
      color: "bg-purple-500",
    },
    {
      name: "Docker",
      icon: <FaDocker className="w-5 h-5" />,
      color: "bg-blue-600",
    },
    {
      name: "AWS",
      icon: <FaAws className="w-5 h-5" />,
      color: "bg-orange-500",
    },
    {
      name: "Weaviate",
      icon: <BsDatabase className="w-5 h-5" />,
      color: "bg-indigo-500",
    },
    {
      name: "CrewAI",
      icon: <BsRobot className="w-5 h-5" />,
      color: "bg-emerald-500",
    },
  ];

  const architectureSteps = [
    {
      step: "1",
      title: "Sources Agent",
      description:
        "Scrapes from 12+ sources including LinkedIn, Crunchbase, and Apollo",
      color: "bg-blue-500",
    },
    {
      step: "2",
      title: "Lead Generation Agent",
      description:
        "AI-powered lead discovery and initial qualification using CrewAI",
      color: "bg-green-500",
    },
    {
      step: "3",
      title: "Research Agent",
      description:
        "Deep company intelligence and validation across multiple sources",
      color: "bg-purple-500",
    },
    {
      step: "4",
      title: "Rules Engine",
      description:
        "Advanced qualification and routing based on business criteria",
      color: "bg-orange-500",
    },
    {
      step: "5",
      title: "HubSpot Integration",
      description: "Seamless CRM integration for lead management and tracking",
      color: "bg-pink-500",
    },
  ];

  const metrics = [
    {
      label: "Data Sources",
      value: "12+",
      description: "LinkedIn, Crunchbase, Apollo",
    },
    {
      label: "Processing Speed",
      value: "3x",
      description: "Faster than manual research",
    },
    {
      label: "Lead Quality",
      value: "85%",
      description: "Qualification accuracy",
    },
    {
      label: "Time Saved",
      value: "80%",
      description: "Reduced manual research time",
    },
  ];

  return (
    <main className="px-4 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[#000000]/70 dark:text-[#ffffff]/70 hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors mb-6"
        >
          <BsArrowRight className="rotate-180" />
          Back to Work
        </Link>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000000] dark:text-[#ffffff] mb-4">
          Lead Generation System
        </h1>
        <p className="text-xl sm:text-2xl text-[#000000]/80 dark:text-[#ffffff]/80 leading-relaxed max-w-4xl">
          A sophisticated multi-agent system that automatically discovers,
          researches, and qualifies companies using AI-powered intelligence.
        </p>
      </motion.div>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#2d2a2a] p-6 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40 hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl font-bold text-[#000000] dark:text-[#797d59] mb-2">
              {metric.value}
            </div>
            <div className="text-lg font-semibold text-[#000000] dark:text-[#ffffff] mb-1">
              {metric.label}
            </div>
            <div className="text-sm text-[#000000]/70 dark:text-[#ffffff]/70">
              {metric.description}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Problem & Solution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid lg:grid-cols-2 gap-8 mb-16"
      >
        <div className="bg-white dark:bg-[#2d2a2a] p-8 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40">
          <h2 className="text-2xl font-bold text-[#000000] dark:text-[#ffffff] mb-4">
            The Challenge
          </h2>
          <p className="text-[#000000]/80 dark:text-[#ffffff]/80 leading-relaxed">
            Sales teams struggle with manual lead research, spending hours on
            data collection from multiple sources. The process is
            time-consuming, inconsistent, and prone to missing high-quality
            prospects.
          </p>
        </div>

        <div className="bg-white dark:bg-[#2d2a2a] p-8 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40">
          <h2 className="text-2xl font-bold text-[#000000] dark:text-[#ffffff] mb-4">
            The Solution
          </h2>
          <p className="text-[#000000]/80 dark:text-[#ffffff]/80 leading-relaxed">
            Built a multi-agent AI system that automatically discovers,
            researches, and qualifies companies from 12+ data sources,
            delivering high-quality leads in minutes instead of hours.
          </p>
        </div>
      </motion.div>

      {/* Architecture Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-[#000000] dark:text-[#ffffff] mb-8 text-center">
          System Architecture
        </h2>

        <div className="space-y-6">
          {architectureSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-6">
              <div
                className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0`}
              >
                {step.step}
              </div>
              <div className="bg-white dark:bg-[#2d2a2a] p-6 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40 flex-1">
                <h3 className="text-xl font-semibold text-[#000000] dark:text-[#ffffff] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#000000]/80 dark:text-[#ffffff]/80">
                  {step.description}
                </p>
              </div>
              {index < architectureSteps.length - 1 && (
                <BsArrowRight className="text-[#000000]/50 dark:text-[#ffffff]/50 w-6 h-6 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-[#000000] dark:text-[#ffffff] mb-8 text-center">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2d2a2a] p-6 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-[#797d59] flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#000000] dark:text-[#ffffff] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#000000]/80 dark:text-[#ffffff]/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-[#000000] dark:text-[#ffffff] mb-8 text-center">
          Technology Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2d2a2a] p-4 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40 hover:shadow-lg transition-shadow text-center"
            >
              <div
                className={`${tech.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}
              >
                {tech.icon}
              </div>
              <div className="text-sm font-semibold text-[#000000] dark:text-[#ffffff]">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white dark:bg-[#2d2a2a] p-8 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40 mb-16"
      >
        <h2 className="text-3xl font-bold text-[#000000] dark:text-[#ffffff] mb-6 text-center">
          Impact & Results
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[#000000] dark:text-[#ffffff] mb-4">
              Automated Lead Pipeline
            </h3>
            <ul className="space-y-2 text-[#000000]/80 dark:text-[#ffffff]/80">
              <li>• 3x more qualified prospects discovered</li>
              <li>• 80% reduction in manual research time</li>
              <li>• 45% increase in conversion rates</li>
              <li>• Real-time processing with intelligent caching</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#000000] dark:text-[#ffffff] mb-4">
              Technical Achievements
            </h3>
            <ul className="space-y-2 text-[#000000]/80 dark:text-[#ffffff]/80">
              <li>• Multi-agent architecture with CrewAI</li>
              <li>• Vector search with Weaviate for similarity matching</li>
              <li>• Redis-based caching for performance</li>
              <li>• RESTful API with FastAPI for easy integration</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center"
      >
        <div className="bg-[#000000] dark:bg-[#2d2a2a] p-8 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40">
          <h2 className="text-2xl font-bold text-[#f6f9f1] dark:text-[#ffffff] mb-4">
            Interested in Building Something Similar?
          </h2>
          <p className="text-[#f6f9f1]/80 dark:text-[#ffffff]/80 mb-6 leading-relaxed">
            Let's discuss how AI-powered automation can transform your business
            processes.
          </p>
          <Link
            href="/mail"
            className="inline-flex items-center gap-2 bg-[#f6f9f1] dark:bg-[#797d59] text-[#000000] dark:text-[#ffffff] px-8 py-4 rounded-full hover:bg-[#f6f9f1]/90 dark:hover:bg-[#797d59]/90 transition-colors font-medium border border-[#dae2e2] dark:border-[#797d59]"
          >
            Get in Touch
            <BsArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
