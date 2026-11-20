import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Differentials } from "@/components/Differentials";
import { Categories } from "@/components/Categories";
import { Compatibility } from "@/components/Compatibility";
import { Pricing } from "@/components/Pricing";
import { HowItWorks } from "@/components/HowItWorks";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Fog } from "@/components/Fog";

export default function Home() {
  return (
    <div className="min-h-screen bg-haze-base flex flex-col selection:bg-haze-primary/30 selection:text-white relative">
      {/* Barra de progresso do scroll com useSpring */}
      <ScrollProgress />
      
      {/* Camada fixa de névoa atmosférica com parallax suave */}
      <Fog />

      <Navbar />
      <main className="flex-1">
        <Hero />
        <Differentials />
        <Categories />
        <Compatibility />
        <Pricing />
        <HowItWorks />
        <CtaBanner />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
