"use client";

import React from "react";
import { portfolioData } from "@/lib/data";
import { BsArrowRight } from "react-icons/bs";

export default function Hero() {
  const title = portfolioData.home.hero.title;
  const titleParts = title.split(" not ");
  return (
    <section className="text-center px-4 py-8 sm:py-16 mb-16 sm:mb-28 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-3xl sm:text-6xl gradient-text mb-4 font-medium">
          Hello!
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#1a1a1a] leading-tight section-title">
          I'm Siddhant, an AI engineer building agentic AI systems that replace
          manual work, not demo well and die later.
        </h2>
      </div>

      <p className="text-base sm:text-lg md:text-2xl text-[#5c5c5c] mb-4 sm:mb-5 max-w-3xl mx-auto px-2 leading-relaxed">
        {portfolioData.home.hero.subtitle}
      </p>
      <p className="text-sm sm:text-base text-[#5c5c5c]/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
        {portfolioData.home.hero.supportingLine}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
        <a
          href={portfolioData.home.hero.primaryCta.href}
          className="group btn-primary btn-advanced px-6 py-3 sm:px-7 sm:py-3 w-full sm:w-auto flex items-center justify-center gap-2 rounded-[4px] outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 focus:ring-offset-2 text-sm sm:text-base"
          aria-label="Contact me"
        >
          {portfolioData.home.hero.primaryCta.label}
          <BsArrowRight
            className="opacity-70 group-hover:translate-x-0.5 transition-transform duration-500 ease-fluid"
            aria-hidden="true"
          />
        </a>

        <a
          href={portfolioData.home.hero.secondaryCta.href}
          className="group btn-secondary btn-advanced px-6 py-3 sm:px-7 sm:py-3 w-full sm:w-auto flex items-center justify-center gap-2 rounded-[4px] outline-none focus:ring-2 focus:ring-[#1a1a1a]/20 focus:ring-offset-2 text-sm sm:text-base"
          aria-label="View my work portfolio"
        >
          {portfolioData.home.hero.secondaryCta.label}
          <BsArrowRight
            className="opacity-70 group-hover:translate-x-0.5 transition-transform duration-500 ease-fluid"
            aria-hidden="true"
          />
        </a>
      </div>

      <div className="text-xs sm:text-sm text-[#5c5c5c] mb-8 sm:mb-16 px-4">
        Worked with {portfolioData.home.credibility.join(", ")}.
      </div>
    </section>
  );
}
