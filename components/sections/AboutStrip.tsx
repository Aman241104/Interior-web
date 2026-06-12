"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { company } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: company.stats.total, suffix: "+", label: "Projects Delivered" },
  { value: company.stats.experience, suffix: "+", label: "Years Experience" },
  { value: company.stats.team, suffix: "+", label: "Expert Team" },
  { value: company.stats.awards, suffix: "", label: "Design Awards" },
];

function useCounter(
  ref: React.RefObject<HTMLSpanElement | null>,
  target: number,
  suffix: string
) {
  useGSAP(() => {
    if (!ref.current) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: "power3.out",
      snap: { val: 1 },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate() {
        if (ref.current) {
          ref.current.textContent = Math.round(obj.val) + suffix;
        }
      },
    });
  });
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const numRef = useRef<HTMLSpanElement>(null);
  useCounter(numRef, value, suffix);

  return (
    <div className="stagger-child text-center lg:text-left group">
      <div className="font-serif text-[clamp(2.5rem,5vw,5rem)] font-700 text-dark leading-none mb-2 counter-number">
        <span ref={numRef} className="text-gold">0</span>
      </div>
      <p className="font-sans text-sm text-stone-500 tracking-wide">{label}</p>
    </div>
  );
}

export default function AboutStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const label = sectionRef.current.querySelector(".about-label");
    const heading = sectionRef.current.querySelector(".about-heading");
    const body = sectionRef.current.querySelector(".about-body");
    const cta = sectionRef.current.querySelector(".about-cta");

    gsap.fromTo(
      [label, heading, body, cta],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text */}
          <div ref={sectionRef}>
            <div className="about-label">
              <SectionLabel text="Our Story" />
            </div>
            <h2 className="about-heading font-serif text-[clamp(2.5rem,4vw,4rem)] font-300 leading-tight mt-6 mb-6 text-dark">
              Thirteen years of turning{" "}
              <span className="italic font-600 text-gold">blank canvases</span>{" "}
              into lived-in masterpieces.
            </h2>
            <p className="about-body font-sans text-base text-stone-500 leading-relaxed mb-8 max-w-lg">
              Founded in 2013 by Akash Modi, Styluxe began with a singular belief: that every
              space—however modest—deserves intentional design. From a small studio in Paldi to
              completing landmark projects across Ahmedabad, we have held true to that belief
              across 27 projects and counting.
            </p>
            <div className="about-cta flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-dark text-cream font-sans text-sm font-600 tracking-wide px-7 py-3.5 rounded-full hover:bg-gold transition-all duration-300 group"
              >
                Meet the Team
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-dark font-sans text-sm font-600 tracking-wide px-7 py-3.5 rounded-full border border-dark/20 hover:border-gold hover:text-gold transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}

            {/* Image Accent */}
            <div className="col-span-2 h-32 rounded-2xl relative overflow-hidden">
              <Image
                src="/images/studio-office.png"
                alt="Styluxe studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-dark/50" />
              <div className="absolute inset-0 flex items-center px-6">
                <div>
                  <p className="font-serif text-xl italic text-cream/90">
                    "Quality is not a destination, it's our standard."
                  </p>
                  <p className="font-sans text-xs text-cream/60 mt-2">— Akash Modi, Founder</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
