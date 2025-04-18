"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & { link?: string };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  width,
  height,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Simply split the description by newlines to get the bullet points
  const bulletPoints = description
    .split("\n")
    .filter((point) => point.trim() !== "");

  const TitleComponent = link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group/title inline-flex items-center gap-2 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
    >
      {title}
      <svg
        className="w-4 h-4 opacity-0 group-hover/title:opacity-100 transition-opacity"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  ) : (
    title
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10">
        <div className="pt-4 pb-10 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{TitleComponent}</h3>
          <ul className="mt-2 text-gray-700 dark:text-white/70 space-y-3 list-disc pl-4 text-sm">
            {bulletPoints.map((point, index) => (
              <li key={index} className="font-medium">
                {point.startsWith("•") ? point.substring(1).trim() : point}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={width}
          height={height}
          className="absolute hidden sm:block top-8 -right-40 w-[27rem] rounded-t-lg shadow-2xl
        transition duration-300
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </section>
    </motion.div>
  );
}
