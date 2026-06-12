"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const featured = projects.filter((p) => p.featured);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".project-card",
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <SectionLabel text="Featured Work" />
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] font-300 text-dark leading-tight mt-6">
              Spaces we've{" "}
              <span className="italic font-600 text-gold">built and loved.</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-dark font-sans text-sm font-600 tracking-wide hover:text-gold transition-colors duration-200 group self-start lg:self-auto"
          >
            All {projects.length} Projects
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Featured Projects Grid — editorial asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Hero Project — spans 2 rows */}
          {featured[0] && (
            <div className="project-card lg:col-span-2 lg:row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
              {/* TODO: Replace with real project photo */}
              <div className={`relative ${featured[0].bgClass} img-placeholder h-72 lg:h-full min-h-[400px] transition-transform duration-700 group-hover:scale-105`}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-xs font-700 tracking-[0.1em] uppercase bg-gold text-dark px-3 py-1.5 rounded-full">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="font-sans text-xs text-cream/60 uppercase tracking-wider mb-2">
                    {featured[0].type} · {featured[0].area}
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl font-600 text-cream mb-2">
                    {featured[0].title}
                  </h3>
                  <p className="font-sans text-sm text-cream/70 leading-relaxed hidden lg:block">
                    {featured[0].description}
                  </p>
                  <div className="flex gap-2 mt-3">
                    {featured[0].tags.map((tag) => (
                      <span key={tag} className="font-sans text-xs text-cream/60 border border-cream/20 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secondary projects */}
          {featured.slice(1, 3).map((project) => (
            <div key={project.id} className="project-card group relative rounded-2xl overflow-hidden cursor-pointer">
              {/* TODO: Replace with real project photo */}
              <div className={`relative ${project.bgClass} img-placeholder h-64 transition-transform duration-700 group-hover:scale-105`}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-sans text-xs text-cream/60 uppercase tracking-wider mb-1">
                    {project.type} · {project.area}
                  </p>
                  <h3 className="font-serif text-xl font-600 text-cream">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-cream/60 mt-1">
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Fourth project */}
          {featured[3] && (
            <div className="project-card lg:col-span-3 group relative rounded-2xl overflow-hidden cursor-pointer">
              {/* TODO: Replace with real project photo */}
              <div className={`relative ${featured[3].bgClass} img-placeholder h-56 transition-transform duration-700 group-hover:scale-105`}>
                <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-transparent" />
                <div className="absolute left-0 top-0 bottom-0 flex items-center p-8">
                  <div>
                    <p className="font-sans text-xs text-cream/60 uppercase tracking-wider mb-2">
                      {featured[3].type} · {featured[3].area}
                    </p>
                    <h3 className="font-serif text-2xl lg:text-3xl font-600 text-cream mb-2">
                      {featured[3].title}
                    </h3>
                    <p className="font-sans text-sm text-cream/70 max-w-md hidden md:block">
                      {featured[3].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Clients footnote */}
        <div className="mt-10 pt-10 border-t border-stone-200 flex flex-wrap items-center gap-2 text-sm text-stone-400">
          <span className="font-sans text-xs uppercase tracking-wider text-stone-500 mr-2">Notable Clients:</span>
          {["Jasprit Bumrah", "Kamlesh Patel", "Ajanta Pharma", "Global Hospital", "Manas Shah"].map((client, i) => (
            <span key={client} className="font-sans text-xs text-stone-400">
              {client}{i < 4 ? " ·" : ""}
            </span>
          ))}
          <span className="font-sans text-xs text-stone-400">and more</span>
        </div>
      </div>
    </section>
  );
}
