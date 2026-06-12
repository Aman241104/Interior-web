import { Metadata } from 'next'
import ServicesClient from '@/components/ServicesClient'

export const metadata: Metadata = {
  title: 'Interior Design Services | Residential, Commercial & Healthcare',
  description: 'Explore Styluxe Interior Decor\'s full range of services: residential design, commercial fit-outs, medical facility interiors, and turnkey packages in Ahmedabad.',
  keywords: ['interior design services Ahmedabad', 'residential interior design', 'commercial interior design Gujarat', 'turnkey interior packages', 'modular kitchen Ahmedabad'],
  openGraph: {
    title: 'Interior Design Services | Styluxe Interior Decor',
    description: 'Residential, commercial, and healthcare interior design. Transparent packages starting at ₹800/sqft. Delivered in under 90 days.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Services',
    description: 'Residential, commercial, and healthcare interior design in Ahmedabad.',
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}
