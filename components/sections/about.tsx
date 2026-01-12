"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Eye, Target, Zap } from "lucide-react";

const aboutData = [
  {
    title: "Our Mission",
    description: "To empower businesses with high-end digital products that combine seamless functionality with breathtaking design.",
    icon: <Target className="w-8 h-8 text-neon-green" />,
  },
  {
    title: "Our Vision",
    description: "To become the global benchmark for creative engineering and premium user experience in the software industry.",
    icon: <Eye className="w-8 h-8 text-neon-green" />,
  },
  {
    title: "Our Values",
    description: "Excellence, innovation, and transparency are at the core of everything we build. We don't just write code; we create value.",
    icon: <Zap className="w-8 h-8 text-neon-green" />,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Engineering with <span className="text-neon-green">Purpose</span>
          </motion.h2>
          <div className="w-20 h-1 bg-neon-green mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="h-full flex flex-col items-center text-center group">
                <div className="mb-6 p-4 rounded-2xl bg-neon-green/10 border border-neon-green/20 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
