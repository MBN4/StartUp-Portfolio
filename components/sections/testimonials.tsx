"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Quote } from "lucide-react";
import { InfiniteScroll } from "@/components/ui/infinite-scroll";

import { testimonialsHeader, testimonialsData } from "@/lib/testimonials";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {testimonialsHeader.title} <span className="text-neon-green">{testimonialsHeader.highlight}</span>
          </motion.h2>
          <div className="w-20 h-1 bg-neon-green mx-auto rounded-full" />
        </div>
      </div>

      <InfiniteScroll speed={60} pauseOnHover={true}>
        {testimonialsData.map((t, index) => (
          <GlassCard key={`${t.author}-${index}`} className="w-[400px] h-[300px] flex flex-col relative pt-12 mx-4">
            <div className="absolute top-6 left-6 text-neon-green opacity-20">
              <Quote className="w-12 h-12" />
            </div>
            <p className="text-lg italic text-foreground/80 mb-8 relative z-10 line-clamp-4">
              &quot;{t.quote}&quot;
            </p>
            <div className="mt-auto">
              <p className="font-bold text-lg">{t.author}</p>
              <p className="text-neon-green text-sm font-medium">{t.role}</p>
            </div>
          </GlassCard>
        ))}
      </InfiniteScroll>
    </section>
  );
};
