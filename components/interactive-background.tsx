"use client";

import React from "react";

export default function InteractiveBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#F5F4F0]" />
      <div className="animated-background" />
      <div className="noise-overlay" />
    </div>
  );
}
