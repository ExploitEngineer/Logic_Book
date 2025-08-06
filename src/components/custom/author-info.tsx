"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export function AuthorInfo() {
  return (
    <section id="author" className="max-w-7xl min-h-screen relative m-auto">
      {/* Background SVG */}
      <div className="absolute lg:-left-[45%] -left-96 lg:-top-40 -top-15 w-[700px] h-[700px] z-10 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full scale-125 opacity-80"
        >
          <defs>
            <radialGradient id="author-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(251,191,36,0.4)" />
              <stop offset="60%" stopColor="rgba(251,191,36,0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter
              id="author-blur"
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
            fill="url(#author-grad)"
            filter="url(#author-blur)"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mb-5 max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300"
        >
          👤 About the <span className="text-primary">Author</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="relative z-10 mx-auto max-w-xl py-2 text-center text-lg font-medium text-yellow-600 dark:text-yellow-400 italic"
        >
          "Teaching how to think — not just how to code."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-3xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          <strong>M Zain Ul Abideen</strong> is a passionate programmer,
          educator, and logic enthusiast who believes that the key to great
          coding isn’t memorizing syntax — it’s <em>learning how to think</em>.
          With years of experience mentoring beginners and self-taught
          developers, Zain excels at transforming complex concepts into simple,
          actionable steps.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.1 }}
          className="relative z-10 mx-auto max-w-3xl py-2 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          His journey mirrors that of many learners: motivated by curiosity but
          overwhelmed by challenges. Struggling with logic during his early
          coding days, he discovered a powerful mindset shift — viewing code as
          structured problem-solving rather than just writing instructions. This
          perspective became the foundation for his book:{" "}
          <em>
            “Logic – Mastering Problem-Solving Skills for Coding Success.”
          </em>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-6 p-6 rounded-2xl bg-yellow-100/70 dark:bg-yellow-900/10 border border-yellow-400/40 shadow-md backdrop-blur-md max-w-xl text-neutral-800 dark:text-neutral-300 text-left"
        >
          <ul className="space-y-2 text-base leading-relaxed list-disc list-inside">
            <li>
              <strong>5+ years</strong> of programming experience
            </li>
            <li>
              <strong>Author</strong> of a widely-read book on logical thinking
            </li>
            <li>
              <strong>Mentor</strong> to beginner & self-taught developers
            </li>
            <li>
              Focuses on <em>“thinking like a programmer”</em> rather than rote
              syntax
            </li>
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.7 }}
          className="relative z-10 mx-auto max-w-3xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Outside of teaching, Zain loves exploring emerging tech, building
          passion projects, and sharing insights with the global developer
          community. His goal? To help you become not just a coder — but a
          confident, independent problem solver.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2 }}
          className="mt-6 flex gap-6 text-white/80"
        >
          <a
            href="https://www.instagram.com/m.zainulabdeenoffical?igsh=MTc2MHpxOXZud3Z4NQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-700 transition-transform transform hover:scale-110"
          >
            <Instagram size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/zainulabdeenofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-700 transition-transform transform hover:scale-110"
          >
            <Linkedin size={26} />
          </a>
          <a
            href="https://github.com/ZainulabdeenOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-700 transition-transform transform hover:scale-110"
          >
            <Github size={26} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
