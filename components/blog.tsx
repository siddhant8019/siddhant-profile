"use client";

import React from "react";
import { portfolioData } from "@/lib/data";
import { BsMedium, BsArrowUpRight } from "react-icons/bs";

export default function Blog() {
  return (
    <section className="mb-16 sm:mb-28 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#222222] section-title">
          Writing
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {portfolioData.blog.map(
            (post, index) =>
              index < 3 && (
                <article
                  key={index}
                  className="glass-card card-hover card-ambient p-6 sm:p-8 rounded-2xl cursor-pointer group"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <BsMedium className="text-xl sm:text-2xl text-[#222222]/80" />
                    <span className="text-xs sm:text-sm text-[#222222]/70">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#222222] mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#222222]/70 hover:text-[#222222] transition-colors"
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
            className="inline-flex items-center gap-2 btn-primary btn-advanced px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base"
          >
            View all posts
            <BsArrowUpRight className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}
