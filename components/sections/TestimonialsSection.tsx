"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      ".testimonial-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  const featured = testimonials[active];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <SectionLabel text="Client Stories" light />
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] font-300 text-cream leading-tight mt-6">
              Spaces they{" "}
              <span className="italic font-600 text-gold">love coming home to.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="font-serif text-4xl font-700 text-gold">4.9</div>
              <div className="font-sans text-xs text-stone-500 mt-0.5">Average rating</div>
            </div>
            <div className="w-px h-12 bg-stone-700" />
            <div className="text-right">
              <div className="font-serif text-4xl font-700 text-gold">27+</div>
              <div className="font-sans text-xs text-stone-500 mt-0.5">Projects delivered</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Featured quote */}
          <div className="testimonial-card lg:col-span-3">
            <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8 lg:p-10 h-full flex flex-col">
              <StarRating count={featured.rating} />
              <blockquote className="font-serif text-xl lg:text-2xl font-300 italic text-cream/90 leading-relaxed mt-6 flex-1">
                "{featured.quote}"
              </blockquote>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-dark-700">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-stone-800 flex-shrink-0 relative">
                  <Image
                    src={featured.imageSrc}
                    alt={featured.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-sans text-sm font-700 text-cream">{featured.name}</p>
                  <p className="font-sans text-xs text-gold">{featured.role}</p>
                  <p className="font-sans text-xs text-stone-500 mt-0.5">{featured.type}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Selector list */}
          <div className="testimonial-card lg:col-span-2 flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 group ${
                  active === i
                    ? "bg-dark-800 border-gold/40"
                    : "border-dark-700 hover:border-stone-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-800 flex-shrink-0 relative">
                    <Image
                      src={t.imageSrc}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className={`font-sans text-sm font-600 truncate transition-colors ${active === i ? "text-cream" : "text-stone-400 group-hover:text-stone-300"}`}>
                      {t.name}
                    </p>
                    <p className="font-sans text-xs text-stone-600 truncate">{t.type}</p>
                  </div>
                  {active === i && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
