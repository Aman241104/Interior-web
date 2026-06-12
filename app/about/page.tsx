import { Metadata } from 'next'
import AboutClient from '@/components/AboutClient'

export const metadata: Metadata = {
  title: 'About Us | Akash Modi & Team',
  description: 'Meet Akash Modi, founder of Styluxe Interior Decor. 13+ years transforming residential and commercial spaces in Ahmedabad with premium turnkey interior design.',
  keywords: ['interior designer Ahmedabad', 'Akash Modi interior designer', 'premium interior design company Gujarat', 'Styluxe Interior Decor about'],
  openGraph: {
    title: 'About Styluxe Interior Decor',
    description: 'Meet Akash Modi and the team behind Ahmedabad\'s most trusted turnkey interior design firm. 13+ years of crafting extraordinary spaces.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Styluxe Interior Decor',
    description: 'Meet Akash Modi, founder of Styluxe Interior Decor. 13+ years of premium interior design in Ahmedabad.',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
