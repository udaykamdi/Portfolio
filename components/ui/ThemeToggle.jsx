"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default to dark mode as requested
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
    }

    // Apply theme to body
    if (savedTheme === "light" || (!savedTheme && !window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    // Save preference to localStorage
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        isDarkMode 
          ? "text-white/60 hover:text-white hover:bg-white/10" 
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
      }`}
      aria-label="Toggle theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </motion.button>
  );
}
