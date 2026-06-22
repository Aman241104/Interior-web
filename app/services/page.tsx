import { Metadata } from 'next'
import ServicesClient from '@/components/ServicesClient'

export const metadata: Metadata = {
  title: 'Interior Design Services Ahmedabad | Residential, Commercial & Healthcare',
  description: 'Turnkey interior design services in Ahmedabad — residential apartments & bungalows, corporate offices, healthcare facilities, modular kitchens. Packages from ₹800/sqft. Delivered in under 90 days.',
  keywords: ['interior design services Ahmedabad', 'residential interior design Ahmedabad', 'commercial interior design Gujarat', 'turnkey interior packages', 'modular kitchen Ahmedabad', 'false ceiling design', 'hospital interior design Gujarat', 'office interior fit-out Ahmedabad'],
  alternates: { canonical: 'https://www.sidecor.in/services' },
  openGraph: {
    title: 'Interior Design Services Ahmedabad | Styluxe Interior Decor',
    description: 'Residential, commercial & healthcare interior design. Transparent packages from ₹800/sqft. Delivered under 90 days.',
    type: 'website',
    url: 'https://www.sidecor.in/services',
    images: [{ url: '/images/award-iea-2025.jpg', width: 1200, height: 630, alt: 'Styluxe Interior Design Services Ahmedabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Services Ahmedabad',
    description: 'Residential, commercial & healthcare interior design. Packages from ₹800/sqft.',
    images: ['/images/award-iea-2025.jpg'],
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}
