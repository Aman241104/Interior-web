import { Metadata } from 'next'
import BlogClient from '@/components/BlogClient'

export const metadata: Metadata = {
  title: 'Interior Design Blog | Trends, Tips & Guides — Styluxe Ahmedabad',
  description: 'Interior design tips, trends & guides from Ahmedabad\'s award-winning designers. Vastu tips, modular kitchen ideas, false ceiling designs, renovation guides & more.',
  keywords: ['interior design blog India', 'interior design tips Ahmedabad', 'home renovation guide Gujarat', 'Vastu interior design tips', 'modular kitchen ideas India', 'false ceiling design ideas', 'interior design trends 2025'],
  alternates: { canonical: 'https://www.sidecor.in/blog' },
  openGraph: {
    title: 'Interior Design Blog | Styluxe Ahmedabad',
    description: 'Expert tips on interior design, Vastu, modular kitchens & renovation from Ahmedabad\'s IEA 2025 award-winning designers.',
    type: 'website',
    url: 'https://www.sidecor.in/blog',
    images: [{ url: '/images/award-iea-2025.jpg', width: 1200, height: 630, alt: 'Styluxe Interior Design Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Blog | Styluxe Ahmedabad',
    description: 'Expert interior design tips, Vastu guidance & renovation ideas from Ahmedabad\'s top designers.',
    images: ['/images/award-iea-2025.jpg'],
  },
}

export default function BlogPage() {
  return <BlogClient />
}
