"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12 overflow-visible">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-6"
                >
                  Let&apos;s Build <br />
                  <span className="text-neon-green">Together</span>
                </motion.h2>
                <p className="text-foreground/60 mb-8 leading-relaxed">
                  Ready to elevate your digital presence? We&apos;re excited to hear about your project and how we can help.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-foreground/80">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-neon-green">
                      @
                    </div>
                    hello@luminastudio.com
                  </div>
                  <div className="flex items-center gap-4 text-foreground/80">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-neon-green">
                      →
                    </div>
                    Cupertino, CA / Global
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/70 ml-1">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-green/50 transition-colors"
                      placeholder="Steve Jobs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/70 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-green/50 transition-colors"
                      placeholder="steve@apple.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/70 ml-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-green/50 transition-colors resize-none"
                      placeholder="Tell us about your masterpiece..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitted}
                    className={cn(
                      "w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all active:scale-[0.98]",
                      submitted 
                        ? "bg-emerald-500 text-white" 
                        : "bg-neon-green text-background hover:opacity-90"
                    )}
                  >
                    {submitted ? (
                      <>
                        Sent successfully! <CheckCircle2 className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
