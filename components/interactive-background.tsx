"use client";

import React from "react";

export default function InteractiveBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#F2F2F2]" />
      <div className="animated-background" />
      <div className="mesh-overlay" />
      <div className="floating-orb -top-52 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 bg-[#FFFFFF] opacity-90" />
      <div className="floating-orb secondary top-1/4 -left-28 h-[34rem] w-[34rem] bg-[#FFFFFF] opacity-85" />
      <div className="floating-orb tertiary bottom-[-16rem] right-[-8rem] h-[36rem] w-[36rem] bg-[#FFFFFF] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,34,34,0.1),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(123,123,123,0.14),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,34,34,0.08)_0%,transparent_55%)]" />
      <div className="noise-overlay" />
    </div>
  );
}
