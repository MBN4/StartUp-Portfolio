"use client";
import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export const Scene = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-performance following
  const spotlightX = useSpring(mouseX, { damping: 50, stiffness: 500 });
  const spotlightY = useSpring(mouseY, { damping: 50, stiffness: 500 });

  // Use useTransform to create spring-animated pixel strings
  const x = useTransform(spotlightX, (val) => `${val}px`);
  const y = useTransform(spotlightY, (val) => `${val}px`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#020617]">
      {/* Dynamic Spotlight */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          background: `radial-gradient(circle 800px at var(--x) var(--y), rgba(16, 185, 129, 0.15), transparent 80%)`,
          // @ts-expect-error - Custom properties for CSS
          "--x": x,
          "--y": y,
        }}
      />

      {/* Interactive Dot Grid */}
      <div 
        className="absolute inset-x-0 inset-y-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.03) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle 400px at var(--x) var(--y), rgba(16, 185, 129, 0.05) 0%, transparent 100%)`,
            // @ts-expect-error - Custom properties for CSS
            "--x": x,
            "--y": y,
          }}
        />
      </div>

      {/* Grain/Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] z-10 mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Subtle bottom flare */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-emerald-950/20 to-transparent z-0" />
    </div>
  );
};
