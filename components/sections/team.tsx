"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import Image from "next/image";
import { team } from "@/lib/team";
import { InfiniteScroll } from "@/components/ui/infinite-scroll";

export const Team = () => {
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

        <div className="w-full">
          <InfiniteScroll speed={40} direction="right">
            {team.map((member, index) => (
              <GlassCard 
                key={`${member.name}-${index}`} 
                className="group flex flex-col items-center py-10 px-6 w-[350px] mx-4 hover:border-neon-green/30 transition-colors duration-500"
              >
                <div className="relative w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-700">
                  <div className="absolute inset-0 bg-neon-green/10 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-neon-green/20 z-10 group-hover:border-neon-green/50 transition-colors">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-neon-green transition-colors">{member.name}</h3>
                  <p className="text-neon-green text-[10px] font-bold mb-4 uppercase tracking-[0.3em] opacity-80">{member.role}</p>
                  <p className="text-foreground/50 text-xs leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </GlassCard>
            ))}
          </InfiniteScroll>
        </div>
      </div>
      
      {/* Background Gradient for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};
