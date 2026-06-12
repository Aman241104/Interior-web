import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutStrip from "@/components/sections/AboutStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Styluxe Interior Decor | Turnkey Interior Design Ahmedabad",
  description:
    "Crafting spaces that define you. Premium turnkey interior design for residential and commercial projects in Ahmedabad. Delivered under 90 days by Akash Modi.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeSection />
      <AboutStrip />
      <ServicesSection />
      <ProjectsPreview />
      <ProcessSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
