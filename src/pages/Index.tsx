import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { MobilitySection } from "@/components/sections/MobilitySection";
import { TestimonialsPlaceholder } from "@/components/sections/TestimonialsPlaceholder";
import { CtaSection } from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <StatsSection />
        <MobilitySection />
        <TestimonialsPlaceholder />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
