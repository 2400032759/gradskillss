import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GapSection from "@/components/GapSection";
import BridgeSection from "@/components/BridgeSection";
import DifferenceSection from "@/components/DifferenceSection";
import OutcomesSection from "@/components/OutcomesSection";
import PricingSection from "@/components/PricingSection";
import ImpactSection from "@/components/ImpactSection";
import MentorSection from "@/components/MentorSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");

  return (
    <div className={`min-h-screen overflow-x-hidden w-full max-w-full relative transition-colors duration-1000 ${currentTheme === "dark" ? "home-theme bg-[#030712]" : "bg-white"}`}>
      <Navbar theme={currentTheme} onThemeChange={setCurrentTheme} />
      <main>
        <HeroSection theme={currentTheme} />
        <PricingSection theme={currentTheme} />
        <GapSection theme={currentTheme} />
        <BridgeSection theme={currentTheme} />
        <DifferenceSection theme={currentTheme} />
        <OutcomesSection theme={currentTheme} />
        <MentorSection theme={currentTheme} />
        <ImpactSection theme={currentTheme} />
      </main>
      <Footer theme={currentTheme} />
      <ChatBot theme={currentTheme} />
      <BackToTop theme={currentTheme} />
    </div>
  );
};

export default Index;
