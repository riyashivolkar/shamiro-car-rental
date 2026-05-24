import AboutUs from "@/components/about";
import CTASection from "@/components/cta-section";
import ExploreFleet from "@/components/featured-cars";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
import WhyTravelWithShamiro from "@/components/why-us";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AboutUs />

      <ExploreFleet />
      <WhyTravelWithShamiro />
      <Reviews />
      <CTASection />
    </main>
  );
}
