"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="text-center px-4 py-8 sm:py-16 mb-16 sm:mb-28 relative">
      <div className="absolute left-1/2 top-6 -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[#FFFFFF] blur-3xl opacity-80" />
      <motion.div
        className="section-kicker mb-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        Portfolio
      </motion.div>

      <motion.div
        className="text-3xl sm:text-6xl gradient-text mb-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {portfolioData.home.hero.name}
      </motion.div>

      <motion.h1
        className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#222222] leading-tight section-title"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {portfolioData.home.hero.title}
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-2xl text-[#7B7B7B] mb-6 sm:mb-8 max-w-3xl mx-auto px-2 leading-relaxed"
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
          className="group btn-primary btn-advanced px-6 py-3 sm:px-7 sm:py-3 w-full sm:w-auto flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer focus:ring-2 focus:ring-[#7B7B7B]/30 focus:ring-offset-2 text-sm sm:text-base"
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
          className="group btn-secondary btn-advanced px-6 py-3 sm:px-7 sm:py-3 w-full sm:w-auto flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer focus:ring-2 focus:ring-[#7B7B7B]/30 focus:ring-offset-2 text-sm sm:text-base"
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
        className="text-xs sm:text-sm text-[#7B7B7B] mb-8 sm:mb-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Worked with {portfolioData.home.credibility.join(", ")}.
      </motion.div>
    </section>
  );
}
