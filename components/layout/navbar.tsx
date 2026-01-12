"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui-theme-toggle";
import { Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={cn(
            "glass flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 max-w-full overflow-hidden",
            scrolled ? "px-4 py-2" : "px-8 py-4"
          )}
          style={{
            perspective: "1000px",
          }}
        >
          {/* Logo/Brand or just spacer for symmetry */}
          <div className="md:hidden flex items-center pr-2">
            <span className="text-neon-green font-black text-xl italic tracking-tighter">L</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
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

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground/70 hover:text-neon-green transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          <div className="w-px h-6 bg-glass-border mx-2" />
          
          <ThemeToggle />
        </motion.div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed inset-x-4 top-28 z-40 md:hidden"
          >
            <div className="glass rounded-3xl p-6 flex flex-col gap-2 shadow-2xl border border-white/10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 text-lg font-bold uppercase tracking-widest hover:bg-neon-green/10 rounded-2xl transition-all active:scale-95 flex items-center justify-between group"
                >
                  <span className="group-hover:text-neon-green transition-colors">{item.name}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-green/20 group-hover:bg-neon-green transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
