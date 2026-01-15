"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    const formattedMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    
    // WhatsApp Redirect
    window.open(`https://wa.me/923174311618?text=${formattedMessage}`, "_blank");
    
    // Email Redirect
    window.location.href = `mailto:bn73147@gmail.com?subject=Project Inquiry from ${name}&body=${message.replace(/\n/g, "%0D%0A")}%0D%0A%0D%0A---%0D%0AFrom: ${name} (${email})`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
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
                    bn73147@gmail.com
                  </div>
                  <div className="flex items-center gap-4 text-foreground/80">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-neon-green">
                      →
                    </div>
                    Phone: +92 317 4311618
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    {/* <label className="text-sm font-medium text-foreground/70 ml-1">Name</label> */}
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-green/50 transition-colors"
                      placeholder="Steve Jobs"
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <label className="text-sm font-medium text-foreground/70 ml-1">Email</label> */}
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-green/50 transition-colors"
                      placeholder="steve@apple.com"
                    />
                  </div>
                  <div className="space-y-2">
                    {/* <label className="text-sm font-medium text-foreground/70 ml-1">Message</label> */}
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-green/50 transition-colors resize-none"
                      placeholder="Tell us about your masterpiece..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={submitted}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "group relative w-full py-5 rounded-xl flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] transition-all overflow-hidden",
                      submitted 
                        ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]" 
                        : "bg-neon-green text-[#020617] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                    )}
                  >
                    {/* Scanning Line Animation */}
                    <div className="absolute inset-0 w-full h-[2px] bg-white/30 -translate-y-full group-hover:animate-[scan_2s_linear_infinite] z-20 pointer-events-none" />
                    
                    {/* Glow Layer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                    <span className="relative z-10 flex items-center gap-3">
                      {submitted ? (
                        <>
                          Initialization Complete <CheckCircle2 className="w-5 h-5 animate-bounce" />
                        </>
                      ) : (
                        <>
                          Initialize Access <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
