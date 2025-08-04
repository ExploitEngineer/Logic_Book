"use client";

import { motion } from "framer-motion";
import AnimatedList from "@/components/bits/Animated-List";

const items: string[] = [
  "Learn to analyze and break down arguments with clarity and precision.",
  "Sharpen your logical thinking with practical examples and exercises.",
  "Avoid common reasoning traps and manipulation techniques.",
  "Build more persuasive, structured, and rational communication.",
  "Master the tools of logic, debate, and critical analysis.",
  "Develop habits of clear thought that translate into better decisions.",
  "Ideal for students, professionals, and lifelong learners alike.",
  "Backed by real-life scenarios — not just academic theory.",
  "Boost confidence in discussions, negotiations, and writing.",
  "Think more clearly. Argue more effectively. Win with reason.",
];

export function WhyReadThisBookSection() {
  return (
    <section id="why" className="max-w-7xl min-h-screen relative m-auto pt-40">
      {/* Gradient Svg */}
      <div className="absolute -right-70 lg:top-0 -top-15 w-[700px] h-[700px] z-10 pointer-events-none overflow-hidden">
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

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mb-5 max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300"
        >
          Why Read <span className="text-primary">This Book?</span>
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Written for students/workers, this clear‑style logic guide includes
          exercises and real examples to sharpen your thinking toolbox.
        </motion.p>

        <AnimatedList
          className="mt-5 bg-[rgb(36,29,18)] rounded-lg"
          itemClassName="bg-primary/40 lg:text-base text-md"
          items={items}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={true}
        />
      </div>
    </section>
  );
}
