"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Team", href: "/#team" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 w-full">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={cn(
            "glass flex items-center justify-between gap-2 px-6 py-3 rounded-full transition-all duration-500 w-full max-w-5xl overflow-hidden md:justify-center md:w-auto",
            scrolled ? "px-4 py-2" : "px-8 py-4"
          )}
          style={{
            perspective: "1000px",
          }}
        >
          {/* Logo/Brand */}
          <div className="flex items-center pr-2">
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
              className="p-2 text-foreground/70 hover:text-neon-green transition-colors relative z-50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Overlay - Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] md:hidden bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            {/* Background Decoration for Mobile Menu */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="group relative"
                >
                  <span className="text-4xl font-bold uppercase tracking-[0.2em] text-foreground/40 group-hover:text-neon-green transition-all duration-300">
                    {item.name}
                  </span>
                  <motion.div 
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-neon-green origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </motion.a>
              ))}
            </div>

            {/* Close Button Inside Full Screen */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 p-4 text-foreground/40 hover:text-neon-green transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
