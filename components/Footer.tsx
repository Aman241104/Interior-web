import Link from "next/link";
import { company, navLinks } from "@/lib/data";
import NewsletterForm from "@/components/ui/NewsletterForm";

const serviceLinks = [
  { label: "Residential Design", href: "/services#residential" },
  { label: "Commercial Spaces", href: "/services#commercial" },
  { label: "Medical Facilities", href: "/services#medical" },
  { label: "Turnkey Packages", href: "/services#turnkey" },
  { label: "Cost Calculator", href: "/calculator" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: company.social.instagram,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: company.social.linkedin,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: company.social.youtube,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column — 4 cols */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex flex-col leading-none mb-6">
              <span className="font-serif text-3xl font-600 text-cream tracking-tight">Styluxe</span>
              <span className="font-sans text-[10px] font-700 tracking-[0.2em] uppercase text-gold">Interior Decor</span>
            </Link>
            <p className="font-serif text-lg italic text-stone-400 leading-snug mb-4">
              "Crafting Spaces<br />That Define You"
            </p>
            <p className="font-sans text-sm text-stone-500 leading-relaxed mb-6">
              Premium turnkey interior design in Ahmedabad since 2013.
              Residential · Commercial · Medical.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-dark-700 flex items-center justify-center text-stone-500 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation — 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-700 tracking-[0.18em] uppercase text-gold mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-stone-400 hover:text-cream hover-underline transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-700 tracking-[0.18em] uppercase text-gold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-stone-400 hover:text-cream hover-underline transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter — 4 cols */}
          <div className="lg:col-span-4">
            <h4 className="font-sans text-xs font-700 tracking-[0.18em] uppercase text-gold mb-6">Get in Touch</h4>
            <address className="not-italic flex flex-col gap-4 mb-8">
              <div>
                <p className="font-sans text-xs text-stone-600 uppercase tracking-wider mb-1">Address</p>
                <p className="font-sans text-sm text-stone-400 leading-relaxed">
                  {company.address.line1},<br />
                  {company.address.line2},<br />
                  {company.address.city},<br />
                  {company.address.state} {company.address.pincode}
                </p>
              </div>
              <div>
                <p className="font-sans text-xs text-stone-600 uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${company.email}`} className="font-sans text-sm text-stone-400 hover:text-gold transition-colors duration-200">
                  {company.email}
                </a>
              </div>
            </address>

            {/* Newsletter */}
            <div className="border-t border-dark-700 pt-6">
              <h4 className="font-sans text-xs font-700 tracking-[0.18em] uppercase text-gold mb-2">Design Insights</h4>
              <p className="font-sans text-xs text-stone-500 mb-3">Monthly design tips, project reveals, and Ahmedabad trends.</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="h-px bg-dark-700 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-stone-600">
            © {new Date().getFullYear()} Styluxe Interior Decor. All rights reserved.
            Founded {company.founded} by {company.founder}.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs text-stone-700">Paldi, Ahmedabad, Gujarat</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-sans text-xs text-stone-600">CCTV Monitored Worksites</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
