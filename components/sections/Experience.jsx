"use client";

import { motion } from "framer-motion";
import { FadeIn, SectionLabel } from "@/components/ui/Motion";
import { useState } from "react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("all");

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
    }
    
  ];

  const featuredExperiences = experiences.filter(exp => exp.featured);
  const otherExperiences = experiences.filter(exp => !exp.featured);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-16">
          <SectionLabel label="02 — Experience" />
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight">
            Professional Journey
          </h2>
        </FadeIn>

        {/* Featured Experience */}
        <div className="mb-24">
          <h3 className="text-xl font-semibold text-cyan-400 mb-8">Featured Experience</h3>
          <div className="space-y-12">
            {featuredExperiences.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 0.1}>
                <div className="relative flex flex-col md:flex-row gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="glass rounded-2xl p-6 border border-white/5">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="font-display font-semibold text-white text-xl">{exp.title}</h3>
                          <p className="font-body text-cyan-400 font-medium">{exp.company}</p>
                        </div>
                        <span className="font-mono text-xs text-white/60 mt-2 md:mt-0">{exp.period}</span>
                      </div>
                      <p className="font-body text-white/70 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 text-xs font-body bg-cyan-400/10 text-cyan-400 rounded-full"
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
