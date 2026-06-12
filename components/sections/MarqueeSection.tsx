"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { marqueeItems } from "@/lib/data";

export default function MarqueeSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate for seamless loop
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  useGSAP(() => {
    if (!trackRef.current) return;

    const totalWidth = trackRef.current.scrollWidth / 3;

    gsap.to(trackRef.current, {
      x: `-${totalWidth}px`,
      duration: 30,
      ease: "linear",
      repeat: -1,
    });
  }, { scope: trackRef });

  return (
    <div className="bg-gold overflow-hidden py-4 border-y border-gold-dark">
      <div ref={trackRef} className="marquee-track flex items-center gap-0 whitespace-nowrap will-change-transform">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-sans text-sm font-700 tracking-[0.12em] uppercase text-dark/90 px-6">
              {item}
            </span>
            <span className="text-dark/40 font-sans text-lg">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
