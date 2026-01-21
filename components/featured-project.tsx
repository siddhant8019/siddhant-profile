"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub } from "react-icons/bs";

export default function FeaturedProject() {
  return (
    <section className="mb-16 sm:mb-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="gradient-panel card-hover p-10 rounded-3xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 bg-[#222222] text-[#FFFFFF] px-3 py-1 rounded-full text-sm font-medium mb-4 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span>Featured Project</span>
              </motion.div>

              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-[#222222] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Multi-Agent Lead Generation System
              </motion.h2>

              <motion.p
                className="text-lg text-[#222222]/80 mb-6 leading-relaxed"
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
                <div className="glass-card card-ambient p-5 rounded-2xl">
                  <div className="text-2xl font-bold text-[#222222] mb-1">3x</div>
                  <div className="text-sm text-[#222222]/70">More Qualified Leads</div>
                </div>
                <div className="glass-card card-ambient p-5 rounded-2xl">
                  <div className="text-2xl font-bold text-[#222222] mb-1">80%</div>
                  <div className="text-sm text-[#222222]/70">Less Manual Work</div>
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
                    className="bg-[#7B7B7B]/15 text-[#222222] px-3 py-1 rounded-full text-sm font-medium"
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
                  className="group btn-primary btn-advanced px-6 py-3 flex items-center gap-2 rounded-full"
                >
                  Request Demo
                  <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
                <a
                  href="/work"
                  className="group btn-secondary btn-advanced px-6 py-3 flex items-center gap-2 rounded-full"
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
              <div className="glass-card card-hover card-ambient p-7 rounded-3xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-[#222222] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#7B7B7B] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#222222]/30 rounded-full"></div>
                    </div>
                    <div className="text-xs text-[#222222]/70">Multi-Agent System</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-[#F8F8F8] p-3 rounded border-l-4 border-[#222222]">
                      <div className="text-sm font-medium text-[#222222]">Lead Discovery Agent</div>
                      <div className="text-xs text-[#222222]/70">Scanning 12+ data sources...</div>
                    </div>
                    
                    <div className="bg-[#F8F8F8] p-3 rounded border-l-4 border-[#222222]">
                      <div className="text-sm font-medium text-[#222222]">Research Agent</div>
                      <div className="text-xs text-[#222222]/70">Analyzing company data...</div>
                    </div>
                    
                    <div className="bg-[#F8F8F8] p-3 rounded border-l-4 border-[#222222]">
                      <div className="text-sm font-medium text-[#222222]">Qualification Agent</div>
                      <div className="text-xs text-[#222222]/70">Scoring lead quality...</div>
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
