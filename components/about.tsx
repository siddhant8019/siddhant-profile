"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  BsLightningChargeFill,
  BsTools,
  BsBraces,
  BsCloud,
} from "react-icons/bs";
import { FaFlask, FaRobot } from "react-icons/fa";

export default function About() {
  const { ref } = useSectionInView("About");

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <BsLightningChargeFill className="text-gray-800 dark:text-gray-200 mr-3 text-xl" />
            <h3 className="text-lg font-medium">The Engineer's Mindset</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            With a foundation in{" "}
            <span className="font-medium">Software Engineering and AI/ML</span>,
            I approach problems analytically, breaking down complex challenges
            into solvable components. I believe great software is both
            functional and elegant.
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/50"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center mb-4">
            <FaRobot className="text-gray-800 dark:text-gray-200 mr-3 text-xl" />
            <h3 className="text-lg font-medium">AI Enthusiast</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            I'm fascinated by how{" "}
            <span className="font-medium">AI systems</span> can enhance human
            capabilities. My work focuses on creating intelligent solutions that
            provide real value, from ML-powered analytics to user-friendly AI
            interfaces.
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <BsTools className="text-gray-800 dark:text-gray-200 mr-3 text-xl" />
            <h3 className="text-lg font-medium">Tech Toolkit</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            My core expertise includes{" "}
            <span className="font-medium">
              Node.js, FastAPI, PostgreSQL, and AI/ML systems
            </span>
            . I specialize in designing fault-tolerant architectures and
            creating efficient APIs that scale with your business needs.
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/50"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <BsCloud className="text-gray-800 dark:text-gray-200 mr-3 text-xl" />
            <h3 className="text-lg font-medium">Cloud & Infrastructure</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Beyond coding, I'm interested in{" "}
            <span className="font-medium">
              cloud infrastructure and system design
            </span>
            . I enjoy creating resilient, scalable architectures that deliver
            reliable experiences even under challenging conditions.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 bg-gray-50 dark:bg-gray-800/30 p-6 rounded-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-sm text-gray-700 dark:text-gray-300 italic">
          "I believe technology should solve real problems and improve lives. My
          continuous learning journey keeps me at the cutting edge of what's
          possible."
        </p>
      </motion.div>
    </motion.section>
  );
}
