import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServiceTiersSection } from "@/components/sections/ServiceTiersSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const scrollRef = useScrollReveal();

  useEffect(() => {
    document.title = "Alisson Kennedy | Private Office — São Paulo";
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
    setMeta("description", "Gestão executiva e empresarial para executivos e famílias de alto padrão em São Paulo. Solicite sua triagem.");
    setMeta("keywords", "concierge premium SP, concierge premium São Paulo, gestão executiva, private office, concierge executivo, lifestyle strategy, UHNWI concierge, logística executiva São Paulo, family office concierge, curadoria de experiências");
    setMeta("og:title", "Alisson Kennedy | Private Office — São Paulo", true);
    setMeta("og:description", "Gestão executiva e empresarial para executivos e famílias de alto padrão em São Paulo. Solicite sua triagem.", true);
    setMeta("og:url", "https://alissonkennedy.com.br/", true);
    setMeta("og:image", "https://alissonkennedy.com.br/og-image.jpg", true);
    setMeta("twitter:title", "Alisson Kennedy | Private Office — São Paulo");
    setMeta("twitter:description", "Gestão executiva e empresarial para executivos e famílias de alto padrão em São Paulo. Solicite sua triagem.");
    setMeta("twitter:image", "https://alissonkennedy.com.br/og-image.jpg");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://alissonkennedy.com.br/";
  }, []);

  return (
    <div ref={scrollRef} className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceTiersSection />
      <DifferentialsSection />
      <CasesSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
