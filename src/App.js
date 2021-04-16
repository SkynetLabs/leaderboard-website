import HeroSection from "./components/HeroSection";
import DescriptionSection from "./components/DescriptionSection";
import SkynetSection from "./components/SkynetSection";
import SubscribeSection from "./components/SubscribeSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <>
      <main>
        <HeroSection />
        <DescriptionSection />
        <SkynetSection />
        <SubscribeSection />
      </main>
      <FooterSection />
    </>
  );
}
