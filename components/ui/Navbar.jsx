"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? `py-3 glass border-b ${isDarkMode ? "border-white/5" : "border-gray-200"}`
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className={`font-display font-bold text-lg tracking-tight transition-colors ${
            isDarkMode ? "text-white hover:text-cyan-400" : "text-gray-900 hover:text-cyan-600"
          }`}
        >
          U.K<span className={isDarkMode ? "text-cyan-400" : "text-cyan-600"}>.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm transition-colors duration-200 relative group ${
                isDarkMode ? "text-white/50 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300 ${
                isDarkMode ? "bg-cyan-400" : "bg-cyan-600"
              }`} />
            </a>
          ))}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`px-4 py-1.5 border text-sm font-body rounded-full transition-all duration-200 ${
                isDarkMode 
                  ? "border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10" 
                  : "border-cyan-600/40 text-cyan-600 hover:bg-cyan-600/10"
              }`}
            >
              Hire Me
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden transition-colors ${
            isDarkMode ? "text-white/60 hover:text-white" : "text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span
              className={`block h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden glass border-t ${isDarkMode ? "border-white/5" : "border-gray-200"}`}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm transition-colors ${
                    isDarkMode ? "text-white/60 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
