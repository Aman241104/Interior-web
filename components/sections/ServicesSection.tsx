"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".service-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <SectionLabel text="What We Do" light />
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] font-300 text-cream leading-tight mt-6">
              Every space,{" "}
              <span className="italic font-600 text-gold">every type,</span>
              <br />
              every scale.
            </h2>
          </div>
          <p className="font-sans text-base text-stone-500 max-w-sm leading-relaxed lg:mb-2">
            From compact apartments to hospital campuses, our capabilities cover the full spectrum
            of interior design and execution.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`service-card group relative rounded-2xl overflow-hidden border border-dark-700 hover:border-gold/40 transition-all duration-500 cursor-pointer ${
                i === 0 || i === 3 ? "md:col-span-1" : "md:col-span-1"
              }`}
            >
              {/* Service Image */}
              <div className={`h-56 ${service.bgClass} relative overflow-hidden`}>
                <Image
                  src={`/images/services/${service.id}.png`}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-sans text-xs font-700 tracking-[0.15em] uppercase bg-dark/60 text-cream px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {service.subtitle}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark-800/80 to-transparent z-10" />
              </div>

              {/* Content */}
              <div className="p-6 bg-dark-800">
                <h3 className="font-serif text-2xl font-600 text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-stone-500 leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-sans text-xs text-stone-500">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-gold font-sans text-sm font-600 hover-underline group/link"
                >
                  Explore Service
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 border border-stone-700 text-stone-400 hover:border-gold hover:text-gold font-sans text-sm font-600 tracking-wide px-8 py-4 rounded-full transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
