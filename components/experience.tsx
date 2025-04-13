"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";
import { SiGooglecloud } from "react-icons/si";

type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  link: string;
  csulb?: boolean;
  humancloud?: boolean;
  google?: boolean;
  mscs?: boolean;
  viit?: boolean;
};

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const iconWrapperClass =
    "flex items-center justify-center h-full w-full bg-white dark:bg-gray-700 rounded-full";

  const getIcon = (item: ExperienceItem) => {
    if (item.csulb) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <div className={iconWrapperClass}>
            <Image
              src="/lb.png"
              alt="CSULB logo"
              width={32}
              height={32}
              className="rounded-none"
            />
          </div>
        </a>
      );
    }
    if (item.humancloud) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <div className={iconWrapperClass}>
            <Image
              src="https://humancloud.ltd/favicon.ico"
              alt="Humancloud favicon"
              width={32}
              height={32}
              className="rounded-sm"
            />
          </div>
        </a>
      );
    }
    if (item.google) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <div className={iconWrapperClass}>
            <Image
              src="https://cloud.google.com/favicon.ico"
              alt="Google Cloud logo"
              width={32}
              height={32}
              className="rounded-none"
            />
          </div>
        </a>
      );
    }
    if (item.mscs) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <div className={iconWrapperClass}>
            <Image
              src="/lb.png"
              alt="CSULB MS logo"
              width={32}
              height={32}
              className="rounded-none"
            />
          </div>
        </a>
      );
    }
    if (item.viit) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          <div className={iconWrapperClass}>
            <Image
              src="/viit.png"
              alt="VIIT logo"
              width={32}
              height={32}
              className="rounded-none"
            />
          </div>
        </a>
      );
    }
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
      >
        <div className={iconWrapperClass}>{item.icon}</div>
      </a>
    );
  };

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Guiding Through My Professional Path</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={getIcon(item)}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h3 className="font-semibold capitalize flex items-center gap-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors">
                  {item.title}
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
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
                </h3>
              </a>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
