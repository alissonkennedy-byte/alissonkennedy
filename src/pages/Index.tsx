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
    document.title = "Concierge Premium SP | Alisson Kennedy Private Office";
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta("description", "Gestão operacional e lifestyle strategy para C-Levels e UHNWI em São Paulo. Descubra um concierge premium com discrição absoluta. Fale conosco.");
    setMeta("keywords", "concierge premium SP, concierge premium São Paulo, gestão de lifestyle, private office, concierge executivo, lifestyle strategy, UHNWI concierge, logística executiva São Paulo, family office concierge, curadoria de experiências");
    
    // Set canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://alissonkennedy.lovable.app/";
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
