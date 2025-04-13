"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>From Concepts to Creation</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
            <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-[42rem] mx-auto">
              {project.tags.map((tag, tagIndex) => (
                <span
                  className="bg-gradient-to-br from-indigo-200 to-indigo-600 dark:from-indigo-200 dark:to-indigo-0 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full shadow-sm"
                  key={tagIndex}
                >
                  {tag}
                </span>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
