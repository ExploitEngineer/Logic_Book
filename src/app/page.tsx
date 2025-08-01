import { HeroSection } from "@/components/custom/hero-section";
import { Navbar } from "@/components/custom/navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <header className="w-full h-screen ">
        <div className="min-h-screen w-full relative bg-black">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
            }}
          />
          <Navbar />
          <HeroSection />
        </div>
      </header>
    </div>
  );
}
