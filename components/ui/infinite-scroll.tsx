"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface InfiniteScrollProps {
  children: React.ReactNode[];
  direction?: "left" | "right";
  speed?: number; // duration in seconds
  className?: string;
  pauseOnHover?: boolean;
}

export const InfiniteScroll = ({
  children,
  direction = "left",
  speed = 40,
  className,
  pauseOnHover = true,
}: InfiniteScrollProps) => {
  const [scrolling, setScrolling] = useState(true);

  return (
    <div
      className={cn("mask-horizontal overflow-hidden w-full", className)}
      onMouseEnter={() => pauseOnHover && setScrolling(false)}
      onMouseLeave={() => pauseOnHover && setScrolling(true)}
    >
      <div
        className={cn(
          "flex w-max",
          scrolling ? (direction === "left" ? "animate-scroll-left" : "animate-scroll-right") : "pause"
        )}
        style={{
          animationDuration: `${speed}s`,
        } as React.CSSProperties}
      >
        <div className="flex gap-8 px-4">
          {children.map((child, i) => (
            <div key={`original-${i}`} className="flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
        <div className="flex gap-8 px-4">
          {children.map((child, i) => (
            <div key={`duplicate-${i}`} className="flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
