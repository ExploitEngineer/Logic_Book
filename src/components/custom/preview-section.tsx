"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export function PreviewSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <section
      id="preview"
      className="max-w-7xl relative m-auto px-4 py-20"
    >
      {/* Gradient SVG */}
      <div className="absolute lg:-left-[45%] -left-96 lg:-top-40 -top-15 w-[700px] h-[700px] z-10 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full scale-125 opacity-80"
        >
          <defs>
            <radialGradient id="blob-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(251,191,36,0.4)" />
              <stop offset="60%" stopColor="rgba(251,191,36,0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
            </filter>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="url(#blob-grad)"
            filter="url(#blur)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mb-5 max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300"
        >
          Preview <span className="text-primary">Logic Book</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Browse the book online before downloading.
        </motion.p>

        {/* Iframe Preview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-full flex justify-center mt-8"
        >
          <div className="w-full max-w-[90%] md:max-w-[700px] h-[400px] md:h-[750px] rounded-2xl overflow-hidden border border-yellow-300/10 shadow-2xl bg-[rgb(36,29,18)]/90 backdrop-blur-md relative">
            <iframe
              ref={iframeRef}
              src="https://archive.org/embed/logic-STANDARD"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Logic Book Preview"
              className="w-full h-full"
              scrolling="no"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
