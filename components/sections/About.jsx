"use client";

import { FadeIn, SectionLabel } from "@/components/ui/Motion";
import { personalInfo } from "@/data/portfolio";

const stats = [
  { value: "2+", label: "Years Building" },
  { value: "5+", label: "Projects Shipped" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <FadeIn>
              <SectionLabel label="01 — About" />
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
                I build things that{" "}
                <span className="text-gradient-cyan">actually work</span>
              </h2>
              <p className="font-body text-white/50 leading-relaxed mb-6 text-base sm:text-lg">
                {personalInfo.about}
              </p>
              <p className="font-body text-white/40 leading-relaxed text-sm sm:text-base">
                My work sits at the intersection of <span className="text-white/70">computer vision</span>,{" "}
                <span className="text-white/70">IoT systems</span>, and{" "}
                <span className="text-white/70">modern web development</span>. I care deeply about writing clean code, shipping fast, and solving real problems.
              </p>
            </FadeIn>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 group hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 bg-white/10 backdrop-blur-lg border border-white/10">
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-cyan mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-white/40 text-sm">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
