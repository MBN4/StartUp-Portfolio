"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-neon-green uppercase border border-neon-green/20 rounded-full bg-neon-green/5 backdrop-blur-sm">
            Next-Gen Software Solutions
          </span>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">
              Masterpieces
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 mb-10 leading-relaxed">
            We blend Apple-inspired aesthetics with cutting-edge engineering to build immersive digital experiences that scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="group relative px-8 py-4 bg-neon-green text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#020617]">
                Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a href="#projects" className="px-8 py-4 glass rounded-full font-semibold transition-all hover:bg-white/5 active:scale-95">
              View Showcase
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
