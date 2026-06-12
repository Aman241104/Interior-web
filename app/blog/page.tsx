import { Metadata } from 'next'
import BlogClient from '@/components/BlogClient'

export const metadata: Metadata = {
  title: 'Interior Design Blog | Tips, Trends & Guides',
  description: 'Expert interior design insights from Styluxe Interior Decor. Trends, renovation tips, Vastu guidance, material guides, and more from 13+ years of experience in Ahmedabad.',
  keywords: ['interior design blog India', 'interior design tips Ahmedabad', 'home renovation guide', 'Vastu interior design', 'modular kitchen guide', 'false ceiling designs'],
  openGraph: {
    title: 'Interior Design Blog | Styluxe Interior Decor',
    description: 'Expert insights on interior design, renovation, Vastu, and materials. Written by Ahmedabad\'s top interior designers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Blog',
    description: 'Expert interior design insights from Styluxe Interior Decor.',
  },
}

export default function BlogPage() {
  return <BlogClient />
}
