"use client";

import React, { useRef } from "react";
import { useMathAnimation } from "./use-math-animation";
import { MATH_BG_CONFIG, type MathBgConfig } from "./config";

interface MathCircleCanvasProps {
  /** Override default config values */
  config?: Partial<MathBgConfig>;
  /** Additional CSS class names */
  className?: string;
}

/**
 * Renders the animated multiplication circle pattern on a canvas.
 * 
 * The pattern connects points on a circle where point i connects to 
 * point (factor * i) % N, creating beautiful cardioid and nephroid curves.
 * 
 * As the factor smoothly oscillates, the pattern morphs between simple
 * and complex geometric forms - pure mathematical beauty.
 */
export function MathCircleCanvas({ 
  config: configOverrides,
  className = "" 
}: MathCircleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Merge any overrides with default config
  const config = configOverrides 
    ? { ...MATH_BG_CONFIG, ...configOverrides }
    : MATH_BG_CONFIG;

  useMathAnimation(canvasRef, config);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
