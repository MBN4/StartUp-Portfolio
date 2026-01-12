"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui-theme-toggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "glass flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500",
          scrolled ? "px-4 py-2" : "px-8 py-4"
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-4 py-2 text-sm font-medium transition-colors"
            >
              <span className={cn(
                "relative z-10 transition-colors duration-300",
                hovered === item.name || scrolled ? "text-foreground" : "text-foreground/70"
              )}>
                {item.name}
              </span>
              {hovered === item.name && (
                <motion.div
                  layoutId="nav-hover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-neon-green/10 rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </div>
        
        <div className="w-px h-6 bg-glass-border mx-2" />
        
        <ThemeToggle />
      </motion.div>
    </nav>
  );
};
