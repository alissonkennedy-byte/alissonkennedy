import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ExtrasSection } from "@/components/sections/ExtrasSection";
import { CtaSection } from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <PricingSection />
        <ExtrasSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
