"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Code2, ShieldCheck, Rocket, Smartphone } from "lucide-react";

import { servicesHeader, servicesData } from "@/lib/services";

const IconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-8 h-8 text-neon-green" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-neon-green" />,
  Rocket: <Rocket className="w-8 h-8 text-neon-green" />,
  Smartphone: <Smartphone className="w-8 h-8 text-neon-green" />,
};

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {servicesHeader.title} <span className="text-neon-green">{servicesHeader.highlight}</span>
          </motion.h2>
          <div className="w-20 h-1 bg-neon-green mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full group hover:bg-neon-green/[0.02]">
                <div className="mb-6 p-3 w-fit rounded-xl bg-neon-green/10 border border-neon-green/20 group-hover:scale-110 transition-transform">
                  {IconMap[service.iconName]}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
