"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { BsMedium, BsArrowUpRight } from "react-icons/bs";

export default function Blog() {
  return (
    <section className="mb-16 sm:mb-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#000000] dark:text-[#ffffff]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Writing
        </motion.h2>

        <div className="space-y-4 sm:space-y-6">
          {portfolioData.blog.map(
            (post, index) =>
              index < 3 && (
                <motion.article
                  key={index}
                  className="bg-white dark:bg-[#2d2a2a] p-4 sm:p-6 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <BsMedium className="text-xl sm:text-2xl text-[#000000]/80 dark:text-[#797d59]" />
                    <span className="text-xs sm:text-sm text-[#000000]/70 dark:text-[#ffffff]/70">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#000000] dark:text-[#797d59] mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#000000]/80 dark:text-[#ffffff]/80 leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#000000]/70 dark:text-[#797d59] hover:text-[#000000] dark:hover:text-[#797d59]/80 transition-colors"
                  >
                    Read on Medium
                  </a>
                </motion.article>
              )
          )}
        </div>

        <motion.div
          className="text-center mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#000000] text-[#f6f9f1] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-[#000000]/90 transition-colors border border-[#dae2e2] dark:bg-[#797d59] dark:text-[#ffffff] dark:border-[#797d59] dark:hover:bg-[#797d59]/90 text-sm sm:text-base"
          >
            View all posts
            <BsArrowUpRight className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
