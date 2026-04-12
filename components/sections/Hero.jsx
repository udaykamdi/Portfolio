"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      setIsDarkMode(htmlElement.classList.contains("dark"));
    };
    
    // Check initial theme
    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    
    return () => observer.disconnect();
  }, []);

const roles = [
  "Frontend Developer",
  "AI Systems Developer",
  "Web Designer",
];

function TypewriterText({ texts }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | waiting | deleting

  useEffect(() => {
    const current = texts[index];
    let timeout;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60
        );
      } else {
        timeout = setTimeout(() => setPhase("waiting"), 1800);
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          35
        );
      } else {
        setIndex((i) => (i + 1) % texts.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, index, texts]);

  return (
    <span className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-display">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 ${
        isDarkMode ? "" : "bg-gradient-to-b from-blue-50 to-white"
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

        {/* Decorative lines */}
        <svg
          className="absolute top-20 right-10 opacity-20 w-32 h-32"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="45" stroke="#22d3ee" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" stroke="#22d3ee" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" stroke="#22d3ee" strokeWidth="0.5" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="#22d3ee" strokeWidth="0.5" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="#22d3ee" strokeWidth="0.5" />
        </svg>

        <svg
          className="absolute bottom-20 left-10 opacity-20 w-24 h-24"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="#22d3ee"
            strokeWidth="0.5"
            transform="rotate(15 50 50)"
          />
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            stroke="#22d3ee"
            strokeWidth="0.5"
            transform="rotate(30 50 50)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-cyan-400/70 tracking-widest uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-4"
        >
          <span className="text-white">Uday</span>
          <br />
          <span className="text-gradient-cyan">Kamdi</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="font-display text-xl sm:text-2xl md:text-3xl text-white/40 mb-10 h-10 flex items-center justify-center gap-2"
        >
          <TypewriterText texts={roles} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-body text-white/40 text-base sm:text-lg max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Building intelligent systems and user-friendly web platforms.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-cyan-400 text-[#080B0F] font-display font-semibold rounded-full hover:bg-cyan-300 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            View Projects
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/10 text-white/70 font-display font-semibold rounded-full hover:border-white/30 hover:text-white transition-all duration-200 hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-white/20 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
