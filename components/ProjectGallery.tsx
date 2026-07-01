"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Disable background scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, images.length]);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-stone-200">
      <div className="mb-8">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-2">Portfolio Gallery</span>
        <h2 className="text-2xl md:text-3xl font-serif font-light text-dark leading-tight">Visual Showcase</h2>
      </div>

      {/* Editorial Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, idx) => (
          <div
            key={image}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-200 hover:border-gold/40 hover:shadow-2xl cursor-pointer transition-all duration-500 bg-stone-100"
          >
            <Image
              src={image}
              alt={`${title} Showcase ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex flex-col items-center">
                <span className="bg-gold text-dark p-3 rounded-full mb-2 shadow-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <span className="text-xs font-semibold tracking-widest text-cream uppercase">
                  Expand View
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-dark/95 z-[999] flex items-center justify-center p-4 md:p-8 transition-opacity duration-300"
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-stone-400 hover:text-gold transition-colors p-2 z-[1000] focus:outline-none"
            aria-label="Close Lightbox"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 text-stone-400 hover:text-gold transition-colors bg-dark/50 hover:bg-dark/80 p-3 rounded-full border border-stone-700/50 z-[1000] focus:outline-none"
                aria-label="Previous Image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 text-stone-400 hover:text-gold transition-colors bg-dark/50 hover:bg-dark/80 p-3 rounded-full border border-stone-700/50 z-[1000] focus:outline-none"
                aria-label="Next Image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Active Image Containment */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] flex flex-col items-center justify-center select-none"
          >
            <div className="relative w-full h-full">
              <Image
                src={images[activeIndex]}
                alt={`${title} Expanded view`}
                fill
                className="object-contain transition-all duration-300"
                sizes="100vw"
                priority
              />
            </div>
            
            {/* Caption / Image indicator */}
            <div className="text-center mt-4">
              <p className="text-sm font-sans text-stone-400">
                {title} — View {activeIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
