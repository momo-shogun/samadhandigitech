import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HeroSectionDemo2 } from "@/components/HeroSectionDemo2";
import { WhatBringsYouSection } from "@/components/WhatBringsYouSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ClientsSection } from "@/components/ClientsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useHero } from "@/contexts/HeroContext";

const Index = () => {
  const { heroVariant } = useHero();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {heroVariant === "demo2" ? <HeroSectionDemo2 /> : <HeroSection />}
        {/* <WhatBringsYouSection /> */}
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;