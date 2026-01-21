"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

export default function ProjectPreview() {
  return (
    <section className="mb-16 sm:mb-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 text-[#222222] section-title">
          Selected work
        </h2>
        <div className="grid gap-6 lg:grid-cols-[1fr,0.9fr] items-center mb-8 sm:mb-12">
          <p className="text-sm sm:text-base text-center lg:text-left text-[#222222]/70 max-w-2xl mx-auto lg:mx-0">
            A few end-to-end systems shipped to production—built for reliability, not demos.
          </p>
          <div className="relative w-full h-[180px] sm:h-[220px]">
            <Image
              src="/retrieval-orchestration.svg"
              alt="Retrieval and agent orchestration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
          {projectsData.map(
            (project, index) =>
              index < 3 && (
                <div
                  key={project.slug}
                  className="glass-card card-hover card-ambient p-6 sm:p-8 rounded-2xl"
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#222222]">
                    {project.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#222222]/80 mb-2 leading-relaxed">
                    {project.hook}
                  </p>
                  <p className="text-xs sm:text-sm text-[#222222]/70 mb-4">
                    {project.credibility}
                  </p>
                  <a
                    href={project.link.href}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm text-[#222222]/70 hover:text-[#222222] transition-colors"
                  >
                    {project.link.label}
                    <BsArrowRight className="text-xs" />
                  </a>
                </div>
              )
          )}
        </div>

        <div className="text-center">
          <Link
            href="/work"
            className="group btn-primary btn-advanced px-6 py-3 sm:px-7 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer focus:ring-2 focus:ring-[#7B7B7B]/30 focus:ring-offset-2 mx-auto w-fit text-sm sm:text-base"
          >
            View all work
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </section>
  );
}
