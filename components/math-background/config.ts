/**
 * Math Circle Background Configuration
 *
 * Tweak these values to customize the geometric animation.
 * The pattern is based on "multiplication circles" - connecting
 * point i to point (factor * i) % N creates mesmerizing cardioid-like patterns.
 */

export const MATH_BG_CONFIG = {
  // === GEOMETRY ===
  /** Number of points distributed around the circle */
  numPoints: 220,

  /** Circle radius as fraction of the LARGER viewport dimension (spreads across screen) */
  radiusScale: 0.85,

  // === ANIMATION ===
  /** Minimum multiplication factor (creates simpler patterns) */
  factorMin: 2,

  /** Maximum multiplication factor (creates complex web patterns) */
  factorMax: 51,

  /** Animation speed - higher = faster oscillation */
  speed: 0.00005,

  // === APPEARANCE ===
  /** Line opacity (0-1) */
  lineAlpha: 0.15,

  /** Line thickness in pixels */
  lineWidth: 0.9,

  /** Line color - primary tone to be visible on #F8F8F8 */
  lineColor: "34, 34, 34", // RGB format - primary charcoal

  // === GLOW EFFECT ===
  /** Enable subtle center glow */
  glowEnabled: true,

  /** Glow intensity (0-1) */
  glowIntensity: 0.08,

  /** Glow color - secondary tint */
  glowColor: "123, 123, 123", // RGB format

  // === POSITION ===
  /** Horizontal offset from center (fraction of width, -1 to 1) */
  offsetX: 0,

  /** Vertical offset from center (fraction of height, -1 to 1) */
  offsetY: 0,

  // === HOVER EFFECTS ===
  /** Enable interactive mouse effects */
  hoverEnabled: true,

  /** How much the pattern center follows the mouse (0 = none, 1 = fully follows) */
  mouseFollowStrength: 0.08,

  /** Radius around cursor where lines get highlighted (in pixels) */
  hoverRadius: 150,

  /** Extra opacity boost for lines near cursor (added to lineAlpha) */
  hoverOpacityBoost: 0.25,

  /** Extra line thickness near cursor (added to lineWidth) */
  hoverWidthBoost: 0.6,

  /** Smoothing factor for mouse movement (lower = smoother, 0.01 to 0.3) */
  mouseSmoothing: 0.08,
} as const;

export type MathBgConfig = typeof MATH_BG_CONFIG;
