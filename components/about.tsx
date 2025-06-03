"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsLightningChargeFill, BsTools, BsBraces } from "react-icons/bs";
import { FaFlask, FaRobot, FaSearchengin } from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("About");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const aboutCards = [
    {
      icon: (
        <BsLightningChargeFill className="text-gray-800 dark:text-gray-200 text-4xl mb-4" />
      ),
      title: "Full Stack Innovator",
      description:
        "As a passionate full-stack developer, I specialize in building scalable web applications using modern technologies. My expertise spans from crafting intuitive user interfaces to architecting robust backend systems that deliver exceptional user experiences.",
    },
    {
      icon: (
        <FaRobot className="text-gray-800 dark:text-gray-200 text-4xl mb-4" />
      ),
      title: "AI & ML Practitioner",
      description:
        "I combine my software engineering skills with AI/ML expertise to create intelligent solutions. From developing computer vision systems to implementing machine learning models, I bridge the gap between cutting-edge AI research and practical applications.",
    },
    {
      icon: (
        <BsTools className="text-gray-800 dark:text-gray-200 text-4xl mb-4" />
      ),
      title: "Tech Stack Mastery",
      description:
        "Proficient in React, Node.js, and Python ecosystems, I build full-stack applications with a focus on performance and scalability. My toolkit includes modern frameworks, cloud services, and best practices in software development.",
    },
    {
      icon: (
        <FaSearchengin className="text-gray-800 dark:text-gray-200 text-4xl mb-4" />
      ),
      title: "Problem Solver",
      description:
        "With a strong foundation in computer science and software engineering, I tackle complex challenges through systematic problem-solving. My approach combines technical expertise with creative thinking to deliver innovative solutions.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>My Story</SectionHeading>

      <div className="bg-white/80 dark:bg-gray-800/40 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700 backdrop-blur-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="flip-card h-[200px] relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`flip-card-side front h-full w-full absolute flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/50 transition-all duration-500 ${
                  hoveredCard === index ? "opacity-0" : "opacity-100"
                }`}
              >
                {card.icon}
                <h3 className="text-xl font-medium text-center">
                  {card.title}
                </h3>
              </div>
              <div
                className={`flip-card-side back h-full w-full absolute flex items-center p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/50 transition-all duration-500 ${
                  hoveredCard === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative w-full h-full">
                  <h3 className="text-xl font-medium text-center absolute top-0 left-0 right-0 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
                    {card.title}
                  </h3>
                  <div className="pt-12">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-8 bg-gray-50 dark:bg-gray-800/30 p-6 rounded-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-sm text-gray-700 dark:text-gray-300 italic">
            "I'm driven by the intersection of technology and human potential.
            Every line of code I write is an opportunity to create something
            meaningful that makes a difference in people's lives."
          </p>
        </motion.div>
      </div>

      <style jsx global>{`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-side {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: rotateY(0deg);
        }
      `}</style>
    </motion.section>
  );
}
