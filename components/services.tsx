"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

export default function Services() {
  return (
    <section className="mb-16 sm:mb-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#222222] section-title"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What I do
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {portfolioData.home.services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card card-hover card-ambient p-6 sm:p-8 rounded-2xl"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#222222]">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#222222]/80">
                {service.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
