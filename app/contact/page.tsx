import { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'
import { company } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact Us | Book a Free Consultation',
  description: 'Get in touch with Styluxe Interior Decor. Book a free consultation for your interior design project in Ahmedabad. We respond within 24 hours.',
  keywords: ['contact interior designer Ahmedabad', 'book interior design consultation', 'free interior design quote Ahmedabad', 'Styluxe contact'],
  openGraph: {
    title: 'Contact Styluxe Interior Decor',
    description: 'Book a free consultation for your interior design project. We respond within 24 hours.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Styluxe Interior Decor',
    description: 'Book a free interior design consultation. We respond within 24 hours.',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.styluxeinterior.com/#business",
  name: company.name,
  description: "Premium turnkey interior design for residential and commercial projects in Ahmedabad. Delivered in under 90 days.",
  url: "https://www.styluxeinterior.com",
  telephone: company.phone,
  email: company.email,
  foundingDate: String(company.founded),
  founder: { "@type": "Person", name: company.founder },
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
    latitude: 23.0225,
    longitude: 72.5714,
  },
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
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
  sameAs: [],
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
