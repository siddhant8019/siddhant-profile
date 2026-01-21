"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function ProjectPreview() {
  return (
    <section className="mb-16 sm:mb-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#222222] section-title"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Work
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
          {projectsData.map(
            (project, index) =>
              index < 3 && (
                <motion.div
                  key={project.slug}
                  className="glass-card card-hover card-ambient p-6 sm:p-8 rounded-2xl"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#222222]">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#222222]/70 mb-2 sm:mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-[#222222]/80 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {project.problem}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.stack.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#7B7B7B]/15 text-[#222222] px-1.5 sm:px-2 py-1 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link.href}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm text-[#222222]/70 hover:text-[#222222] transition-colors"
                  >
                    {project.link.label}
                    <BsArrowRight className="text-xs" />
                  </a>
                </motion.div>
              )
          )}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/work"
            className="group btn-primary btn-advanced px-6 py-3 sm:px-7 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer focus:ring-2 focus:ring-[#7B7B7B]/30 focus:ring-offset-2 mx-auto w-fit text-sm sm:text-base"
          >
            View all work
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
