import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import DescriptionSection from "../components/DescriptionSection";
import SkynetSection from "../components/SkynetSection";
import SubscribeSection from "../components/SubscribeSection";
import JumbotronSection from "../components/JumbotronSection";
import FooterSection from "../components/FooterSection";

const phase = "explore"; // build, explore, dream

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      {phase === "explore" && <ProjectsSection />}
      <DescriptionSection />
      <SkynetSection />
      {phase === "build" && <SubscribeSection />}
      {phase === "explore" && <JumbotronSection />}
      <FooterSection />
    </>
  );
}
