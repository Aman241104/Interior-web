"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    name: "Essential",
    priceResidential: "₹800 – ₹1,200",
    priceCommercial: "₹1,000 – ₹1,400",
    unit: "per sqft",
    timeline: "45 – 60 days",
    description: "Clean, functional interiors using quality materials. Perfect for budget-conscious projects without compromising on design.",
    features: [
      "2D design drawings",
      "Standard material selection",
      "Modular furniture",
      "Basic false ceiling",
      "Standard electrical layout",
      "Project manager assigned",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    priceResidential: "₹1,300 – ₹1,800",
    priceCommercial: "₹1,500 – ₹2,200",
    unit: "per sqft",
    timeline: "60 – 75 days",
    description: "The perfect balance of luxury and value. Our most popular package for comprehensive home and office transformations.",
    features: [
      "2D + 3D design renders",
      "Premium material selection",
      "Custom + modular furniture",
      "Designer false ceiling",
      "Enhanced electrical & lighting",
      "Dedicated design team",
      "Weekly progress reports",
      "Post-handover support",
    ],
    highlight: true,
  },
  {
    name: "Luxury",
    priceResidential: "₹2,000 – ₹3,000",
    priceCommercial: "₹2,500 – ₹4,000",
    unit: "per sqft",
    timeline: "75 – 90 days",
    description: "No compromises. Top-brand materials, fully custom furniture, live 3D glasses view, and white-glove execution throughout.",
    features: [
      "Full 3D visualization + VR walkthrough",
      "Top-brand materials exclusively",
      "100% custom furniture",
      "Coffered / designer ceilings",
      "Smart home integration",
      "Senior designer + architect",
      "Daily progress updates",
      "1-year post-handover warranty",
    ],
    highlight: false,
  },
];

export default function ServicesClient() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    gsap.fromTo(
      ".services-hero-text",
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    );
  }, { scope: heroRef });

  return (
    <>
      {/* Hero */}
      <div ref={heroRef} className="pt-32 pb-24 bg-cream px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="services-hero-text">
          <SectionLabel text="What We Offer" />
        </div>
        <h1 className="services-hero-text font-serif text-[clamp(2.2rem,6vw,7rem)] font-300 leading-[0.92] tracking-tight text-dark mt-6 mb-8 max-w-5xl">
          Spaces designed for the way{" "}
          <span className="italic font-600 text-gold">you live and work.</span>
        </h1>
        <p className="services-hero-text font-sans text-lg text-stone-500 leading-relaxed max-w-2xl">
          Residential sanctuaries, productive commercial environments, and compliant healthcare facilities—all designed and executed under one roof, on time and on budget.
        </p>
      </div>

      {/* Service Detail Sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${i % 2 === 0 ? "bg-cream" : "bg-cream-200"}`}
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              i % 2 !== 0 ? "lg:grid-flow-dense" : ""
            }`}>
              {/* Image */}
              <div className={`${i % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                <AnimatedSection>
                  <div className={`h-[260px] sm:h-[360px] lg:h-[500px] rounded-2xl overflow-hidden ${service.bgClass} relative`}>
                    <Image
                      src={`/images/services/${service.id}.png`}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <span className="font-sans text-xs font-700 tracking-wider uppercase bg-gold text-dark px-3 py-1.5 rounded-full">
                        {service.subtitle}
                      </span>
                    </div>
                    {/* Floating project count */}
                    <div className="absolute bottom-6 right-6 bg-cream/90 backdrop-blur-sm rounded-xl px-5 py-3 text-right">
                      <div className="font-serif text-3xl font-700 text-gold">
                        {i < 2 ? (i === 0 ? "17" : "10") : i === 2 ? "3+" : "27+"}
                      </div>
                      <div className="font-sans text-xs text-stone-500">
                        {service.category === "residential" ? "Residential Projects"
                          : service.category === "commercial" ? "Commercial Projects"
                          : service.category === "medical" ? "Healthcare Projects"
                          : "Total Projects"}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <AnimatedSection delay={0.15}>
                  <SectionLabel text={service.category} />
                  <h2 className="font-serif text-[clamp(2rem,3.5vw,4rem)] font-300 text-dark leading-tight mt-6 mb-4">
                    {service.title}
                  </h2>
                  <p className="font-sans text-base text-stone-500 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-sans text-sm text-stone-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-dark text-cream font-sans text-sm font-600 tracking-wide px-8 py-4 rounded-full hover:bg-gold transition-all duration-300 group"
                  >
                    Get a Quote for {service.title}
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Packages Section */}
      <section className="py-24 bg-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold/50" />
              <span className="font-sans text-xs font-700 tracking-[0.2em] uppercase text-gold">Pricing</span>
              <div className="h-px w-10 bg-gold/50" />
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,4vw,5rem)] font-300 text-cream leading-tight">
              Transparent packages,{" "}
              <span className="italic font-600 text-gold">no surprises.</span>
            </h2>
            <p className="font-sans text-base text-stone-500 mt-6 max-w-xl mx-auto leading-relaxed">
              Every project is unique. Our packages are starting points—use our calculator for a
              precise estimate tailored to your space.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 0.1}>
                <div className={`rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-gold text-dark border-2 border-gold"
                    : "bg-dark-800 border border-dark-700 hover:border-stone-600 text-cream"
                }`}>
                  {pkg.highlight && (
                    <div className="inline-block font-sans text-xs font-700 tracking-wider uppercase bg-dark text-gold px-3 py-1 rounded-full mb-6 self-start">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`font-serif text-3xl font-600 mb-2 ${pkg.highlight ? "text-dark" : "text-cream"}`}>
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <div className={`font-sans text-xs uppercase tracking-wider mb-1 ${pkg.highlight ? "text-dark/60" : "text-stone-500"}`}>
                      Residential
                    </div>
                    <div className={`font-sans text-xl font-700 ${pkg.highlight ? "text-dark" : "text-cream"}`}>
                      {pkg.priceResidential}
                      <span className={`text-sm font-400 ml-1 ${pkg.highlight ? "text-dark/60" : "text-stone-400"}`}>
                        {pkg.unit}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className={`font-sans text-xs uppercase tracking-wider mb-1 ${pkg.highlight ? "text-dark/60" : "text-stone-500"}`}>
                      Commercial
                    </div>
                    <div className={`font-sans text-xl font-700 ${pkg.highlight ? "text-dark" : "text-cream"}`}>
                      {pkg.priceCommercial}
                      <span className={`text-sm font-400 ml-1 ${pkg.highlight ? "text-dark/60" : "text-stone-400"}`}>
                        {pkg.unit}
                      </span>
                    </div>
                  </div>
                  <div className={`font-sans text-xs mb-4 px-3 py-2 rounded-lg inline-block ${
                    pkg.highlight ? "bg-dark/10 text-dark" : "bg-dark-700 text-stone-400"
                  }`}>
                    Timeline: {pkg.timeline}
                  </div>
                  <p className={`font-sans text-sm leading-relaxed mb-6 ${pkg.highlight ? "text-dark/70" : "text-stone-500"}`}>
                    {pkg.description}
                  </p>
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          pkg.highlight ? "bg-dark/10" : "bg-gold/10"
                        }`}>
                          <svg className={`w-2.5 h-2.5 ${pkg.highlight ? "text-dark" : "text-gold"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className={`font-sans text-sm ${pkg.highlight ? "text-dark/80" : "text-stone-400"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/calculator"
                    className={`mt-8 w-full text-center py-3.5 rounded-full font-sans text-sm font-600 transition-all duration-300 ${
                      pkg.highlight
                        ? "bg-dark text-cream hover:bg-dark/80"
                        : "border border-stone-700 text-stone-400 hover:border-gold hover:text-gold"
                    }`}
                  >
                    Calculate {pkg.name} Cost
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="font-sans text-sm text-stone-500">
              All prices are indicative. Final quote based on site survey and material selection.{" "}
              <Link href="/calculator" className="text-gold hover-underline">
                Use our calculator
              </Link>{" "}
              for a detailed estimate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
