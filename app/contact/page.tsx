import { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'
import { company } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact Styluxe | Book a Free Interior Design Consultation Ahmedabad',
  description: 'Book a free consultation with Styluxe Interior Decor, Ahmedabad. Call +91 94292 23647 or WhatsApp us. We respond within 24 hours. Paldi, Ahmedabad.',
  keywords: ['contact interior designer Ahmedabad', 'book interior design consultation Ahmedabad', 'free interior design quote Gujarat', 'interior designer Paldi Ahmedabad', 'Styluxe contact'],
  alternates: { canonical: 'https://www.sidecor.in/contact' },
  openGraph: {
    title: 'Contact Styluxe Interior Decor | Free Consultation',
    description: 'Book a free consultation. We respond within 24 hours. Call or WhatsApp +91 94292 23647.',
    type: 'website',
    url: 'https://www.sidecor.in/contact',
    images: [{ url: '/images/award-iea-2025.jpg', width: 1200, height: 630, alt: 'Contact Styluxe Interior Decor Ahmedabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Styluxe Interior Decor',
    description: 'Book a free interior design consultation. Call +91 94292 23647.',
    images: ['/images/award-iea-2025.jpg'],
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  "@id": "https://www.sidecor.in/#business",
  name: company.name,
  description: "Award-winning turnkey interior design for residential and commercial projects in Ahmedabad. IEA 2025 winners. Delivered in under 90 days.",
  url: "https://www.sidecor.in",
  telephone: company.phone,
  email: company.email,
  foundingDate: String(company.founded),
  founder: { "@type": "Person", name: company.founder, jobTitle: "Founder & Principal Designer" },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: company.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.0087,
    longitude: 72.5681,
  },
  hasMap: "https://maps.google.com/?q=Styluxe+Interior+Decor+Paldi+Ahmedabad",
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "27",
    bestRating: "5",
  },
  award: "International Excellence Awards 2025",
  sameAs: [
    company.social.instagram,
    company.social.linkedin,
    company.social.youtube,
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ContactClient />
    </>
  );
}
