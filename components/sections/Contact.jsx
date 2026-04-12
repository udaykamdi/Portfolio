"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, SectionLabel } from "@/components/ui/Motion";
import { personalInfo } from "@/data/portfolio";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/udaykamdi",
    href: personalInfo.linkedin,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/udaykamdi",
    href: personalInfo.github,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "instagram.com/uday_kamdi",
    href: "https://www.instagram.com/uday_kamdi/",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.416.923A3.927 3.927 0 0 0 .42 2.76C.222 3.269.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.843.174 1.425.372 1.933.205.57.475.988.923 1.416.45.428.866.698 1.416.923.508.198 1.09.333 1.933.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.297-.048c.843-.04 1.425-.174 1.933-.372a3.917 3.917 0 0 0 1.416-.923 3.927 3.927 0 0 0 .923-1.416c.198-.508.333-1.09.372-1.933.037-.853.048-1.125.048-3.297s-.01-2.444-.048-3.297c-.04-.843-.174-1.425-.372-1.933a3.917 3.917 0 0 0-.923-1.416A3.927 3.927 0 0 0 13.24.42c-.508-.198-1.09-.333-1.933-.372C10.444.01 10.172 0 8 0zm0 1.441c2.136 0 2.399.011 3.233.055.78.045 1.207.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.28.23.705.275 1.486.044.834.055 1.097.055 3.233 0 2.136-.011 2.399-.055 3.233-.045.78-.166 1.207-.275 1.486-.145.373-.319.64-.599.92-.28.28-.546.453-.92.598-.28.11-.705.23-1.486.275-.834.044-1.097.055-3.233.055-2.136 0-2.399-.011-3.233-.055-.78-.045-1.207-.166-1.486-.275-.373-.145-.64-.319-.92-.599-.28-.28-.453-.546-.598-.92-.11-.28-.23-.705-.275-1.486-.044-.834-.055-1.097-.055-3.233 0-2.136.011-2.399.055-3.233.045-.78.166-1.207.275-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.28-.11.705-.23 1.486-.275.834-.044 1.097-.055 3.233-.055zm0 2.451a3.258 3.258 0 1 0 0 6.516 3.258 3.258 0 0 0 0-6.516zM8 10.8a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm3.994-7.604a.75.75 0 1 0-1.498.002.75.75 0 0 0 1.498-.002z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 7447 200 454",
    href: "tel:+917447200454",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.598.211 1.284.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual form submission (e.g., Formspree, EmailJS)
    setSent(true);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-16">
          <SectionLabel label="06 — Contact" />
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight">
            Let's build something
          </h2>
          <p className="font-body text-white/40 mt-4 max-w-lg">
            Open to full-time roles, freelance projects, and interesting collaborations. Drop me a message.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact links */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-cyan-400/25 group transition-all duration-300 hover:-translate-y-0.5 bg-white/10 backdrop-blur-lg border border-white/10"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                    {link.icon}
                  </span>
                  <div>
                    <p className="font-mono text-xs text-white/30 mb-0.5">{link.label}</p>
                    <p className="font-body text-white/70 text-sm group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <span className="ml-auto text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Right: Contact form */}
          <FadeIn delay={0.2}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 text-center border border-green-400/20"
              >
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-display font-semibold text-white text-xl mb-2">Message sent!</h3>
                <p className="font-body text-white/40 text-sm">I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 border border-white/5 space-y-4 bg-white/10 backdrop-blur-lg border border-white/10">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="font-mono text-xs text-white/30 block mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      value={formData[field.id]}
                      onChange={(e) => setFormData((f) => ({ ...f, [field.id]: e.target.value }))}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 py-2.5 font-body text-sm text-white placeholder-white/20 focus:outline-none focus:border-cyan-400/40 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-xs text-white/30 block mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    required
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 py-2.5 font-body text-sm text-white placeholder-white/20 focus:outline-none focus:border-cyan-400/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-cyan-400 text-[#080B0F] font-display font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message →
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
