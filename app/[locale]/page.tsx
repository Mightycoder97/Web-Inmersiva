import HeroSection from "@/components/home/HeroSection";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import MenuPreview from "@/components/home/MenuPreview";
import ReservationCTA from "@/components/home/ReservationCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedEvents />
      <MenuPreview />
      <ReservationCTA />
    </>
  );
}
