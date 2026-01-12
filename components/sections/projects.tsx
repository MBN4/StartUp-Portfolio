"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Elite <span className="text-neon-green">Showcase</span>
            </motion.h2>
            <p className="text-foreground/60 max-w-md">
              A collection of high-impact repos from the GitHub portfolio of <span className="text-neon-green font-semibold">MBN4</span>.
            </p>
          </div>
          <a
            href="https://github.com/MBN4"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-neon-green/30 rounded-full text-sm font-semibold hover:bg-neon-green/5 transition-colors"
          >
            View All GitHub Repos
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="group p-0 overflow-hidden border-0 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-neon-green text-background text-xs font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col w-full text-left">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-green transition-colors text-left uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 mb-6 text-sm line-clamp-2 text-left">
                    {project.description}
                  </p>
                  <div className="mt-auto flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full glass hover:text-neon-green transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <Link 
                      href={`/projects/${project.id}`}
                      className="text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-neon-green transition-colors"
                    >
                      Case Study
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
