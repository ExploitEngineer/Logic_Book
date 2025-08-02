"use client";

import MagicBento from "../bits/Bento";

export function FeaturesSection() {
  return (
    <section id="features" className="max-w-7xl m-auto pt-40">
      <h1 className="relative z-10 mx-auto mb-10 max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
        Features Of <span className="text-primary">Book</span>
      </h1>
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
      ;
    </section>
  );
}
