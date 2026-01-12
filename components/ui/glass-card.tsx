"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}

export const GlassCard = ({ children, className, tilt = true }: GlassCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "glass-premium rounded-2xl p-6 relative overflow-hidden transition-shadow duration-500",
        "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
        className
      )}
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col items-center">
        {children}
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-neon-green/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};
