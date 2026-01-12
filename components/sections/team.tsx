"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const team = [
  {
    name: "Alex Rivet",
    role: "Full Stack Developer",
    bio: "Expert in building scalable web architectures and seamless frontend experiences.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop",
  },
  {
    name: "Sophia Chen",
    role: "Mobile App Developer",
    bio: "Specialist in high-performance native-quality iOS and Android applications.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop",
  },
  {
    name: "Marcus Vane",
    role: "Cyber Security Expert",
    bio: "Dedicated to securing digital assets and engineering bulletproof security protocols.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
  },
  {
    name: "Elena Rossi",
    role: "Project Manager",
    bio: "Master of workflow optimization and ensuring timely, elite delivery of masterpieces.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=687&auto=format&fit=crop",
  },
];

export const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % team.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);

  return (
    <section id="team" className="py-24 bg-neon-green/[0.02] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The <span className="text-neon-green">Collective</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Meet our specialist squad, elite engineers dedicated to your technical excellence.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <GlassCard className="group h-full flex flex-col items-center py-12">
                <div className="relative w-40 h-40 mb-8 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-neon-green/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-neon-green/30 z-10">
                    <Image
                      src={team[currentIndex].image}
                      alt={team[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">{team[currentIndex].name}</h3>
                <p className="text-neon-green text-sm font-bold mb-6 uppercase tracking-[0.2em]">{team[currentIndex].role}</p>
                <p className="text-center text-foreground/70 leading-relaxed px-4">
                  {team[currentIndex].bio}
                </p>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Manual Controls */}
          <div className="absolute top-1/2 -left-20 -right-20 -translate-y-1/2 flex justify-between pointer-events-none md:flex hidden">
            <button
              onClick={prev}
              className="p-4 rounded-full glass hover:bg-neon-green/20 text-neon-green transition-all pointer-events-auto active:scale-90"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={next}
              className="p-4 rounded-full glass hover:bg-neon-green/20 text-neon-green transition-all pointer-events-auto active:scale-90"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
          
          {/* Mobile Controls */}
          <div className="flex justify-center gap-6 mt-10 md:hidden">
            <button
              onClick={prev}
              className="p-3 rounded-full glass text-neon-green active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {team.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-neon-green w-6" : "bg-neon-green/20"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full glass text-neon-green active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
