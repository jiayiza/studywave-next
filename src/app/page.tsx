import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/feature-section";
import { Footer } from "@/components/ui/footer";
import { TestimonialsSection } from "@/components/ui/testimonials-section";

export default async function Home() {
  return (
    <div className="min-h-[200vh]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
