"use client";

import React from "react";

export default function InteractiveBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#F8F8F8]" />
      <div className="animated-background" />
      <div className="floating-orb -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 bg-[#FFFFFF]" />
      <div className="floating-orb secondary top-1/3 -left-24 h-[26rem] w-[26rem] bg-[#FFFFFF]" />
      <div className="floating-orb tertiary bottom-[-14rem] right-[-6rem] h-[30rem] w-[30rem] bg-[#FFFFFF]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,34,34,0.06),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(123,123,123,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,34,34,0.04)_0%,transparent_55%)]" />
      <div className="noise-overlay" />
    </div>
  );
}
