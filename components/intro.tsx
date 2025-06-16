"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpeg"
              alt="Siddhant portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👨‍💻
          </motion.span>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-gray-800/40 rounded-lg p-4 mt-6 shadow-sm border border-gray-200 dark:border-gray-700 backdrop-blur-sm max-w-[36rem] mx-auto">
        <div className="flex items-center mb-2 space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-code">
            developer.profile
          </div>
        </div>

        <motion.h1
          className="mb-6 px-4 text-base sm:text-lg !leading-[1.5] code-text text-left"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="code-keyword">const</span>{" "}
          <span className="code-variable">developer</span>{" "}
          <span className="code-bracket">=</span>{" "}
          <span className="code-bracket">{`{`}</span>
          <br />
          &nbsp;&nbsp;<span className="code-string">name</span>
          <span className="code-bracket">:</span>{" "}
          <span className="code-string">"Siddhant Nitin"</span>
          <span className="code-bracket">,</span>
          <br />
          &nbsp;&nbsp;<span className="code-string">role</span>
          <span className="code-bracket">:</span>{" "}
          <span className="code-string">"Software Engineer"</span>
          <span className="code-bracket">,</span>
          <br />
          &nbsp;&nbsp;<span className="code-string">skills</span>
          <span className="code-bracket">:</span>{" "}
          <span className="code-bracket">[</span>
          <span className="code-string">"AI"</span>
          <span className="code-bracket">,</span>
          <span className="code-string">"Full-Stack"</span>
          <span className="code-bracket">,</span>
          <span className="code-string">"Problem Solving"</span>
          <span className="code-bracket">]</span>
          <span className="code-bracket">,</span>
          <br />
          &nbsp;&nbsp;<span className="code-function">create</span>
          <span className="code-bracket">:</span>{" "}
          <span className="code-bracket">(</span>
          <span className="code-variable">ideas</span>
          <span className="code-bracket">)</span>{" "}
          <span className="code-keyword">{"=>"}</span>{" "}
          <span className="code-string">"efficient & scalable systems"</span>
          <span className="code-bracket">,</span>
          <br />
          &nbsp;&nbsp;
          <span className="code-comment">
            {/* I craft digital solutions that make a difference */}
          </span>
          <br />
          <span className="code-bracket">{`}`}</span>
        </motion.h1>

        <motion.div
          className="px-4 text-xs sm:text-sm text-left code-text mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="code-keyword">export default</span>{" "}
          <span className="code-function">
            Full-Stack & AI/ML- oriented Software Engineer
          </span>
          <span className="code-bracket">;</span>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-sm font-medium mt-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group z-10 bg-white px-5 py-2 flex items-center gap-2 rounded-md outline-none hover:scale-105 active:scale-100 transition cursor-pointer border border-gray-200 hover:border-gray-300 dark:bg-white/10 dark:border-gray-700 dark:hover:border-gray-600 code-text"
          href="https://drive.google.com/file/d/1UOeLtTotuDFfFq7ul-hgXzf7DP1AB6UW/view?usp=sharing"
          download
        >
          <span className="code-variable">resume</span>
          <span className="code-bracket">.</span>
          <span className="code-function">download</span>
          <span className="code-bracket">()</span>
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex space-x-1 sm:ml-2">
          <a
            className="bg-white p-3 text-gray-700 hover:text-gray-900 flex items-center gap-2 rounded-md hover:scale-110 active:scale-105 transition cursor-pointer border border-gray-200 hover:border-gray-300 dark:bg-white/10 dark:text-white/60 dark:border-gray-700 dark:hover:border-gray-600"
            href="https://linkedin.com/in/siddhantnpatil"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-md hover:scale-110 active:scale-105 transition cursor-pointer border border-gray-200 hover:border-gray-300 dark:bg-white/10 dark:text-white/60 dark:border-gray-700 dark:hover:border-gray-600"
            href="https://github.com/siddhant8019"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
