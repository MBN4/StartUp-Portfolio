"use client";

import React from "react";
import { InfiniteScroll } from "@/components/ui/infinite-scroll";
import { Apple, Ghost, Hexagon, Layers, Shield, Zap } from "lucide-react";

const clientLogos = [
  { name: "Apple", icon: <Apple className="w-10 h-10" /> },
  { name: "TechFlow", icon: <Layers className="w-10 h-10" /> },
  { name: "GreenScale", icon: <Zap className="w-10 h-10" /> },
  { name: "Zenith", icon: <Hexagon className="w-10 h-10" /> },
  { name: "Aura", icon: <Shield className="w-10 h-10" /> },
  { name: "Imagine", icon: <Ghost className="w-10 h-10" /> },
];

export const Clients = () => {
  return (
    <section className="py-12 border-y border-glass-border bg-neon-green/[0.01]">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/30">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <InfiniteScroll speed={30} direction="right" pauseOnHover={false}>
        {clientLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center gap-3 px-12 py-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 hover:text-neon-green transition-all duration-500 cursor-default"
          >
            {logo.icon}
            <span className="text-xl font-bold tracking-tighter">{logo.name}</span>
          </div>
        ))}
      </InfiniteScroll>
    </section>
  );
};
