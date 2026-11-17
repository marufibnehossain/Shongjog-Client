import HeroSection from "@/components/home/HeroSection";
import LogoStrip from "@/components/home/LogoStrip";
import FeaturesSection from "@/components/home/FeaturesSection";
import ImpactSection from "@/components/home/ImpactSection";
import GallerySection from "@/components/home/GallerySection";
import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const HomePage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/upcoming?limit=6`,
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

      <GallerySection />

      <UpcomingEventsSection events={events} />

      <NewsletterSection />
    </main>
  );
};

export default HomePage;