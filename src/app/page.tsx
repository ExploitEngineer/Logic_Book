import { HeroSection } from "@/components/custom/hero-section";
import { FeaturesSection } from "@/components/custom/features-section";
import { WhyReadThisBookSection } from "@/components/custom/why-read-this-book-section";
import { DownloadSection } from "@/components/custom/download-section";
import { PreviewSection } from "@/components/custom/preview-section";
import { AuthorInfo } from "@/components/custom/author-info";
import { Footer } from "@/components/custom/footer";

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
          <FeaturesSection />
          <WhyReadThisBookSection />
          <PreviewSection />
          <DownloadSection />
          <AuthorInfo />
          <Footer />
        </div>
      </header>
    </div>
  );
}
