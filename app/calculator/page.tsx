import { Metadata } from 'next'
import CalculatorClient from '@/components/CalculatorClient'

export const metadata: Metadata = {
  title: 'Interior Design Cost Calculator | Estimate Your Budget',
  description: 'Get an instant estimate for your interior design project in Ahmedabad. Calculate costs for residential and commercial spaces with Styluxe Interior Decor.',
  keywords: ['interior design cost calculator', 'interior design budget Ahmedabad', 'turnkey interior cost estimate', 'home interior price calculator India'],
  openGraph: {
    title: 'Interior Design Cost Calculator | Styluxe',
    description: 'Estimate your interior design project cost instantly. Residential and commercial packages starting at ₹800/sqft.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Cost Calculator',
    description: 'Estimate your interior design project cost instantly.',
  },
}

export default function CalculatorPage() {
  return <CalculatorClient />
}
