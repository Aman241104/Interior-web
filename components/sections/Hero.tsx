"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { company } from "@/lib/data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.4 });

    // Label line
    tl.fromTo(
      ".hero-label",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }
    );

    // Title lines — staggered word reveal
    tl.fromTo(
      ".hero-line",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: "power4.out" },
      "-=0.4"
    );

    // Sub text
    tl.fromTo(
      ".hero-sub",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power4.out" },
      "-=0.5"
    );

    // CTA buttons
    tl.fromTo(
      ".hero-cta",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out" },
      "-=0.5"
    );

    // Right image panel
    tl.fromTo(
      ".hero-image-panel",
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
      "-=1.2"
    );

    // Stats strip
    tl.fromTo(
      ".hero-stat",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power4.out" },
      "-=0.6"
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen bg-cream overflow-hidden">
      {/* Main Layout: Left text + Right image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)] pt-12 lg:pt-18">

        {/* Left: Text Content */}
        <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-8 lg:pt-0 pb-8">
          {/* Label */}
          <div className="hero-label flex items-center gap-3 mb-5 lg:mb-8">
            <div className="h-px w-10 bg-gold" />
            <span className="font-sans text-xs font-700 tracking-[0.2em] uppercase text-gold">
              Est. 2013 · Ahmedabad
            </span>
          </div>

          {/* Display Title */}
          <h1 className="mb-5 lg:mb-8">
            <span className="hero-line block font-serif text-[clamp(2rem,8vw,6rem)] font-300 leading-[0.92] tracking-tight text-dark">
              Crafting
            </span>
            <span className="hero-line block font-serif text-[clamp(2rem,8vw,6rem)] font-700 italic leading-[0.92] tracking-tight text-dark">
              Spaces
            </span>
            <span className="hero-line block font-serif text-[clamp(2rem,8vw,6rem)] font-300 leading-[0.92] tracking-tight text-dark">
              That Define
            </span>
            <span className="hero-line block font-serif text-[clamp(2rem,8vw,6rem)] font-700 italic leading-[0.92] tracking-tight text-gold">
              You.
            </span>
          </h1>

          {/* Sub text */}
          <p className="hero-sub font-sans text-base lg:text-lg text-stone-500 leading-relaxed max-w-md mb-7 lg:mb-10">
            {company.subTagline}. Premium turnkey interiors for residential and
            commercial spaces in Ahmedabad by <span className="text-dark font-600">{company.founder}</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="hero-cta inline-flex items-center gap-3 bg-dark text-cream font-sans text-sm font-600 tracking-wide px-8 py-4 rounded-full hover:bg-gold transition-all duration-300 group"
            >
              View Our Work
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/calculator"
              className="hero-cta inline-flex items-center gap-2 border border-dark/30 text-dark font-sans text-sm font-600 tracking-wide px-8 py-4 rounded-full hover:border-gold hover:text-gold transition-all duration-300"
            >
              Estimate Cost
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="hero-cta flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 pt-6 lg:mt-8 lg:pt-8 border-t border-stone-200">
            {["Under 90 Days Delivery", "Top Brand Materials", "CCTV Monitored Sites"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span className="font-sans text-xs text-stone-500">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image Panel */}
        <div className="hero-image-panel relative hidden lg:block">
          <Image
            src="/images/hero-main.png"
            alt="Premium interior design by Styluxe — living room showcase"
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
          {/* subtle dark vignette on left edge to blend with text side */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/30 via-transparent to-transparent pointer-events-none" />
          {/* Overlay card */}
          <div className="absolute bottom-12 left-8 bg-cream/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-[240px]">
            <p className="font-serif text-sm italic text-dark/60 mb-2">Latest Project</p>
            <p className="font-sans text-base font-600 text-dark">Jasprit Bumrah Farmhouse</p>
            <p className="font-sans text-xs text-stone-500 mt-1">8500 sqft · Ahmedabad</p>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-sans text-xs text-stone-500">5.0 rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-dark text-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-dark-700">
            {[
              { value: "27+", label: "Projects Completed" },
              { value: "13+", label: "Years of Experience" },
              { value: "10+", label: "Team Members" },
              { value: "90d", label: "Max Delivery Time" },
            ].map((stat, i) => (
              <div key={i} className="hero-stat text-center lg:px-8">
                <div className="font-serif text-3xl lg:text-4xl font-700 text-gold">
                  {stat.value}
                </div>
                <div className="font-sans text-xs text-stone-400 tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
