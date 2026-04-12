"use client";

import { motion } from "framer-motion";
import { FadeIn, SectionLabel, StaggerContainer, staggerItem } from "@/components/ui/Motion";
import { skills } from "@/data/portfolio";
import { useState, useEffect } from "react";

const categoryColors = {
  Frontend: { 
    dark: { text: "text-cyan-400", bg: "bg-cyan-400/5", border: "border-cyan-400/20", glow: "hover:shadow-cyan-400/10" },
    light: { text: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-200", glow: "hover:shadow-cyan-100" }
  },
  Backend: { 
    dark: { text: "text-emerald-400", bg: "bg-emerald-400/5", border: "border-emerald-400/20", glow: "hover:shadow-emerald-400/10" },
    light: { text: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", glow: "hover:shadow-emerald-100" }
  },
  "AI / ML": { 
    dark: { text: "text-violet-400", bg: "bg-violet-400/5", border: "border-violet-400/20", glow: "hover:shadow-violet-400/10" },
    light: { text: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200", glow: "hover:shadow-violet-100" }
  },
};

export default function Skills() {
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
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-16">
          <SectionLabel label="03 — Skills" />
          <h2 className={`font-display font-bold text-4xl sm:text-5xl leading-tight ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Tools of the trade
          </h2>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-3 lg:grid-cols-3 gap-5 justify-center" staggerDelay={0.1}>
          {skills.map((skill) => {
            const colors = categoryColors[skill.category] || categoryColors["Frontend"];
            const themeColors = isDarkMode ? colors.dark : colors.light;
            return (
              <motion.div
                key={skill.category}
                variants={staggerItem}
                className={`rounded-2xl p-6 border ${themeColors.border} ${themeColors.bg} group hover:-translate-y-2 hover:shadow-xl ${themeColors.glow} transition-all duration-300 ${
                  isDarkMode ? "glass" : "bg-white shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-2xl font-mono ${themeColors.text}`}>{skill.icon}</span>
                  <h3 className={`font-display font-semibold text-sm tracking-wide ${themeColors.text}`}>
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 group/item">
                      <span className={`w-1 h-1 rounded-full ${themeColors.text.replace("text-", "bg-")} opacity-60`} />
                      <span className={`font-body text-sm transition-colors ${
                        isDarkMode ? "text-white/50 group-hover/item:text-white/80" : "text-gray-600 group-hover/item:text-gray-900"
                      }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
