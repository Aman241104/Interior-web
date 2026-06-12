import Link from "next/link";
import { company, navLinks } from "@/lib/data";

export default function Footer() {
  const serviceLinks = [
    { label: "Residential Design", href: "/services#residential" },
    { label: "Commercial Spaces", href: "/services#commercial" },
    { label: "Medical Facilities", href: "/services#medical" },
    { label: "Turnkey Packages", href: "/services#turnkey" },
    { label: "Cost Calculator", href: "/calculator" },
  ];

  return (
    <footer className="bg-dark text-cream">
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-6">
              <span className="font-serif text-3xl font-600 text-cream tracking-tight">
                Styluxe
              </span>
              <span className="font-sans text-[10px] font-700 tracking-[0.2em] uppercase text-gold">
                Interior Decor
              </span>
            </Link>
            <p className="font-serif text-lg italic text-stone-400 leading-snug mb-6">
              "Crafting Spaces<br />That Define You"
            </p>
            <p className="font-sans text-sm text-stone-500 leading-relaxed">
              Premium turnkey interior design in Ahmedabad since 2013.
              Residential · Commercial · Medical.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs font-700 tracking-[0.18em] uppercase text-gold mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-stone-400 hover:text-cream hover-underline transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs font-700 tracking-[0.18em] uppercase text-gold mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-stone-400 hover:text-cream hover-underline transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-700 tracking-[0.18em] uppercase text-gold mb-6">
              Get in Touch
            </h4>
            <address className="not-italic flex flex-col gap-4">
              <div>
                <p className="font-sans text-xs text-stone-600 uppercase tracking-wider mb-1">
                  Address
                </p>
                <p className="font-sans text-sm text-stone-400 leading-relaxed">
                  {company.address.line1},<br />
                  {company.address.line2},<br />
                  {company.address.city},<br />
                  {company.address.state} {company.address.pincode}
                </p>
              </div>
              <div>
                <p className="font-sans text-xs text-stone-600 uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="font-sans text-sm text-stone-400 hover:text-gold transition-colors duration-200"
                >
                  {company.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-dark-700 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-stone-600">
            © {new Date().getFullYear()} Styluxe Interior Decor. All rights reserved.
            Founded {company.founded} by {company.founder}.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs text-stone-700">
              Paldi, Ahmedabad, Gujarat
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="font-sans text-xs text-stone-600">
                CCTV Monitored Worksites
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
