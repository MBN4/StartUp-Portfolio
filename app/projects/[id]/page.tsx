"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowLeft, Rocket, Code2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-neon-green hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Showcase
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Navigation */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-neon-green transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Showcase
        </Link>

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-neon-green font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter">
              {project.title}
            </h1>
          </motion.div>
          
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden glass-premium border border-white/10">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>

        {/* Two-Block Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6 text-neon-green">
                <Rocket className="w-6 h-6" />
                <h2 className="text-2xl font-bold uppercase tracking-tight">Overview</h2>
              </div>
              <p className="text-foreground/70 leading-relaxed text-lg">
                {project.overview}
              </p>
              <p className="mt-6 text-foreground/70 leading-relaxed">
                {project.detailedDescription}
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6 text-neon-green">
                <CheckCircle2 className="w-6 h-6" />
                <h2 className="text-2xl font-bold uppercase tracking-tight">Tech Stack & Features</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 rounded-full glass border border-white/5 text-sm font-semibold hover:border-neon-green/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-2" />
                  <p className="text-foreground/60 text-sm italic">Designed for maximum performance and user engagement.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-2" />
                  <p className="text-foreground/60 text-sm italic">Fully responsive and accessible architectures.</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Full-Width Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <GlassCard className="p-0 border-0 overflow-hidden">
            <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-neon-green" />
                <span className="text-sm font-bold uppercase tracking-widest opacity-60">Source Insight</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
            </div>
            <pre className="p-8 text-sm overflow-x-auto font-mono text-neon-green/90 leading-relaxed bg-black/40">
              <code>{project.codeSnippet}</code>
            </pre>
          </GlassCard>
        </motion.div>

        {/* Action Button */}
        <div className="flex justify-center flex-col items-center gap-8">
          <Link 
            href="/#contact" 
            className="group relative px-12 py-5 bg-neon-green text-white font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 text-lg uppercase tracking-widest shadow-[0_0_50px_-10px_rgba(16,185,129,0.5)]"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#020617]">Contact Now</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
          
        </div>
      </div>
    </main>
  );
}
