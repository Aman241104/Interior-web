import { company } from '@/lib/data'

export default function JsonLd() {
  const interiorDesignerSchema = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesigner',
    '@id': 'https://www.sidecor.in/#interiordesigner',
    name: company.name,
    description: 'Award-winning turnkey interior design in Ahmedabad. IEA 2025 winners. Residential, commercial & healthcare spaces delivered in under 90 days.',
    url: 'https://www.sidecor.in',
    telephone: company.phone,
    email: company.email,
    foundingDate: String(company.founded),
    founder: {
      '@type': 'Person',
      '@id': 'https://www.sidecor.in/#founder',
      name: company.founder,
      jobTitle: 'Founder & Principal Designer',
      worksFor: { '@type': 'Organization', name: company.name },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: company.address.pincode,
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 23.0087, longitude: 72.5681 },
    openingHours: 'Mo-Sa 10:00-19:00',
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    areaServed: ['Ahmedabad', 'Gujarat', 'India'],
    award: 'International Excellence Awards 2025',
    image: 'https://www.sidecor.in/images/award-iea-2025.jpg',
    sameAs: [
      company.social.instagram,
      company.social.linkedin,
      company.social.youtube,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interior Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Interior Design',
            description: 'Full turnkey interior design for apartments, bungalows, and farmhouses in Ahmedabad.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Interior Design',
            description: 'Corporate offices, industrial facilities, and retail spaces designed for productivity and brand identity.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Healthcare Facility Design',
            description: 'Infection-control compliant interiors for hospitals, clinics, and medical facilities.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Turnkey Interior Packages',
            description: 'Complete design-to-handover packages from Essential to Luxury, delivered in under 90 days.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: String(company.stats.total),
      bestRating: '5',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.sidecor.in/#website',
    name: company.name,
    url: 'https://www.sidecor.in',
    description: 'Award-winning turnkey interior design in Ahmedabad.',
    publisher: { '@id': 'https://www.sidecor.in/#organization' },
    inLanguage: 'en-IN',
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.sidecor.in/#organization',
    name: company.name,
    url: 'https://www.sidecor.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.sidecor.in/logo/logo-light.png',
      width: 200,
      height: 80,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.phone,
      email: company.email,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
    foundingDate: String(company.founded),
    founder: { '@type': 'Person', name: company.founder },
    numberOfEmployees: { '@type': 'QuantitativeValue', value: company.stats.team },
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: company.address.pincode,
      addressCountry: 'IN',
    },
    sameAs: [
      company.social.instagram,
      company.social.linkedin,
      company.social.youtube,
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(interiorDesignerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  )
}
