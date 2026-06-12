"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SectionLabel from "@/components/ui/SectionLabel";
import { blogPosts } from "@/lib/data";

gsap.registerPlugin();

const categories = ["All", "Trends", "Guide", "Kitchens", "Advice", "Design", "Commercial", "Vastu", "Budget", "Healthcare", "Technology"];

export default function BlogPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useGSAP(() => {
    if (!heroRef.current) return;
    gsap.fromTo(
      ".blog-hero-text",
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    );
    gsap.fromTo(
      ".blog-post-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.6,
      }
    );
  }, { scope: heroRef });

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <div ref={heroRef} className="pt-32 pb-0 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-16">
          <div className="blog-hero-text">
            <SectionLabel text="Our Blog" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mt-6">
            <h1 className="blog-hero-text font-serif text-[clamp(3rem,5vw,6rem)] font-300 leading-[0.92] tracking-tight text-dark">
              Design{" "}
              <span className="italic font-600 text-gold">wisdom</span>
              <br />& inspiration.
            </h1>
            <p className="blog-hero-text font-sans text-lg text-stone-500 leading-relaxed max-w-lg">
              Expert insights on interior design, renovation tips, Vastu, material choices,
              and everything that helps you make better decisions for your space.
            </p>
          </div>
        </div>

        {/* Featured Post */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-0">
          <div className="blog-hero-text">
            {blogPosts[0] && (
              <div className="group cursor-pointer rounded-2xl overflow-hidden relative h-[400px] lg:h-[500px] border border-stone-200 hover:border-gold/40 transition-all duration-400 shadow-sm hover:shadow-xl">
                {/* TODO: Replace with real blog cover image */}
                <div className={`absolute inset-0 ${blogPosts[0].bgClass} img-placeholder transition-transform duration-700 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="font-sans text-xs font-700 tracking-wider uppercase bg-gold text-dark px-3 py-1.5 rounded-full">
                    {blogPosts[0].category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-sm text-cream/60">{blogPosts[0].date}</span>
                    <span className="text-cream/30">·</span>
                    <span className="font-sans text-sm text-cream/60">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl lg:text-4xl font-600 text-cream leading-tight mb-3 max-w-3xl">
                    {blogPosts[0].title}
                  </h2>
                  <p className="font-sans text-sm text-cream/70 leading-relaxed max-w-2xl hidden lg:block">
                    {blogPosts[0].excerpt}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-cream sticky top-[72px] z-30 border-b border-stone-200 shadow-sm mt-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-sm font-600 tracking-wide px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeCategory === cat
                    ? "bg-dark text-cream"
                    : "bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <article
                key={post.id}
                className="blog-post-card group cursor-pointer rounded-2xl overflow-hidden border border-stone-200 hover:border-gold/40 hover:shadow-lg transition-all duration-400 bg-cream"
              >
                {/* Image */}
                {/* TODO: Replace with real blog cover images */}
                <div className={`relative h-48 overflow-hidden ${post.bgClass} img-placeholder`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-inherit" />
                  <div className="absolute top-3 left-3">
                    <span className="font-sans text-xs font-700 tracking-wider uppercase bg-gold text-dark px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-xs text-stone-400">{post.date}</span>
                    <span className="text-stone-300">·</span>
                    <span className="font-sans text-xs text-stone-400">{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl font-600 text-dark leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-gold font-sans text-sm font-600">
                    <span>Read Article</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-stone-300 italic">No articles in this category yet.</p>
            </div>
          )}

          {/* SEO Footer */}
          <div className="mt-16 pt-12 border-t border-stone-200">
            <p className="font-sans text-sm text-stone-400 leading-relaxed max-w-3xl">
              The Styluxe blog covers interior design trends in Ahmedabad, practical guides for
              homeowners and business owners, and insights from 13+ years of turnkey design execution.
              Articles are written by our design team and updated regularly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
