"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectMockupProps {
  type: "cybersecurity" | "document-qa" | "teamcast";
  className?: string;
}

export default function ProjectMockup({
  type,
  className = "",
}: ProjectMockupProps) {
  const renderCybersecurityMockup = () => (
    <div className="bg-white dark:bg-[#2d2a2a] p-4 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">
          Security Dashboard
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-[#f6f9f1] dark:bg-[#231f1f] p-3 rounded border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-[#000000] dark:text-[#ffffff]">
              🚨 Critical Alert
            </div>
            <div className="text-xs text-red-500">2 min ago</div>
          </div>
          <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70 mt-1">
            Suspicious login attempt from 192.168.1.100
          </div>
        </div>

        <div className="bg-[#f6f9f1] dark:bg-[#231f1f] p-3 rounded border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-[#000000] dark:text-[#ffffff]">
              ⚠️ Warning
            </div>
            <div className="text-xs text-yellow-500">5 min ago</div>
          </div>
          <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70 mt-1">
            Multiple failed authentication attempts
          </div>
        </div>

        <div className="bg-[#f6f9f1] dark:bg-[#231f1f] p-3 rounded border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-[#000000] dark:text-[#ffffff]">
              ✅ Normal
            </div>
            <div className="text-xs text-green-500">10 min ago</div>
          </div>
          <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70 mt-1">
            System health check passed
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between text-xs text-[#000000]/70 dark:text-[#ffffff]/70">
        <span>Threats Detected: 3</span>
        <span>Accuracy: 85%</span>
      </div>
    </div>
  );

  const renderDocumentQAMockup = () => (
    <div className="bg-white dark:bg-[#2d2a2a] p-4 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">
          Document AI
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-[#f6f9f1] dark:bg-[#231f1f] p-3 rounded">
          <div className="text-sm font-medium text-[#000000] dark:text-[#ffffff] mb-2">
            📄 Upload Document
          </div>
          <div className="border-2 border-dashed border-[#dae2e2] dark:border-[#797d59]/40 p-2 rounded text-center text-xs text-[#000000]/70 dark:text-[#ffffff]/70">
            Drag & drop PDF here
          </div>
        </div>

        <div className="bg-[#f6f9f1] dark:bg-[#231f1f] p-3 rounded">
          <div className="text-sm font-medium text-[#000000] dark:text-[#ffffff] mb-2">
            🤖 AI Processing
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#797d59] rounded-full animate-pulse"></div>
            <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">
              Extracting text and creating embeddings...
            </div>
          </div>
        </div>

        <div className="bg-[#f6f9f1] dark:bg-[#231f1f] p-3 rounded">
          <div className="text-sm font-medium text-[#000000] dark:text-[#ffffff] mb-2">
            💬 Ask Questions
          </div>
          <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">
            "What are the main findings in section 3?"
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeamcastMockup = () => (
    <div className="bg-white dark:bg-[#2d2a2a] p-4 rounded-lg border border-[#dae2e2] dark:border-[#797d59]/40 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">
          Teamcast.ai
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-[#f6f9f1] dark:bg-[#231f1f] p-3 rounded">
          <div className="text-sm font-medium text-[#000000] dark:text-[#ffffff] mb-2">
            🎯 Meeting in Progress
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-[#797d59] rounded-full flex items-center justify-center text-xs text-white">
              A
            </div>
            <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">
              Alice Johnson
            </div>
          </div>
          <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">
            "Let's discuss the Q3 roadmap..."
          </div>
        </div>

        <div className="bg-[#f6f9f1] dark:bg-[#231f1f] p-3 rounded">
          <div className="text-sm font-medium text-[#000000] dark:text-[#ffffff] mb-2">
            📝 AI Summary
          </div>
          <div className="text-xs text-[#000000]/70 dark:text-[#ffffff]/70">
            • Discussed product roadmap
            <br />
            • Assigned tasks to team members
            <br />• Next meeting: Friday 2PM
          </div>
        </div>
      </div>
    </div>
  );

  const getMockup = () => {
    switch (type) {
      case "cybersecurity":
        return renderCybersecurityMockup();
      case "document-qa":
        return renderDocumentQAMockup();
      case "teamcast":
        return renderTeamcastMockup();
      default:
        return renderCybersecurityMockup();
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {getMockup()}
    </motion.div>
  );
}
