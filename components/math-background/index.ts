/**
 * Math Background Module
 * 
 * A beautiful animated geometric background based on multiplication circles.
 * 
 * Usage:
 * ```tsx
 * import { MathCircleCanvas } from "@/components/math-background";
 * 
 * // Basic usage
 * <MathCircleCanvas />
 * 
 * // With custom config
 * <MathCircleCanvas config={{ numPoints: 200, lineAlpha: 0.1 }} />
 * ```
 */

export { MathCircleCanvas } from "./math-circle-canvas";
export { MATH_BG_CONFIG, type MathBgConfig } from "./config";
export { useMathAnimation } from "./use-math-animation";
