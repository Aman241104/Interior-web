"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { company, awardsAndCerts, notableClients } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function AboutClient() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    gsap.fromTo(
      ".about-hero-text",
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    );
  }, { scope: heroRef });

  return (
    <>
      {/* Hero */}
      <div ref={heroRef} className="pt-32 pb-24 bg-cream px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="about-hero-text">
          <SectionLabel text="Our Story" />
        </div>
        <h1 className="about-hero-text font-serif text-[clamp(2.2rem,6vw,7rem)] font-300 leading-[0.92] tracking-tight text-dark mt-6 mb-8 max-w-5xl">
          Thirteen years of{" "}
          <span className="italic font-600 text-gold">crafting</span>{" "}
          extraordinary interiors.
        </h1>
        <p className="about-hero-text font-sans text-lg text-stone-500 leading-relaxed max-w-2xl">
          From a single studio in Paldi, Ahmedabad to becoming the city's most trusted turnkey interior
          design firm—our journey is defined by precision, passion, and the spaces we've helped people call home.
        </p>
      </div>

      {/* Full-width studio image */}
      <div className="h-[50vh] lg:h-[60vh] relative overflow-hidden">
        <Image
          src="/images/studio-office.png"
          alt="Styluxe Interior Decor studio — biophilic office design, Paldi Ahmedabad"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 pb-8">
            <p className="font-serif text-xl italic text-cream/70">
              The Styluxe studio — Paldi, Ahmedabad
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <SectionLabel text="The Beginning" />
              <h2 className="font-serif text-[clamp(2rem,3vw,3.5rem)] font-300 text-dark leading-tight mt-6 mb-6">
                A belief that every space deserves{" "}
                <span className="italic font-600 text-gold">intention.</span>
              </h2>
              <div className="font-sans text-base text-stone-500 leading-relaxed space-y-4">
                <p>
                  In 2013, Akash Modi founded Styluxe Interior Decor with a simple but powerful conviction:
                  that good design shouldn't be a luxury exclusive to a few. Every space—an apartment in
                  Satellite, a factory office in Narol, a hospital ward in the city centre—deserves
                  thoughtful, purposeful design.
                </p>
                <p>
                  Starting with residential projects in Paldi and Bodakdev, Styluxe quickly gained a
                  reputation for meticulous execution, reliable timelines, and a personal design touch
                  that translated clients' visions into reality with remarkable fidelity.
                </p>
                <p>
                  Today, with 27 completed projects across residential and commercial sectors, a team of
                  10+ specialists, and notable clients ranging from international cricketers to leading
                  pharmaceutical companies, Styluxe stands as Ahmedabad's premier turnkey interior design firm.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <SectionLabel text="The Founder" />
              <div className="h-64 md:h-80 rounded-2xl relative overflow-hidden mt-6 mb-6 bg-stone-900">
                <Image
                  src="/images/founder-headshot.png"
                  alt="Akash Modi — Founder & Principal Designer, Styluxe Interior Decor"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/70 to-transparent p-6">
                  <p className="font-serif text-xl font-600 text-cream">{company.founder}</p>
                  <p className="font-sans text-sm text-cream/70">Founder & Principal Designer</p>
                </div>
              </div>
              <div className="font-sans text-base text-stone-500 leading-relaxed space-y-4">
                <p>
                  Akash Modi brings over 13 years of hands-on interior design experience spanning
                  residential, commercial, and healthcare spaces. His approach marries aesthetic
                  boldness with functional precision—a philosophy that has earned Styluxe both
                  loyal clients and industry recognition.
                </p>
                <p>
                  A certified interior design professional and IIID member, Akash leads every project
                  personally from concept through quality check, ensuring the Styluxe standard is
                  upheld at every stage.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 text-center">
              {[
                { value: `${company.stats.total}+`, label: "Projects Completed" },
                { value: `${company.stats.experience}+`, label: "Years of Experience" },
                { value: `${company.stats.team}+`, label: "Team Members" },
                { value: `${company.stats.awards}`, label: "Industry Awards" },
              ].map((stat) => (
                <div key={stat.label} className="py-6 lg:py-8">
                  <div className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-700 text-gold leading-none mb-3">
                    {stat.value}
                  </div>
                  <div className="font-sans text-sm text-stone-500 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14">
            <SectionLabel text="Recognition" />
            <h2 className="font-serif text-[clamp(2rem,3.5vw,4rem)] font-300 text-dark leading-tight mt-6">
              Awards &{" "}
              <span className="italic font-600 text-gold">Certifications</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsAndCerts.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-cream border border-stone-200 rounded-2xl overflow-hidden hover:border-gold/40 hover:shadow-md transition-all duration-300">
                  {"image" in item && item.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image as string}
                        alt={item.title}
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.type === "award" ? "bg-gold/10" : "bg-terra/10"
                      }`}>
                        {item.type === "award" ? (
                          <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <span className={`font-sans text-xs font-700 uppercase tracking-wider ${
                          item.type === "award" ? "text-gold" : "text-terra"
                        }`}>
                          {item.type === "award" ? "Award" : "Certification"}
                        </span>
                        <h3 className="font-sans text-sm font-600 text-dark mt-1 leading-snug">
                          {item.title}
                        </h3>
                        <p className="font-sans text-xs text-stone-400 mt-1">
                          {item.issuer} · {item.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Clients */}
      <section className="py-24 bg-cream-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14">
            <SectionLabel text="Our Clients" />
            <h2 className="font-serif text-[clamp(2rem,3.5vw,4rem)] font-300 text-dark leading-tight mt-6">
              Trusted by those who{" "}
              <span className="italic font-600 text-gold">demand the best.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {notableClients.map((client, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex items-center gap-4 p-5 bg-cream border border-stone-200 rounded-xl hover:border-gold/40 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-full flex-shrink-0 ${
                    client.type === "residential"
                      ? "bg-gradient-to-br from-amber-200 to-stone-300"
                      : "bg-gradient-to-br from-stone-300 to-stone-400"
                  }`} />
                  <div>
                    <p className="font-sans text-sm font-600 text-dark">{client.name}</p>
                    <p className="font-sans text-xs text-stone-400">{client.role}</p>
                  </div>
                  <div className="ml-auto">
                    <span className={`font-sans text-xs px-2 py-1 rounded-full ${
                      client.type === "residential"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-stone-200 text-stone-600"
                    }`}>
                      {client.type}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark text-center px-6">
        <AnimatedSection>
          <p className="font-sans text-xs font-700 tracking-[0.2em] uppercase text-gold mb-6">
            Work With Us
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,5rem)] font-300 text-cream leading-tight mb-8 max-w-3xl mx-auto">
            Your space deserves the{" "}
            <span className="italic font-600 text-gold">Styluxe touch.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold text-dark font-sans text-sm font-700 tracking-wide px-10 py-4 rounded-full hover:bg-gold-light transition-all duration-300"
          >
            Start Your Project
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
