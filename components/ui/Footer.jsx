"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-white/20">
          © {new Date().getFullYear()} Uday Kamdi — Built with Next.js & Tailwind CSS
        </p>
        <div className="flex items-center gap-1 font-mono text-xs text-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400/60 animate-pulse" />
          <span>Available for hire</span>
        </div>
      </div>
    </footer>
  );
}
