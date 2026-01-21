"use client";

import { useEffect, useRef } from "react";
import { MATH_BG_CONFIG, type MathBgConfig } from "./config";

interface Point {
  x: number;
  y: number;
}

/**
 * Custom hook that handles the math circle animation logic.
 * Includes interactive mouse hover effects.
 */
export function useMathAnimation(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  config: MathBgConfig = MATH_BG_CONFIG
) {
  const animationRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const pointsRef = useRef<Point[]>([]);
  
  // Mouse tracking refs
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });
  const isMouseInViewRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Precompute points on unit circle
    const points: Point[] = [];
    for (let i = 0; i < config.numPoints; i++) {
      const theta = (2 * Math.PI * i) / config.numPoints;
      points.push({
        x: Math.cos(theta),
        y: Math.sin(theta),
      });
    }
    pointsRef.current = points;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Handle high-DPI displays
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Mouse tracking handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      isMouseInViewRef.current = true;
    };

    const handleMouseLeave = () => {
      isMouseInViewRef.current = false;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      smoothMouseRef.current = { x: e.clientX, y: e.clientY };
      isMouseInViewRef.current = true;
    };

    if (config.hoverEnabled) {
      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
    }

    // Calculate smooth oscillating factor
    const getFactor = (t: number) => {
      const phase = (Math.sin(t) + 1) / 2; // 0 to 1
      return config.factorMin + (config.factorMax - config.factorMin) * phase;
    };

    // Calculate distance from a point to mouse
    const getDistanceToMouse = (px: number, py: number) => {
      const dx = px - smoothMouseRef.current.x;
      const dy = py - smoothMouseRef.current.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // Main draw function
    const draw = () => {
      const pts = pointsRef.current;
      if (pts.length === 0) return;

      // Smooth mouse movement
      if (config.hoverEnabled && isMouseInViewRef.current) {
        smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * config.mouseSmoothing;
        smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * config.mouseSmoothing;
      }

      // Use MAX dimension so pattern spreads across entire viewport
      const radius = Math.max(width, height) * config.radiusScale;

      // Calculate center with offset + mouse follow effect
      let cx = width / 2 + width * config.offsetX;
      let cy = height / 2 + height * config.offsetY;

      // Apply mouse follow effect
      if (config.hoverEnabled && isMouseInViewRef.current) {
        const mouseOffsetX = (smoothMouseRef.current.x - width / 2) * config.mouseFollowStrength;
        const mouseOffsetY = (smoothMouseRef.current.y - height / 2) * config.mouseFollowStrength;
        cx += mouseOffsetX;
        cy += mouseOffsetY;
      }

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Get current factor
      const factor = getFactor(timeRef.current);

      ctx.save();
      ctx.translate(cx, cy);

      // Draw center glow if enabled
      if (config.glowEnabled) {
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 1.2);
        gradient.addColorStop(
          0,
          `rgba(${config.glowColor}, ${config.glowIntensity})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(${config.glowColor}, ${config.glowIntensity * 0.3})`
        );
        gradient.addColorStop(1, `rgba(${config.glowColor}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, radius * 1.2, 0, 2 * Math.PI);
        ctx.fill();
      }

      ctx.lineCap = "round";

      // Draw all chords - with hover effect
      if (config.hoverEnabled && isMouseInViewRef.current) {
        // Draw lines individually for hover effect
        for (let i = 0; i < config.numPoints; i++) {
          const j = Math.floor((factor * i) % config.numPoints);
          const p1 = pts[i];
          const p2 = pts[j];

          // Calculate world positions of line endpoints
          const x1 = cx + p1.x * radius;
          const y1 = cy + p1.y * radius;
          const x2 = cx + p2.x * radius;
          const y2 = cy + p2.y * radius;

          // Get distance from line midpoint to mouse
          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;
          const dist = getDistanceToMouse(midX, midY);

          // Calculate hover intensity (1 at cursor, 0 at hoverRadius)
          const hoverIntensity = Math.max(0, 1 - dist / config.hoverRadius);

          // Apply hover effects
          const alpha = config.lineAlpha + hoverIntensity * config.hoverOpacityBoost;
          const lineWidth = config.lineWidth + hoverIntensity * config.hoverWidthBoost;

          ctx.strokeStyle = `rgba(${config.lineColor}, ${alpha})`;
          ctx.lineWidth = lineWidth;

          ctx.beginPath();
          ctx.moveTo(p1.x * radius, p1.y * radius);
          ctx.lineTo(p2.x * radius, p2.y * radius);
          ctx.stroke();
        }
      } else {
        // Draw all chords in a single path for performance (no hover)
        ctx.lineWidth = config.lineWidth;
        ctx.strokeStyle = `rgba(${config.lineColor}, ${config.lineAlpha})`;

        ctx.beginPath();
        for (let i = 0; i < config.numPoints; i++) {
          const j = Math.floor((factor * i) % config.numPoints);
          const p1 = pts[i];
          const p2 = pts[j];

          ctx.moveTo(p1.x * radius, p1.y * radius);
          ctx.lineTo(p2.x * radius, p2.y * radius);
        }
        ctx.stroke();
      }

      ctx.restore();
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Draw single static frame
      draw();
    } else {
      // Animation loop
      const animate = () => {
        timeRef.current += config.speed;
        draw();
        animationRef.current = requestAnimationFrame(animate);
      };
      animate();
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (config.hoverEnabled) {
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
      }
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [config, canvasRef]);
}
