"use client";

import React from "react";
import { BsArrowRight, BsGithub } from "react-icons/bs";

export default function FeaturedProject() {
  return (
    <section className="mb-16 sm:mb-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="gradient-panel card-hover p-10 rounded-[6px]">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#FFFFFF] px-3 py-1 rounded-[4px] text-sm font-medium mb-4 shadow-sm">
                <span>Featured Project</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
                Multi-Agent Lead Generation System
              </h2>

              <p className="text-lg text-[#1a1a1a]/80 mb-6 leading-relaxed">
                A sophisticated AI system that automates lead discovery and qualification across 12+ data sources, 
                delivering 3x more qualified prospects with 80% reduction in manual research time.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-card card-ambient p-5 rounded-[6px]">
                  <div className="text-2xl font-bold text-[#1a1a1a] mb-1">3x</div>
                  <div className="text-sm text-[#1a1a1a]/70">More Qualified Leads</div>
                </div>
                <div className="glass-card card-ambient p-5 rounded-[6px]">
                  <div className="text-2xl font-bold text-[#1a1a1a] mb-1">80%</div>
                  <div className="text-sm text-[#1a1a1a]/70">Less Manual Work</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["CrewAI", "FastAPI", "Redis", "Weaviate", "OpenAI", "Docker"].map((tech, index) => (
                  <span
                    key={tech}
                    className="bg-[#5c5c5c]/15 text-[#1a1a1a] px-3 py-1 rounded-[4px] text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/mail"
                  className="group btn-primary btn-advanced px-6 py-3 flex items-center gap-2 rounded-[4px]"
                >
                  Request Demo
                  <BsArrowRight className="opacity-70 group-hover:translate-x-0.5 transition-transform duration-500 ease-fluid" />
                </a>
                <a
                  href="/work"
                  className="group btn-secondary btn-advanced px-6 py-3 flex items-center gap-2 rounded-[4px]"
                >
                  View All Projects
                  <BsArrowRight className="opacity-70 group-hover:translate-x-0.5 transition-transform duration-500 ease-fluid" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card card-hover card-ambient p-7 rounded-[6px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-[#1a1a1a] rounded-[4px]"></div>
                      <div className="w-3 h-3 bg-[#5c5c5c] rounded-[4px]"></div>
                      <div className="w-3 h-3 bg-[#1a1a1a]/30 rounded-[4px]"></div>
                    </div>
                    <div className="text-xs text-[#1a1a1a]/70">Multi-Agent System</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-[#F5F4F0] p-3 rounded border-l-4 border-[#1a1a1a]">
                      <div className="text-sm font-medium text-[#1a1a1a]">Lead Discovery Agent</div>
                      <div className="text-xs text-[#1a1a1a]/70">Scanning 12+ data sources...</div>
                    </div>
                    
                    <div className="bg-[#F5F4F0] p-3 rounded border-l-4 border-[#1a1a1a]">
                      <div className="text-sm font-medium text-[#1a1a1a]">Research Agent</div>
                      <div className="text-xs text-[#1a1a1a]/70">Analyzing company data...</div>
                    </div>
                    
                    <div className="bg-[#F5F4F0] p-3 rounded border-l-4 border-[#1a1a1a]">
                      <div className="text-sm font-medium text-[#1a1a1a]">Qualification Agent</div>
                      <div className="text-xs text-[#1a1a1a]/70">Scoring lead quality...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
