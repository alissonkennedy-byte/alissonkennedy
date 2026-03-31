import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { NumbersSection } from "@/components/sections/NumbersSection";
import { CtaSection } from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <NumbersSection />
      
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;