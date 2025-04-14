"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaCloud } from "react-icons/fa";

type SkillCategory =
  | "Core Languages"
  | "Web Development"
  | "Data & ML"
  | "Infrastructure"
  | "Databases"
  | "Concepts";

interface SkillInfo {
  name: string;
}

// Group skills by category
const skillCategories: Record<SkillCategory, SkillInfo[]> = {
  "Core Languages": [
    { name: "Python" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Java" },
    { name: "C++" },
    { name: "R" },
  ],
  "Web Development": [
    { name: "React" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Django" },
    { name: "Flask" },
    { name: "Tailwind CSS" },
  ],
  "Data & ML": [
    { name: "Machine Learning" },
    { name: "LLM" },
    { name: "Deep Learning/NLP" },
    { name: "TensorFlow/PyTorch" },
    { name: "Data Analysis" },
    { name: "Hugging Face" },
    { name: "LangChain" },
  ],
  Infrastructure: [
    { name: "AWS/GCP" },
    { name: "Docker/Kubernetes" },
    { name: "CI/CD" },
  ],
  Databases: [
    { name: "SQL" },
    { name: "PostgreSQL" },
    { name: "DuckDB" },
    { name: "NoSQL" },
  ],
  Concepts: [
    { name: "Git/GitHub" },
    { name: "Design Patterns" },
    { name: "Microservices" },
    { name: "Restful" },
    { name: "GraphQL" },
    { name: "Redis" },
    { name: "Kafka" },
  ],
};

const categoryIcons: Record<SkillCategory, JSX.Element> = {
  "Core Languages": <FaCode className="text-2xl" />,
  "Web Development": <FaCode className="text-2xl" />,
  "Data & ML": <FaTools className="text-2xl" />,
  Infrastructure: <FaCloud className="text-2xl" />,
  Databases: <FaDatabase className="text-2xl" />,
  Concepts: <FaTools className="text-2xl" />,
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(
    null
  );
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Highlighting My Proficiencies</SectionHeading>

      <div className="bg-white/80 dark:bg-gray-800/40 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
        <div className="flex items-center mb-4 space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-code">
            skills.explorer
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 3D Cube Navigation */}
          <div className="relative h-[300px] perspective-1000">
            <motion.div
              className="w-full h-full relative preserve-3d"
              animate={{
                rotateY: activeCategory ? 180 : 0,
                rotateX: hoveredSkill ? 15 : 0,
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Front face */}
              <div className="absolute w-full h-full backface-hidden">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {Object.entries(skillCategories).map(
                    ([category, skills], index) => (
                      <motion.div
                        key={category}
                        className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/40 dark:to-gray-900/40 p-4 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05 }}
                        onClick={() =>
                          setActiveCategory(category as SkillCategory)
                        }
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {categoryIcons[category as SkillCategory]}
                          <h3 className="text-sm font-medium">{category}</h3>
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {skills.length} skills
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Back face */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                {activeCategory && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full bg-white dark:bg-gray-800/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 overflow-y-auto"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {categoryIcons[activeCategory as SkillCategory]}
                        <h3 className="text-lg font-medium">
                          {activeCategory}
                        </h3>
                      </div>
                      <button
                        onClick={() => setActiveCategory(null)}
                        className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        ← Back
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {skillCategories[activeCategory as SkillCategory].map(
                        (skill) => (
                          <motion.div
                            key={skill.name}
                            className="relative group"
                            onHoverStart={() => setHoveredSkill(skill.name)}
                            onHoverEnd={() => setHoveredSkill(null)}
                          >
                            <div className="block">
                              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 p-3 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:shadow-md transition-all">
                                <div className="text-sm font-medium break-words flex items-center justify-between">
                                  <span>{skill.name}</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Skill Details Panel */}
          <div className="bg-white/50 dark:bg-gray-800/20 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="text-left code-text">
              <span className="code-keyword">const</span>{" "}
              <span className="code-variable">skillDetails</span>{" "}
              <span className="code-bracket">=</span>{" "}
              <span className="code-bracket">{`{`}</span>
              <br />
              &nbsp;&nbsp;<span className="code-string">expertise</span>
              <span className="code-bracket">:</span>{" "}
              <span className="code-string">"Full-Stack Development"</span>
              <span className="code-bracket">,</span>
              <br />
              &nbsp;&nbsp;<span className="code-string">specialties</span>
              <span className="code-bracket">:</span>{" "}
              <span className="code-bracket">[</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="code-string">"AI/ML Systems"</span>
              <span className="code-bracket">,</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="code-string">"end-to-end solutions"</span>
              <span className="code-bracket">,</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="code-string">"Web Development"</span>
              <br />
              &nbsp;&nbsp;<span className="code-bracket">]</span>
              <span className="code-bracket">,</span>
              <br />
              <span className="code-bracket">{`}`}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
