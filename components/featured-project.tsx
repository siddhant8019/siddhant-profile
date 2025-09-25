"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub } from "react-icons/bs";

export default function FeaturedProject() {
  return (
    <section className="mb-16 sm:mb-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-[#f6f9f1] to-[#dae2e2] dark:from-[#2d2a2a] dark:to-[#231f1f] p-8 rounded-2xl border border-[#dae2e2] dark:border-[#797d59]/40"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 bg-[#797d59] text-[#ffffff] px-3 py-1 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span>Featured Project</span>
              </motion.div>

              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-[#000000] dark:text-[#ffffff] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Multi-Agent Lead Generation System
              </motion.h2>

              <motion.p
                className="text-lg text-[#000000]/80 dark:text-[#ffffff]/80 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                A sophisticated AI system that automates lead discovery and qualification across 12+ data sources, 
                delivering 3x more qualified prospects with 80% reduction in manual research time.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-white dark:bg-[#2d2a2a] p-4 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40">
                  <div className="text-2xl font-bold text-[#797d59] mb-1">3x</div>
                  <div className="text-sm text-[#000000]/70 dark:text-[#ffffff]/70">More Qualified Leads</div>
                </div>
                <div className="bg-white dark:bg-[#2d2a2a] p-4 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40">
                  <div className="text-2xl font-bold text-[#797d59] mb-1">80%</div>
                  <div className="text-sm text-[#000000]/70 dark:text-[#ffffff]/70">Less Manual Work</div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {["CrewAI", "FastAPI", "Redis", "Weaviate", "OpenAI", "Docker"].map((tech, index) => (
                  <span
                    key={tech}
                    className="bg-[#dae2e2] dark:bg-[#797d59]/30 text-[#000000] dark:text-[#ffffff] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <a
                  href="/mail"
                  className="group bg-[#000000] text-[#f6f9f1] px-6 py-3 flex items-center gap-2 rounded-full hover:bg-[#000000]/90 transition-colors border border-[#dae2e2] dark:bg-[#797d59] dark:text-[#ffffff] dark:border-[#797d59] dark:hover:bg-[#797d59]/90"
                >
                  Request Demo
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
                <a
                  href="/work"
                  className="group bg-white dark:bg-[#2d2a2a] text-[#000000] dark:text-[#ffffff] px-6 py-3 flex items-center gap-2 rounded-full hover:bg-[#dae2e2]/50 dark:hover:bg-[#797d59]/20 transition-colors border border-[#dae2e2] dark:border-[#797d59]"
                >
                  View All Projects
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-white dark:bg-[#2d2a2a] p-6 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">Multi-Agent System</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-[#f6f9f1] dark:bg-[#231f1f] p-3 rounded border-l-4 border-[#797d59]">
                      <div className="text-sm font-medium text-[#000000] dark:text-[#ffffff]">Lead Discovery Agent</div>
                      <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">Scanning 12+ data sources...</div>
                    </div>
                    
                    <div className="bg-[#f6f9f1] dark:bg-[#231f1f] p-3 rounded border-l-4 border-[#797d59]">
                      <div className="text-sm font-medium text-[#000000] dark:text-[#ffffff]">Research Agent</div>
                      <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">Analyzing company data...</div>
                    </div>
                    
                    <div className="bg-[#f6f9f1] dark:bg-[#231f1f] p-3 rounded border-l-4 border-[#797d59]">
                      <div className="text-sm font-medium text-[#000000] dark:text-[#ffffff]">Qualification Agent</div>
                      <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">Scoring lead quality...</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
