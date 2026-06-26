"use client";

import { motion } from "framer-motion";
import { FadeIn, SectionLabel } from "@/components/ui/Motion";
import { useState, useEffect } from "react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("all");
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

  const experiences = [
    {
      id: 1,
      title: "Frontend Developer Internship",
      company: "Nsemble Technologies Pvt Ltd",
      period: "Dec 2025 - March 2026",
      location: "Remote",
      description: "Worked on real-world projects involving desktop applications and AI-based systems and collaborated with team to build scalable and responsive applications",
      tags: ["ElectronForge.js", "Node.js", "React.js", "TensorFlow.js", "Tailwind CSS"],
      featured: true,
    },
    {
      id: 2,
      title: "Software Engineer - Application Support & Development",
      company: "Cosmic Infotech",
      period: "June 2026 - Present",
      location: "Pune, Maharashtra, India",
      description: "Development and maintenance of software applications  using .NET and web technologies. Database management and query optimization using SQL Server / MySQL.",
      tags: [".NET", "SQL", "Web Technologies", "Application Support", "Database Management"],
      featured: true,
    }
    
  ];

  const featuredExperiences = experiences.filter(exp => exp.featured);
  const otherExperiences = experiences.filter(exp => !exp.featured);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-16">
          <SectionLabel label="02 — Experience" />
          <h2 className={`font-display font-bold text-4xl sm:text-5xl leading-tight ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Professional Journey
          </h2>
        </FadeIn>

        {/* Featured Experience */}
        <div className="mb-24">
          <h3 className={`text-xl font-semibold mb-8 ${
            isDarkMode ? "text-cyan-400" : "text-cyan-600"
          }`}>Featured Experience</h3>
          <div className="space-y-12">
            {featuredExperiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <div className="relative flex flex-col md:flex-row gap-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    isDarkMode ? "bg-cyan-400/10" : "bg-cyan-100"
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      isDarkMode ? "bg-cyan-400" : "bg-cyan-600"
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className={`rounded-2xl p-6 border ${
                      isDarkMode 
                        ? "glass border-white/5" 
                        : "bg-white border-gray-200 shadow-sm"
                    }`}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className={`font-display font-semibold text-xl ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}>{exp.title}</h3>
                          <p className={`font-body font-medium ${
                            isDarkMode ? "text-cyan-400" : "text-cyan-600"
                          }`}>{exp.company}</p>
                        </div>
                        <span className={`font-mono text-xs mt-2 md:mt-0 ${
                          isDarkMode ? "text-white/60" : "text-gray-500"
                        }`}>{exp.period}</span>
                      </div>
                      <p className={`font-body mb-4 ${
                        isDarkMode ? "text-white/70" : "text-gray-600"
                      }`}>{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className={`px-3 py-1 text-xs font-body rounded-full ${
                              isDarkMode 
                                ? "bg-cyan-400/10 text-cyan-400" 
                                : "bg-cyan-50 text-cyan-600"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
