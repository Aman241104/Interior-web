"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { processSteps } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".process-item",
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".process-image",
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <SectionLabel text="Our Process" />
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] font-300 text-dark leading-tight mt-6 max-w-2xl">
            Eight steps from{" "}
            <span className="italic font-600 text-gold">inquiry to handover.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Accordion Steps */}
          <div className="flex flex-col">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="process-item border-b border-stone-200 cursor-pointer group"
                onClick={() => setActiveStep(i === activeStep ? -1 : i)}
              >
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center gap-5">
                    <span className={`font-serif text-3xl font-700 leading-none transition-colors duration-300 ${
                      activeStep === i ? "text-gold" : "text-stone-300 group-hover:text-stone-400"
                    }`}>
                      {step.step}
                    </span>
                    <div>
                      <h3 className={`font-sans text-base font-600 transition-colors duration-300 ${
                        activeStep === i ? "text-dark" : "text-dark/70 group-hover:text-dark"
                      }`}>
                        {step.title}
                      </h3>
                      <p className="font-sans text-xs text-stone-400 mt-0.5">{step.duration}</p>
                    </div>
                  </div>

                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    activeStep === i
                      ? "bg-gold border-gold text-dark"
                      : "border-stone-300 text-stone-400 group-hover:border-dark"
                  }`}>
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${activeStep === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Expanded content */}
                <div className={`overflow-hidden transition-all duration-400 ${
                  activeStep === i ? "max-h-40 pb-5" : "max-h-0"
                }`}>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed pl-16">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sticky Visual */}
          <div className="process-image lg:sticky lg:top-24">
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-stone-900">
              <Image
                src="/images/services/process.png"
                alt="Styluxe design consultation process"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="text-center">
                  <div className="font-serif text-7xl font-700 text-dark/10 mb-4">
                    {processSteps[activeStep >= 0 ? activeStep : 0].step}
                  </div>
                  <h3 className="font-serif text-2xl font-600 italic text-dark/60">
                    {processSteps[activeStep >= 0 ? activeStep : 0].title}
                  </h3>
                </div>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-cream/90 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  <div>
                    <p className="font-sans text-xs text-stone-500">Currently on step</p>
                    <p className="font-sans text-sm font-600 text-dark">
                      {processSteps[activeStep >= 0 ? activeStep : 0].step} — {processSteps[activeStep >= 0 ? activeStep : 0].title}
                    </p>
                  </div>
                  <div className="ml-auto font-sans text-xs text-stone-400">
                    {processSteps[activeStep >= 0 ? activeStep : 0].duration}
                  </div>
                </div>
              </div>
            </div>

            {/* CCTV badge */}
            <div className="mt-4 flex items-center gap-3 bg-dark rounded-xl px-5 py-4">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-sm font-600 text-cream">CCTV Monitored Worksites</p>
                <p className="font-sans text-xs text-stone-500">Real-time visibility into your project, always.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
