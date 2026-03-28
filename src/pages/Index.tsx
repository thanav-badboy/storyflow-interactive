import HeroSection from "@/components/HeroSection";
import SunlightSection from "@/components/SunlightSection";
import TwilightSection from "@/components/TwilightSection";
import MidnightSection from "@/components/MidnightSection";
import AbyssSection from "@/components/AbyssSection";
import DepthMeter from "@/components/DepthMeter";
import Bubbles from "@/components/Bubbles";

const Index = () => {
  return (
    <main className="relative">
      <Bubbles />
      <DepthMeter />
      <HeroSection />
      <SunlightSection />
      <TwilightSection />
      <MidnightSection />
      <AbyssSection />
    </main>
  );
};

export default Index;
