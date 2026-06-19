"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { navLinks } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll listener for nav background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Nav entrance animation
  useGSAP(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    );
  }, { scope: navRef });

  const isHome = pathname === "/";

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-stone-200/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-22">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/logo-light.png"
                alt="Styluxe Interior Decor"
                width={200}
                height={80}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, -1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-sm font-500 tracking-wide hover-underline transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-gold"
                      : scrolled || !isHome
                      ? "text-dark hover:text-gold"
                      : "text-dark hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 bg-dark text-cream font-sans text-sm font-600 tracking-wide px-6 py-3 rounded-full hover:bg-gold transition-colors duration-300"
              >
                Get a Quote
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-0.5 w-6 bg-dark transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-dark transition-all duration-300 ${
                    mobileOpen ? "opacity-0 w-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-dark transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 w-[min(100%,20rem)] h-full bg-cream flex flex-col pt-20 pb-10 px-6 sm:px-8 shadow-2xl transition-transform duration-500 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif text-2xl sm:text-3xl font-400 py-3 border-b border-stone-200 hover:text-gold transition-colors duration-200 ${
                  pathname === link.href ? "text-gold" : "text-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-dark text-cream font-sans text-sm font-600 tracking-wide px-6 py-3.5 rounded-full hover:bg-gold transition-colors duration-300 w-full"
            >
              Get a Free Quote
            </Link>
          </div>

          <div className="mt-auto">
            <div className="h-px w-full bg-stone-200 mb-5" />
            <p className="font-sans text-xs text-stone-500 leading-relaxed">
              Crafting Spaces That Define You
            </p>
            <p className="font-sans text-xs text-stone-400 mt-1">
              Ahmedabad, Gujarat
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
