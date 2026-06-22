import { Metadata } from 'next'
import AboutClient from '@/components/AboutClient'

export const metadata: Metadata = {
  title: 'About Styluxe | Akash Modi — IEA 2025 Award-Winning Interior Designer',
  description: 'Meet Akash N. Modi — founder & principal designer of Styluxe Interior Decor. 13+ years, 27+ projects, IEA 2025 winner. Ahmedabad\'s most trusted turnkey interior design firm.',
  keywords: ['Akash Modi interior designer Ahmedabad', 'Styluxe Interior Decor founder', 'best interior design firm Ahmedabad', 'IEA award interior design Gujarat', 'IIID member Ahmedabad', 'interior design company Paldi'],
  alternates: { canonical: 'https://www.sidecor.in/about' },
  openGraph: {
    title: 'About Styluxe Interior Decor | Akash Modi',
    description: 'Meet Akash Modi and the team behind Ahmedabad\'s most trusted turnkey interior design firm. IEA 2025 winners. 13+ years of crafting extraordinary spaces.',
    type: 'website',
    url: 'https://www.sidecor.in/about',
    images: [{ url: '/images/award-iea-2025.jpg', width: 1200, height: 630, alt: 'Styluxe Interior Decor — IEA 2025 Award' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Styluxe Interior Decor | Akash Modi',
    description: 'Meet Akash Modi, IEA 2025 award-winning interior designer. 13+ years of premium interior design in Ahmedabad.',
    images: ['/images/award-iea-2025.jpg'],
  },
}

export default function AboutPage() {
  return <AboutClient />
}
