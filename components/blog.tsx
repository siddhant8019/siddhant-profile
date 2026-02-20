"use client";

import React from "react";
import { portfolioData } from "@/lib/data";
import { BsMedium, BsArrowUpRight } from "react-icons/bs";

export default function Blog() {
  return (
    <section className="mb-16 sm:mb-28 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 text-[#1a1a1a] section-title">
          Writing
        </h2>
        <p className="text-sm sm:text-base text-center text-[#1a1a1a]/70 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Notes from building systems that didn’t work the first time.
        </p>

        <div className="space-y-4 sm:space-y-6">
          {portfolioData.blog.map(
            (post, index) =>
              index < 3 && (
                <article
                  key={index}
                  className="glass-card card-hover card-ambient p-6 sm:p-8 rounded-[6px] cursor-pointer group"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <BsMedium className="text-xl sm:text-2xl text-[#1a1a1a]/80" />
                    <span className="text-xs sm:text-sm text-[#1a1a1a]/70">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#1a1a1a] mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#1a1a1a]/80 leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors duration-500 ease-fluid cursor-pointer"
                  >
                    Read on Medium
                  </a>
                </article>
              )
          )}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 btn-primary btn-advanced px-5 py-2.5 sm:px-6 sm:py-3 rounded-[4px] text-sm sm:text-base"
          >
            View all posts
            <BsArrowUpRight className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}
