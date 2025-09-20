import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ProductionSection from "@/components/home/ProductionSection";
import MissionSection from "@/components/home/MissionSection";
import ImpactSection from "@/components/home/ImpactSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import PageLayout from "@/components/layouts/PageLayout";

const Index = () => {
  return (
    <PageLayout className="pt-0">
      <HeroSection />
      <IntroSection />
      <ProductionSection />
      <MissionSection />
      <ImpactSection />
      <CallToActionSection />
    </PageLayout>
  );
};

export default Index;