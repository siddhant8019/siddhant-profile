"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";
import { SiGooglecloud } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  link: string;
  csulb?: boolean;
  humancloud?: boolean;
  google?: boolean;
  mscs?: boolean;
  viit?: boolean;
};

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const expandedContent = {
    "Software Engineer, College of Business (CSULB)": `• Led the development of an innovative dashboard using Next.js and TailwindCSS
• Implemented real-time data visualization features with D3.js and Chart.js
• Vectorized Runge-Kutta solver using AVX2 intrinsics for performance boost
• Developed RESTful ML inference pipelines for Timbertrek and Treefarms analysis
• Led weekly TA sessions on deep learning and distributed computing
• Co-authored research papers on Rashomon dataset and code enhancements`,

    "Software Engineer, Humancloud Inc.": `• Implemented secure authentication system using JWT and OAuth, and built real-time collaboration features using WebSocket
• Spearheaded migration of a legacy Angular compliance suite for legal clients to a React + TypeScript architecture, slashing bundle size by 50% and enabling modular component reuse
• Established Docker-based CI/CD pipelines and automated front-end deployments with Jenkins, reducing release cadence from bi-weekly to daily
• Introduced Storybook for isolated component development and visual regression testing, raising front-end coverage to 90%
• Mentored and onboarded five junior engineers on React best practices, TypeScript typing, and rigorous code-review conventions, fostering higher code quality and team collaboration`,

    "MS in Computer Science": `• Advanced Algorithms and Data Structures
• Distributed Computing
• Software Engineering & Maintenance
• Pattern Recognition and Machine Learning
• Research: Rashomon Dataset and Timbertrek Analysis
• Teaching Assistant for Data Structures course`,

    "BTech in Information Technology": `• Data Structures and Algorithms
• Object-Oriented Programming
• Database Management Systems
• Computer Networks
• Web Development
• Mobile App Development
• Final Year Project: ERP System`,

    "Google Cloud Ready Facilitator": `• Led workshops on Google Cloud Platform services
• Trained 2000+ students in cloud computing concepts
• Implemented hands-on projects using GCP services
• Achieved all advanced-level skill badges
• Specialized in ML APIs and Kubernetes
• Organized cloud architecture workshops`,
  };

  const iconWrapperClass =
    "flex items-center justify-center h-full w-full bg-white dark:bg-gray-700 rounded-full";

  const getIcon = (item: ExperienceItem) => {
    if (item.csulb) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <div className={iconWrapperClass}>
            <Image
              src="/lb.png"
              alt="CSULB logo"
              width={32}
              height={32}
              className="rounded-none"
            />
          </div>
        </a>
      );
    }
    if (item.humancloud) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <div className={iconWrapperClass}>
            <Image
              src="https://humancloud.ltd/favicon.ico"
              alt="Humancloud favicon"
              width={32}
              height={32}
              className="rounded-sm"
            />
          </div>
        </a>
      );
    }
    if (item.google) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <div className={iconWrapperClass}>
            <Image
              src="https://cloud.google.com/favicon.ico"
              alt="Google Cloud logo"
              width={32}
              height={32}
              className="rounded-none"
            />
          </div>
        </a>
      );
    }
    if (item.mscs) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <div className={iconWrapperClass}>
            <Image
              src="/lb.png"
              alt="CSULB MS logo"
              width={32}
              height={32}
              className="rounded-none"
            />
          </div>
        </a>
      );
    }
    if (item.viit) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <div className={iconWrapperClass}>
            <Image
              src="/viit.png"
              alt="VIIT logo"
              width={32}
              height={32}
              className="rounded-none"
            />
          </div>
        </a>
      );
    }
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
      >
        <div className={iconWrapperClass}>{item.icon}</div>
      </a>
    );
  };

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Guiding Through My Professional Path</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                transition: "all 0.3s ease",
                ...(hoveredIndex === index && {
                  transform: "scale(1.02)",
                  boxShadow:
                    theme === "light"
                      ? "0 4px 20px rgba(0, 0, 0, 0.1)"
                      : "0 4px 20px rgba(255, 255, 255, 0.1)",
                }),
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={getIcon(item)}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
                transition: "all 0.3s ease",
                ...(hoveredIndex === index && {
                  transform: "scale(1.1)",
                }),
              }}
            >
              <motion.div
                initial={false}
                animate={{ height: hoveredIndex === index ? "auto" : "auto" }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cursor-pointer"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="font-semibold capitalize flex items-center gap-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors">
                    {item.title}
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </h3>
                </a>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.location}
                </p>
                <div className="!mt-3 !font-normal text-gray-700 dark:text-white/75">
                  {hoveredIndex === index ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      {expandedContent[
                        item.title as keyof typeof expandedContent
                      ]
                        .split("\n")
                        .map((line, i) => (
                          <p key={i} className="flex items-start">
                            <span className="block">{line}</span>
                          </p>
                        ))}
                    </motion.div>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              </motion.div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
