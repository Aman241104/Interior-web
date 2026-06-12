"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects, type ProjectType } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

type Filter = "all" | ProjectType;
type SortKey = "default" | "year-desc" | "year-asc" | "area";

export default function ProjectsClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [sortKey, setSortKey] = useState<SortKey>("default");

  useGSAP(() => {
    if (!heroRef.current) return;
    gsap.fromTo(
      ".projects-hero-text",
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    );
  }, { scope: heroRef });

  const parseArea = (areaStr: string) => parseInt(areaStr.replace(/[^0-9]/g, "")) || 0;

  const filtered = (activeFilter === "all" ? projects : projects.filter((p) => p.type === activeFilter))
    .slice()
    .sort((a, b) => {
      if (sortKey === "year-desc") return b.year - a.year;
      if (sortKey === "year-asc") return a.year - b.year;
      if (sortKey === "area") return parseArea(b.area) - parseArea(a.area);
      return 0;
    });

  const handleFilterChange = (filter: Filter) => {
    if (!gridRef.current) {
      setActiveFilter(filter);
      return;
    }
    gsap.to(".project-grid-card", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.03,
      ease: "power2.in",
      onComplete: () => {
        setActiveFilter(filter);
        gsap.fromTo(
          ".project-grid-card",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power4.out" }
        );
      },
    });
  };

  return (
    <>
      {/* Hero */}
      <div ref={heroRef} className="pt-32 pb-16 bg-cream px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="projects-hero-text">
          <SectionLabel text="Our Portfolio" />
        </div>
        <h1 className="projects-hero-text font-serif text-[clamp(3rem,6vw,7rem)] font-300 leading-[0.92] tracking-tight text-dark mt-6 mb-8 max-w-5xl">
          {projects.length} projects.{" "}
          <span className="italic font-600 text-gold">One standard.</span>
        </h1>
        <p className="projects-hero-text font-sans text-lg text-stone-500 leading-relaxed max-w-2xl">
          Every space we've designed and built. From intimate apartments to hospital campuses,
          each project tells a story of collaboration, craft, and precision execution.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-cream sticky top-[72px] z-30 border-b border-stone-200 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
              {(["all", "residential", "commercial"] as Filter[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`font-sans text-sm font-600 tracking-wide px-6 py-2.5 rounded-full capitalize whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    activeFilter === filter
                      ? "bg-dark text-cream"
                      : "bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-dark"
                  }`}
                >
                  {filter === "all" ? `All (${projects.length})` : filter === "residential" ? `Residential (${projects.filter(p => p.type === "residential").length})` : `Commercial (${projects.filter(p => p.type === "commercial").length})`}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex-shrink-0">
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value as SortKey)}
                className="font-sans text-sm text-stone-500 bg-transparent border border-stone-200 rounded-full px-4 py-2 focus:outline-none focus:border-gold cursor-pointer hover:border-stone-400 transition-colors"
              >
                <option value="default">Sort: Default</option>
                <option value="year-desc">Newest first</option>
                <option value="year-asc">Oldest first</option>
                <option value="area">Largest area</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16 bg-cream">
        <div ref={gridRef} className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="project-grid-card group rounded-2xl overflow-hidden border border-stone-200 hover:border-gold/40 hover:shadow-xl transition-all duration-400 bg-cream cursor-pointer block"
              >
                {/* Image */}
                <div className={`relative h-56 ${project.bgClass} overflow-hidden`}>
                  {(project as any).imageSrc && (
                    <Image
                      src={(project as any).imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="font-sans text-xs font-700 tracking-wider uppercase bg-gold text-dark px-2.5 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className={`font-sans text-xs font-600 capitalize px-2.5 py-1 rounded-full ${
                      project.type === "residential"
                        ? "bg-amber-100/90 text-amber-800"
                        : "bg-stone-100/90 text-stone-700"
                    }`}>
                      {project.subtype}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-serif text-xl font-600 text-cream leading-tight">
                      {project.title}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-xs text-stone-400 font-sans">
                    <span>{project.location}</span>
                    <span>·</span>
                    <span>{project.area}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-sans text-xs text-stone-500 border border-stone-200 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats footer */}
          <div className="mt-16 pt-12 border-t border-stone-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "17", label: "Residential Projects" },
                { value: "10", label: "Commercial Projects" },
                { value: "₹50Cr+", label: "Value Executed" },
                { value: "100%", label: "Completed On Time" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-4xl font-700 text-gold mb-2">{stat.value}</div>
                  <div className="font-sans text-sm text-stone-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
