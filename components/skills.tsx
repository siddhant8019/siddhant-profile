"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-gradient-to-br from-white to-gray-50 border border-opacity-20 border-indigo-100 shadow-sm hover:shadow-md rounded-xl px-5 py-3 dark:from-gray-800/40 dark:to-gray-900/40 dark:border-white/5 dark:text-white/90 transition-all duration-200"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <p className="text-gray-600 dark:text-gray-400 mt-8 text-sm max-w-[45rem] mx-auto">
        Along with these core skills, I have extensive experience with various
        ML algorithms (Linear/Logistic Regression, Decision Trees, Random
        Forest, SVMs), AI frameworks (Hugging Face, Keras, spaCy, XGBoost), and
        programming languages (R, C/C++, Java). My expertise also spans LLMs,
        Reinforcement Learning, and other advanced AI technologies.
      </p>
    </section>
  );
}
