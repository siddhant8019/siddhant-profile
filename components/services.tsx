"use client";

import React from "react";
import { portfolioData } from "@/lib/data";

export default function Services() {
  return (
    <section className="mb-16 sm:mb-28 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#1a1a1a] section-title">
          What I do
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {portfolioData.home.services.map((service, index) => (
            <div
              key={index}
              className="glass-card card-hover card-ambient p-6 sm:p-8 rounded-[6px]"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#1a1a1a]">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]/80">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
