"use client";

import MagicBento from "../bits/Bento";
import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative flex m-auto max-w-7xl flex-col items-center justify-center px-4 py-20"
    >
      {/* Gradient SVG */}
      <div className="absolute lg:-left-[45%] -left-96 lg:-top-50 -top-15 w-[700px] h-[700px] z-10 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full opacity-80"
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
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mb-5 max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300"
      >
        Features of <span className="text-primary">Book</span>
      </motion.h1>
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="160, 84, 9"
      />
    </section>
  );
}
