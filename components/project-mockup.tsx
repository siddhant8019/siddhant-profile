"use client";

import React from "react";

interface ProjectMockupProps {
  type: "cybersecurity" | "document-qa" | "teamcast";
  className?: string;
}

export default function ProjectMockup({
  type,
  className = "",
}: ProjectMockupProps) {
  const renderCybersecurityMockup = () => (
    <div className="glass-card card-hover p-4 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-[#222222] rounded-full"></div>
          <div className="w-3 h-3 bg-[#7B7B7B] rounded-full"></div>
          <div className="w-3 h-3 bg-[#222222]/30 rounded-full"></div>
        </div>
        <div className="text-xs text-[#222222]/70">
          Security Dashboard
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-[#F8F8F8] p-3 rounded border-l-4 border-[#222222]">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-[#222222]">
              🚨 Critical Alert
            </div>
            <div className="text-xs text-[#7B7B7B]">2 min ago</div>
          </div>
          <div className="text-xs text-[#222222]/70 mt-1">
            Suspicious login attempt from 192.168.1.100
          </div>
        </div>

        <div className="bg-[#F8F8F8] p-3 rounded border-l-4 border-[#7B7B7B]">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-[#222222]">
              ⚠️ Warning
            </div>
            <div className="text-xs text-[#7B7B7B]">5 min ago</div>
          </div>
          <div className="text-xs text-[#222222]/70 mt-1">
            Multiple failed authentication attempts
          </div>
        </div>

        <div className="bg-[#F8F8F8] p-3 rounded border-l-4 border-[#222222]/40">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-[#222222]">
              ✅ Normal
            </div>
            <div className="text-xs text-[#7B7B7B]">10 min ago</div>
          </div>
          <div className="text-xs text-[#222222]/70 mt-1">
            System health check passed
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-between text-xs text-[#222222]/70">
        <span>Threats Detected: 3</span>
        <span>Accuracy: 85%</span>
      </div>
    </div>
  );

  const renderDocumentQAMockup = () => (
    <div className="glass-card card-hover p-4 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-[#222222] rounded-full"></div>
          <div className="w-3 h-3 bg-[#7B7B7B] rounded-full"></div>
          <div className="w-3 h-3 bg-[#222222]/30 rounded-full"></div>
        </div>
        <div className="text-xs text-[#222222]/70">
          Document AI
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-[#F8F8F8] p-3 rounded">
          <div className="text-sm font-medium text-[#222222] mb-2">
            📄 Upload Document
          </div>
          <div className="border-2 border-dashed border-[#7B7B7B]/30 p-2 rounded text-center text-xs text-[#222222]/70">
            Drag & drop PDF here
          </div>
        </div>

        <div className="bg-[#F8F8F8] p-3 rounded">
          <div className="text-sm font-medium text-[#222222] mb-2">
            🤖 AI Processing
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#7B7B7B] rounded-full animate-pulse"></div>
            <div className="text-xs text-[#222222]/70">
              Extracting text and creating embeddings...
            </div>
          </div>
        </div>

        <div className="bg-[#F8F8F8] p-3 rounded">
          <div className="text-sm font-medium text-[#222222] mb-2">
            💬 Ask Questions
          </div>
          <div className="text-xs text-[#222222]/70">
            "What are the main findings in section 3?"
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeamcastMockup = () => (
    <div className="glass-card card-hover p-4 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-[#222222] rounded-full"></div>
          <div className="w-3 h-3 bg-[#7B7B7B] rounded-full"></div>
          <div className="w-3 h-3 bg-[#222222]/30 rounded-full"></div>
        </div>
        <div className="text-xs text-[#222222]/70">
          Teamcast.ai
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-[#F8F8F8] p-3 rounded">
          <div className="text-sm font-medium text-[#222222] mb-2">
            🎯 Meeting in Progress
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-[#222222] rounded-full flex items-center justify-center text-xs text-[#FFFFFF]">
              A
            </div>
            <div className="text-xs text-[#222222]/70">
              Alice Johnson
            </div>
          </div>
          <div className="text-xs text-[#222222]/70">
            "Let's discuss the Q3 roadmap..."
          </div>
        </div>

        <div className="bg-[#F8F8F8] p-3 rounded">
          <div className="text-sm font-medium text-[#222222] mb-2">
            📝 AI Summary
          </div>
          <div className="text-xs text-[#222222]/70">
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

  return <div className={`relative ${className}`}>{getMockup()}</div>;
}
