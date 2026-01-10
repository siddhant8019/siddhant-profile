"use client";

import React from "react";
import { MathCircleCanvas } from "./math-background";

/**
 * Interactive Background Component
 * 
 * Renders the animated mathematical multiplication circle pattern.
 * The animation creates mesmerizing cardioid-like geometric forms
 * by connecting points on a circle using modular arithmetic.
 * 
 * Customize the animation by editing: components/math-background/config.ts
 */
export default function InteractiveBackground() {
  return <MathCircleCanvas />;
}
