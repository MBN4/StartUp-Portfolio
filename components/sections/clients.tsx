"use client";

import React from "react";
import { InfiniteScroll } from "@/components/ui/infinite-scroll";
import { Apple, Ghost, Hexagon, Layers, Shield, Zap } from "lucide-react";

import { clientsHeader, clientLogos } from "@/lib/clients";

const IconMap: Record<string, React.ReactNode> = {
  Apple: <Apple className="w-10 h-10" />,
  Layers: <Layers className="w-10 h-10" />,
  Zap: <Zap className="w-10 h-10" />,
  Hexagon: <Hexagon className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
  Ghost: <Ghost className="w-10 h-10" />,
};

export const Clients = () => {
  return (
    <section className="py-12 border-y border-glass-border bg-neon-green/[0.01]">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/30">
          {clientsHeader.text}
        </p>
      </div>
      
      <InfiniteScroll speed={30} direction="right" pauseOnHover={false}>
        {clientLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center gap-3 px-12 py-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 hover:text-neon-green transition-all duration-500 cursor-default"
          >
            {IconMap[logo.iconName]}
            <span className="text-xl font-bold tracking-tighter">{logo.name}</span>
          </div>
        ))}
      </InfiniteScroll>
    </section>
  );
};
