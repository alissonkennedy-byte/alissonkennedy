import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { ServiceTiersSection } from "@/components/sections/ServiceTiersSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { ProtocolSection } from "@/components/sections/ProtocolSection";
import { FilosofiaSection } from "@/components/sections/FilosofiaSection";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const scrollRef = useScrollReveal();

  useEffect(() => {
    document.title = "Alisson Kennedy | Private Office — Lifestyle Strategy & Intelligence";
    const metaDescription = document.querySelector('meta[name="description"]');
    const content = "Private Office de gestão operacional e lifestyle strategy para C-Levels e UHNWI em São Paulo. Concierge premium, logística executiva e curadoria de experiências com fluidez e discrição absoluta.";
    if (metaDescription) {
      metaDescription.setAttribute("content", content);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div ref={scrollRef} className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FilosofiaSection />
      <ManifestoSection />
      <EcosystemSection />
      <ServiceTiersSection />
      <FounderSection />
      <ProtocolSection />
      <Footer />
    </div>
  );
};

export default Index;
