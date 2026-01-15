"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const GlitchText = ({ text, isHovered }: { text: string; isHovered: boolean }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!@#$%^&*()_+{}:<>?|1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    if (!isHovered) {
      return;
    }

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev.split("")
          .map((char, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iterations += 1/3;
      if (iterations >= text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered, text]);

  const handleMouseLeave = () => {
    setDisplayText(text);
  };

  return (
    <span 
      className="inline-block min-w-[1ch]"
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? displayText : text}
    </span>
  );
};

export const Projects = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter"
            >
              System <span className="text-neon-green">Archives</span>
            </motion.h2>
            <p className="text-foreground/40 text-sm font-mono">AUTHORIZED PERSONNEL ONLY // PROJECT_DATABASE.EXE</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <GlassCard className="group p-0 overflow-hidden border-white/5 h-full flex flex-col bg-slate-950/20 backdrop-blur-xl">
                <div className="relative h-64 overflow-hidden w-full">
                  {/* Glitch Layers */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <>
                        <motion.div 
                          className="absolute inset-0 z-20 mix-blend-screen bg-red-500/10 opacity-50"
                          animate={{ 
                            x: [0, -2, 2, -1, 0],
                            clipPath: [
                              "inset(10% 0 80% 0)",
                              "inset(40% 0 45% 0)",
                              "inset(70% 0 10% 0)",
                              "inset(0 0 0 0)"
                            ]
                          }}
                          transition={{ repeat: Infinity, duration: 0.2 }}
                        />
                        <motion.div 
                          className="absolute inset-0 z-20 mix-blend-screen bg-cyan-500/10 opacity-50"
                          animate={{ 
                            x: [0, 2, -2, 1, 0],
                            clipPath: [
                              "inset(80% 0 10% 0)",
                              "inset(45% 0 40% 0)",
                              "inset(10% 0 70% 0)",
                              "inset(0 0 0 0)"
                            ]
                          }}
                          transition={{ repeat: Infinity, duration: 0.2 }}
                        />
                      </>
                    )}
                  </AnimatePresence>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-300 ${hoveredId === project.id ? "scale-105 blur-[1px] brightness-125" : ""}`}
                  />
                  
                  {/* Digital Noise Overlay */}
                  <div className={`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay transition-opacity duration-300 ${hoveredId === project.id ? "opacity-40" : "opacity-0"}`} />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 z-30">
                    <span className="px-3 py-1 bg-neon-green/20 border border-neon-green/30 text-neon-green text-[10px] font-bold rounded-sm backdrop-blur-md uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col w-full text-left relative z-10">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-green transition-colors text-left uppercase tracking-tight font-mono">
                    <GlitchText text={project.title} isHovered={hoveredId === project.id} />
                  </h3>
                  <p className="text-foreground/50 mb-6 text-xs line-clamp-2 text-left font-sans leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <Link 
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neon-green/70 hover:text-neon-green transition-colors"
                    >
                      <span>Initialize Access</span>
                      <span className="text-xs">_</span>
                    </Link>
                    <span className="text-[10px] text-white/10 font-mono">0x{project.id.slice(0, 4)}</span>
                  </div>
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,128,0.03))] bg-[size:100%_4px,3px_100%] opacity-20" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
