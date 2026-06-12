export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesigner',
    name: 'Styluxe Interior Decor',
    description: 'Premium turnkey interior design services in Ahmedabad',
    url: 'https://www.styluxeinterior.com',
    telephone: '+91-99999-00000',
    email: 'akashmodi@ymail.com',
    foundingDate: '2013',
    founder: { '@type': 'Person', name: 'Akash Modi' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '01, Murlidhar Complex, Nr. Fathepura Cross Road',
      addressLocality: 'Paldi, Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380007',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 23.0087, longitude: 72.5681 },
    openingHours: 'Mo-Sa 10:00-19:00',
    priceRange: '₹₹₹',
    areaServed: ['Ahmedabad', 'Gujarat', 'India'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interior Design Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Interior Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Interior Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical Facility Design' } },
      ],
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '27' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
