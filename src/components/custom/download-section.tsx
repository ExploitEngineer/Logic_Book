"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DownloadButton {
  src: string;
  alt: string;
  label: string;
 
}

const downloadButtonsData: DownloadButton[] = [
  {
    src: "/assets/images/google-drive.webp",
    alt: "Google Drive",
    label: "Google Drive PDF",
  },
  {
    src: "/assets/images/android.png",
    alt: "Android",
    label: "Android App",
  },
  {
    src: "/assets/images/apple.png",
    alt: "Apple",
    label: "Apple App",
  },
];

export function DownloadSection() {
  return (
    <section
      id="download"
      className="max-w-7xl min-h-screen relative m-auto pt-40"
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
          Download <span className="text-primary">Logic Book</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Get your own copy of the Logic Book for offline reading.
        </motion.p>

        {/* Download Buttons */}
        <div className="mt-10 flex flex-wrap gap-6 justify-center bg-[rgb(36,29,18)]/90 backdrop-blur-md rounded-2xl px-8 py-10 shadow-2xl border border-yellow-300/10">
          {downloadButtonsData.map((item: DownloadButton, index: number) => (
            <button
              key={index}
              className="w-60 flex items-center gap-3 transform rounded-xl border border-gray-700/60 bg-white/90 px-6 py-3 font-medium text-black transition-all cursor-pointer duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-primary/50 hover:text-white backdrop-blur-md"
            >
              <Image src={item.src} alt={item.alt} width={28} height={28} />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
