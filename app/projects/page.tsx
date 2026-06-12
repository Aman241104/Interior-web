import { Metadata } from 'next'
import ProjectsClient from '@/components/ProjectsClient'

export const metadata: Metadata = {
  title: 'Interior Design Portfolio | 27+ Projects in Ahmedabad',
  description: 'Browse Styluxe Interior Decor\'s portfolio of 27+ completed projects — luxury residences, corporate offices, hospitals, and industrial facilities across Ahmedabad.',
  keywords: ['interior design portfolio Ahmedabad', 'luxury interior projects Gujarat', 'best interior design projects India', 'Styluxe projects'],
  openGraph: {
    title: 'Interior Design Portfolio | Styluxe Interior Decor',
    description: '27+ completed projects across residential and commercial sectors in Ahmedabad. One standard of excellence.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Portfolio',
    description: '27+ completed projects across Ahmedabad. Residential, commercial, and healthcare.',
  },
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
