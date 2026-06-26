"use client";

import { motion } from "framer-motion";
import { FadeIn, SectionLabel, StaggerContainer, staggerItem } from "@/components/ui/Motion";
import { projects } from "@/data/portfolio";
import { useState, useEffect } from "react";

function ProjectCard({ project, index, isDarkMode }) {
  const isFeatured = project.featured;

  return (
    <motion.div
      variants={staggerItem}
      className={`group relative rounded-2xl border overflow-hidden hover:-translate-y-2 hover:shadow-2xl ${
        isFeatured ? "lg:col-span-1" : ""
      } ${
        isDarkMode 
          ? "border-white/5 hover:border-white/10" 
          : "border-gray-200 hover:border-gray-300"
      }`}
      style={{
        background: isDarkMode 
          ? "linear-gradient(135deg, #0E1318 0%, #080B0F 100%)" 
          : "linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 100%)",
      }}
    >
      {/* Gradient accent overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Image placeholder / mock preview */}
      <div className={`relative h-48 overflow-hidden border-b ${
        isDarkMode ? "bg-[#0A0D12] border-white/5" : "bg-blue-50 border-blue-200 bg-[linear-gradient(45deg,#ffffff_1px,transparent_1px),linear-gradient(-45deg,#ffffff_1px,transparent_1px)] bg-[length:20px_20px]"
      }`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Abstract project illustration */}
          <svg
            viewBox="0 0 400 200"
            className="w-full h-full opacity-30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {index === 0 && (
              <>
                <rect x="60" y="60" width="280" height="80" rx="8" stroke={project.accentColor} strokeWidth="0.5" />
                <rect x="80" y="80" width="60" height="40" rx="4" fill={project.accentColor} fillOpacity="0.1" stroke={project.accentColor} strokeWidth="0.5" />
                <rect x="160" y="80" width="60" height="40" rx="4" fill={project.accentColor} fillOpacity="0.1" stroke={project.accentColor} strokeWidth="0.5" />
                <rect x="240" y="80" width="60" height="40" rx="4" fill="red" fillOpacity="0.2" stroke="red" strokeWidth="1" />
                <circle cx="270" cy="100" r="12" stroke="red" strokeWidth="1" strokeDasharray="4 2" />
                <line x1="200" y1="20" x2="200" y2="60" stroke={project.accentColor} strokeWidth="0.5" strokeDasharray="4 4" />
                <text x="180" y="15" fontSize="10" fill={project.accentColor} fontFamily="monospace">AI SCAN</text>
              </>
            )}
            {index === 1 && (
              <>
                <circle cx="100" cy="100" r="30" stroke={project.accentColor} strokeWidth="0.5" />
                <circle cx="200" cy="80" r="25" stroke={project.accentColor} strokeWidth="0.5" />
                <circle cx="300" cy="110" r="35" stroke={project.accentColor} strokeWidth="0.5" />
                <line x1="100" y1="100" x2="200" y2="80" stroke={project.accentColor} strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="200" y1="80" x2="300" y2="110" stroke={project.accentColor} strokeWidth="0.5" strokeDasharray="4 4" />
                <rect x="160" y="130" width="80" height="30" rx="4" fill={project.accentColor} fillOpacity="0.05" stroke={project.accentColor} strokeWidth="0.5" />
                <text x="175" y="150" fontSize="8" fill={project.accentColor} fontFamily="monospace">DASHBOARD</text>
              </>
            )}
            {index === 2 && (
              <>
                <rect x="40" y="40" width="320" height="120" rx="8" stroke={project.accentColor} strokeWidth="0.5" />
                <rect x="60" y="60" width="100" height="80" rx="4" stroke={project.accentColor} strokeWidth="0.5" fill={project.accentColor} fillOpacity="0.03" />
                <rect x="180" y="60" width="160" height="35" rx="3" fill={project.accentColor} fillOpacity="0.08" />
                <rect x="180" y="105" width="80" height="15" rx="2" fill={project.accentColor} fillOpacity="0.05" />
                <rect x="270" y="105" width="70" height="15" rx="2" fill={project.accentColor} fillOpacity="0.05" />
              </>
            )}
          </svg>
        </div>

        {/* Scan line animation */}
        {project.featured && (
          <motion.div
            className="absolute left-0 right-0 h-px opacity-20"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
            animate={{ top: ["10%", "90%", "10%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-mono"
            style={{
              background: `${project.accentColor}15`,
              border: `1px solid ${project.accentColor}30`,
              color: project.accentColor,
            }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className={`font-display font-bold text-lg mb-2 group-hover:transition-colors ${
          isDarkMode ? "text-white group-hover:text-white" : "text-gray-900 group-hover:text-gray-800"
        }`}>
          {project.title}
        </h3>
        <p className={`font-body text-sm leading-relaxed mb-4 line-clamp-3 ${
          isDarkMode ? "text-white/40" : "text-gray-800"
        }`}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`font-mono text-xs px-2.5 py-1 rounded-full ${
                isDarkMode ? "bg-white/5 text-white/40" : "bg-blue-100 text-blue-800"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs transition-all duration-200 hover:gap-3"
            style={{ color: project.accentColor }}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View on GitHub →
          </a>
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs transition-all duration-200 hover:gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 px-3 py-1.5 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

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
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-16">
          <SectionLabel label="04 — Projects" />
          <h2 className={`font-display font-bold text-4xl sm:text-5xl leading-tight ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Things I've built
          </h2>
        </FadeIn>

        {/* Featured projects */}
        <StaggerContainer className="grid md:grid-cols-2 gap-5 mb-5" staggerDelay={0.12}>
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} isDarkMode={isDarkMode} />
          ))}
        </StaggerContainer>

        {/* Other projects */}
        {rest.length > 0 && (
          <StaggerContainer className="grid md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {rest.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i + featured.length} isDarkMode={isDarkMode} />
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
