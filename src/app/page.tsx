import HeroSection from "@/components/home/HeroSection";
import LogoStrip from "@/components/home/LogoStrip";
import FeaturesSection from "@/components/home/FeaturesSection";
import ImpactSection from "@/components/home/ImpactSection";
import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const HomePage = async () => {
  const res = await fetch(
    "http://localhost:5000/events",
    {
      cache: "no-store",
    }
  );

  const events = await res.json();

  return (
    <main>
      <HeroSection />

      <LogoStrip />

      <FeaturesSection />

      <ImpactSection />

      <UpcomingEventsSection events={events} />

      <NewsletterSection />
    </main>
  );
};

export default HomePage;