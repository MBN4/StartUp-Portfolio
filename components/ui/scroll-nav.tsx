"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export const ScrollNav = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show button after 400px scroll
      setShow(scrollY > 400);

      // Determine if we're closer to bottom than top
      // Or if we've scrolled past 70% of the page
      setIsAtBottom(scrollY + windowHeight > documentHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-10 right-10 z-50"
        >
          <button
            onClick={handleClick}
            className="p-4 glass rounded-full hover:bg-neon-green hover:text-background transition-all active:scale-90 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            aria-label={isAtBottom ? "Scroll to Top" : "Scroll to Bottom"}
          >
            {isAtBottom ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
