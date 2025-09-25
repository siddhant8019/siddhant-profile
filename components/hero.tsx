"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="text-center px-4 py-8 sm:py-16 mb-16 sm:mb-28">
      <motion.div
        className="text-3xl sm:text-6xl text-gray-600 dark:text-gray-300 mb-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {portfolioData.home.hero.name}
      </motion.div>

      <motion.h1
        className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-950 dark:text-gray-50 leading-tight"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {portfolioData.home.hero.title}
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 leading-relaxed"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {portfolioData.home.hero.subtitle}
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.a
          href="/mail"
          className="group bg-[#000000] text-[#f6f9f1] px-6 py-3 sm:px-7 sm:py-3 w-full sm:w-auto flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-[#dae2e2] hover:bg-[#000000]/90 focus:ring-2 focus:ring-[#dae2e2] focus:ring-offset-2 dark:bg-[#797d59] dark:text-[#ffffff] dark:border-[#797d59] dark:hover:bg-[#797d59]/90 text-sm sm:text-base"
          aria-label="Contact me"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {portfolioData.home.hero.primaryCta.label}
          <BsArrowRight
            className="opacity-70 group-hover:translate-x-1 transition"
            aria-hidden="true"
          />
        </motion.a>

        <motion.a
          href={portfolioData.home.hero.secondaryCta.href}
          className="group bg-white dark:bg-[#2d2a2a] text-[#000000] dark:text-[#ffffff] px-6 py-3 sm:px-7 sm:py-3 w-full sm:w-auto flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-[#dae2e2] dark:border-[#797d59] hover:bg-[#f6f9f1] dark:hover:bg-[#797d59]/20 focus:ring-2 focus:ring-[#dae2e2] dark:focus:ring-[#797d59] focus:ring-offset-2 text-sm sm:text-base"
          aria-label="View my work portfolio"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {portfolioData.home.hero.secondaryCta.label}
          <BsArrowRight
            className="opacity-70 group-hover:translate-x-1 transition"
            aria-hidden="true"
          />
        </motion.a>
      </motion.div>

      <motion.div
        className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-8 sm:mb-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Worked with {portfolioData.home.credibility.join(", ")}.
      </motion.div>
    </section>
  );
}
