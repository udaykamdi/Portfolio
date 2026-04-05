"use client";

import { motion } from "framer-motion";
import { FadeIn, SectionLabel, StaggerContainer, staggerItem } from "@/components/ui/Motion";
import { skills } from "@/data/portfolio";

const categoryColors = {
  Frontend: { text: "text-cyan-400", bg: "bg-cyan-400/5", border: "border-cyan-400/20", glow: "hover:shadow-cyan-400/10" },
  Backend: { text: "text-emerald-400", bg: "bg-emerald-400/5", border: "border-emerald-400/20", glow: "hover:shadow-emerald-400/10" },
  "AI / ML": { text: "text-violet-400", bg: "bg-violet-400/5", border: "border-violet-400/20", glow: "hover:shadow-violet-400/10" },
  "DevOps & Tools": { text: "text-orange-400", bg: "bg-orange-400/5", border: "border-orange-400/20", glow: "hover:shadow-orange-400/10" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-16">
          <SectionLabel label="03 — Skills" />
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight">
            Tools of the trade
          </h2>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
          {skills.map((skill) => {
            const colors = categoryColors[skill.category] || categoryColors["Frontend"];
            return (
              <motion.div
                key={skill.category}
                variants={staggerItem}
                className={`glass rounded-2xl p-6 border ${colors.border} group hover:-translate-y-2 hover:shadow-xl ${colors.glow} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-2xl font-mono ${colors.text}`}>{skill.icon}</span>
                  <h3 className={`font-display font-semibold text-sm tracking-wide ${colors.text}`}>
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 group/item">
                      <span className={`w-1 h-1 rounded-full ${colors.text.replace("text-", "bg-")} opacity-60`} />
                      <span className="font-body text-white/50 text-sm group-hover/item:text-white/80 transition-colors">
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
