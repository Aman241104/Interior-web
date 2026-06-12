"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { faqs } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      ".faq-item",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

          {/* Left: Header */}
          <div className="lg:sticky lg:top-28 lg:block">
            <SectionLabel text="FAQ" />
            <h2 className="font-serif text-[clamp(2rem,3.5vw,4rem)] font-300 text-dark leading-tight mt-6 mb-6">
              Questions we{" "}
              <span className="italic font-600 text-gold">always get asked.</span>
            </h2>
            <p className="font-sans text-base text-stone-500 leading-relaxed mb-8">
              Everything you need to know before starting your interior project.
              Can't find your answer?
            </p>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-dark text-cream font-sans text-sm font-600 tracking-wide px-7 py-3.5 rounded-full hover:bg-gold transition-all duration-300 group"
            >
              Ask us directly
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-2 flex flex-col divide-y divide-stone-200">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                >
                  <span className={`font-sans text-base font-600 leading-snug transition-colors duration-200 ${open === i ? "text-dark" : "text-dark/70 group-hover:text-dark"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-300 mt-0.5 ${
                    open === i ? "bg-gold border-gold" : "border-stone-300 group-hover:border-dark"
                  }`}>
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-400 ${open === i ? "max-h-64 pt-4" : "max-h-0"}`}>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
