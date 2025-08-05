import { HeroSection } from "@/components/custom/hero-section";
import { FeaturesSection } from "@/components/custom/features-section";
import { WhyReadThisBookSection } from "@/components/custom/why-read-this-book-section";
import { DownloadSection } from "@/components/custom/download-section";
import { PreviewSection } from "@/components/custom/preview-section";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <header className="w-full h-screen">
        <div className="min-h-screen w-full relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
            }}
          />

          <HeroSection />

          <div className="absolute lg:top-[120vh] top-[100vh] -left-70 w-[700px] h-[700px] z-10 pointer-events-none overflow-hidden">
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

          <FeaturesSection />
          <WhyReadThisBookSection />
          <DownloadSection />
          <PreviewSection />
        </div>
      </header>
    </div>
  );
}
