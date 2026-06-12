"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { company } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".cta-content",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
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
    <section ref={sectionRef} className="bg-dark overflow-hidden relative">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #B8923A 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #C4724A 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-28 lg:py-40">
        <div className="cta-content max-w-4xl mx-auto text-center">

          {/* Oversized background text */}
          <div
            className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden
          >
            <span className="font-serif text-[12vw] font-700 text-cream/[0.03] leading-none tracking-tight whitespace-nowrap">
              Styluxe
            </span>
          </div>

          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-gold/50" />
            <span className="font-sans text-xs font-700 tracking-[0.2em] uppercase text-gold">
              Start Your Project
            </span>
            <div className="h-px w-10 bg-gold/50" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[clamp(2rem,5vw,5.5rem)] font-300 text-cream leading-tight mb-6">
            Ready to transform
            <br />
            <span className="italic font-600 text-gold">your space?</span>
          </h2>

          <p className="font-sans text-base lg:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto mb-12">
            From your first inquiry to the final quality check, we handle everything.
            Let's build something extraordinary together—delivered in under 90 days.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold text-dark font-sans text-sm font-700 tracking-wide px-8 sm:px-10 py-4 rounded-full hover:bg-gold/80 transition-all duration-300 group"
            >
              Schedule a Consultation
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-stone-600 text-stone-300 hover:border-cream hover:text-cream font-sans text-sm font-600 tracking-wide px-8 sm:px-10 py-4 rounded-full transition-all duration-300"
            >
              Calculate Your Budget
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-12 pt-8 border-t border-dark-700 grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { value: "27+", label: "Projects Done" },
              { value: "₹0", label: "Hidden Charges" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-serif text-3xl font-700 text-gold">{item.value}</div>
                <div className="font-sans text-xs text-stone-600 mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-stone-600 text-sm">
            <a
              href={`mailto:${company.email}`}
              className="font-sans hover:text-gold transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {company.email}
            </a>
            <span className="hidden sm:block text-dark-700">·</span>
            <span className="font-sans text-stone-600">
              Paldi, Ahmedabad, Gujarat
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
