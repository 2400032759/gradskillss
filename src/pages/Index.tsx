import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GapSection from "@/components/GapSection";
import ProgramSection from "@/components/ProgramSection";
import OutcomesSection from "@/components/OutcomesSection";
import PricingSection from "@/components/PricingSection";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-full relative home-theme">
      <Navbar theme="home" />
      <main>
        <HeroSection theme="home" />
        <GapSection theme="home" />
        <ProgramSection theme="home" />
        <OutcomesSection theme="home" />
        <PricingSection theme="home" />
        <ImpactSection theme="home" />
      </main>
      <Footer theme="home" />
      <ChatBot theme="home" />
      <BackToTop theme="home" />
    </div>
  );
};

export default Index;
