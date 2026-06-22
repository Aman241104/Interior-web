import { Metadata } from 'next'
import CalculatorClient from '@/components/CalculatorClient'

export const metadata: Metadata = {
  title: 'Interior Design Cost Calculator Ahmedabad | Free Budget Estimate',
  description: 'Get a free instant estimate for your interior design project. Calculate 2BHK, 3BHK & 4BHK costs for Ahmedabad homes. Styluxe Interior Decor — packages from ₹800/sqft.',
  keywords: ['interior design cost calculator India', 'home interior design budget Ahmedabad', '2BHK interior cost estimate', '3BHK interior price calculator', 'turnkey interior cost Ahmedabad', 'modular kitchen cost calculator'],
  alternates: { canonical: 'https://www.sidecor.in/calculator' },
  openGraph: {
    title: 'Free Interior Design Cost Calculator | Styluxe Ahmedabad',
    description: 'Instantly estimate your 2BHK, 3BHK or 4BHK interior design cost. Packages from ₹800/sqft.',
    type: 'website',
    url: 'https://www.sidecor.in/calculator',
    images: [{ url: '/images/award-iea-2025.jpg', width: 1200, height: 630, alt: 'Interior Design Cost Calculator Ahmedabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Interior Design Cost Calculator | Styluxe',
    description: 'Instantly estimate your interior design project cost. Packages from ₹800/sqft.',
    images: ['/images/award-iea-2025.jpg'],
  },
}

export default function CalculatorPage() {
  return <CalculatorClient />
}
