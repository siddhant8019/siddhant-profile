"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState } from "react";
import { BsMedium } from "react-icons/bs";

const blogs = [
  {
    title: "RAG PDFs in Minutes with Google Cloud's Vertex AI",
    description:
      "Learn how to build a production-ready RAG system for PDFs using Google Cloud's Vertex AI, complete with secure API access and a sleek frontend.",
    link: "https://medium.com/siddhants-ai-lab/rag-pdfs-in-minutes-with-google-clouds-vertex-ai-7baa824ba66f",
    date: "April 2024",
  },
  {
    title: "Eye Track Analysis: Building an Impairment Detection System",
    description:
      "Explore how to build an impairment detection system using just eye movements, leveraging computer vision and machine learning techniques.",
    link: "https://medium.com/@siddhantnitin/️-️-eye-track-analysis-building-an-impairment-detection-system-with-just-eye-movements-f877bca560e0",
    date: "March 2024",
  },
  {
    title:
      "From Lines of Code to Conversations: How Cursor is Rewriting the IDE",
    description:
      "Discover how Cursor is revolutionizing the IDE experience by integrating AI-powered conversations into the development workflow.",
    link: "https://medium.com/@siddhantnitin/from-lines-of-code-to-conversations-how-cursor-is-rewriting-the-ide-2383a387e3d8",
    date: "February 2024",
  },
];

export default function Blog() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Blog");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="blog"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Thoughts
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="group bg-white/80 dark:bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-all"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4 group-hover:scale-105 transition-transform">
              <BsMedium className="text-2xl mr-2 group-hover:rotate-12 transition-transform" />
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {blog.date}
              </span>
            </div>
            <motion.h3
              className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {blog.title}
            </motion.h3>
            <p
              className={`text-gray-600 dark:text-gray-300 mb-4 transition-all duration-300 ${
                hoveredIndex === index ? "line-clamp-none" : "line-clamp-3"
              }`}
            >
              {blog.description}
            </p>
            <motion.a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Read More
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
