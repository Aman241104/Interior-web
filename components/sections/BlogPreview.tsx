"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { blogPosts } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".blog-card",
      { y: 50, opacity: 0 },
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

  const previewPosts = blogPosts.slice(0, 4);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <SectionLabel text="From Our Blog" />
            <h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] font-300 text-dark leading-tight mt-6">
              Design insights &{" "}
              <span className="italic font-600 text-gold">inspiration.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-dark font-sans text-sm font-600 tracking-wide hover:text-gold transition-colors duration-200 group self-start lg:self-auto"
          >
            All 10 Articles
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewPosts.map((post, i) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className={`blog-card group rounded-2xl overflow-hidden border border-stone-200 hover:border-gold/40 hover:shadow-lg transition-all duration-400 bg-cream ${
                i === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${i === 0 ? "h-44 md:h-52" : "h-36 md:h-44"} ${post.bgClass}`}>
                {(post as any).imageSrc && (
                  <Image
                    src={(post as any).imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                <div className="absolute top-3 left-3 z-10">
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
                <h3 className="font-serif text-lg font-600 text-dark leading-snug mb-2 group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h3>
                {i === 0 && (
                  <p className="font-sans text-sm text-stone-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
