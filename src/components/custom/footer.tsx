"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-neutral-950 border-t border-neutral-800 mt-32 pt-16 pb-8 px-4 overflow-hidden">
      <div className="absolute -right-96 -bottom-40 w-[700px] h-[700px] z-0 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full scale-125 opacity-70"
        >
          <defs>
            <radialGradient id="footer-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(251,191,36,0.4)" />
              <stop offset="60%" stopColor="rgba(251,191,36,0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter
              id="footer-blur"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
            </filter>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="url(#footer-grad)"
            filter="url(#footer-blur)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-2xl font-bold text-slate-200 tracking-tight">
            M Zain Ul Abideen
          </h2>
          <p className="text-sm text-neutral-500 max-w-md">
            Helping you build smarter logic and stronger problem-solving skills
            — one line of code at a time.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-neutral-400 pt-2">
            <a
              href="#download"
              className="hover:text-yellow-400 transition-colors"
            >
              Download
            </a>
            <a
              href="#author"
              className="hover:text-yellow-400 transition-colors"
            >
              Author
            </a>
            <a
              href="https://github.com/ZainulabdeenOfficial/Logic_Book"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-3">
          <h3 className="text-sm font-semibold text-neutral-400 tracking-wide">
            Connect with me
          </h3>
          <div className="flex gap-4 text-yellow-600 text-xl">
            <a
              href="https://github.com/ZainulabdeenOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 hover:scale-110 transition-transform"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com/zainulabdeen__"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 hover:scale-110 transition-transform"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com/in/zainulabdeen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 hover:scale-110 transition-transform"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 text-center text-xs text-neutral-600 border-t border-neutral-800 pt-6">
        © {new Date().getFullYear()} M Zain Ul Abideen. All rights reserved.
      </div>
    </footer>
  );
}
