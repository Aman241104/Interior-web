import { Metadata } from 'next'
import ProjectsClient from '@/components/ProjectsClient'

export const metadata: Metadata = {
  title: 'Interior Design Portfolio Ahmedabad | 27+ Completed Projects',
  description: 'Explore Styluxe\'s portfolio of 27+ completed interior design projects in Ahmedabad — luxury residences, corporate offices, hospitals, farmhouses & industrial facilities.',
  keywords: ['interior design portfolio Ahmedabad', 'luxury home interior Gujarat', 'best interior design projects India', 'corporate office interior Ahmedabad', 'hospital interior design', 'farmhouse interior design Gujarat'],
  alternates: { canonical: 'https://www.sidecor.in/projects' },
  openGraph: {
    title: 'Interior Design Portfolio | Styluxe — 27+ Projects Ahmedabad',
    description: '27+ completed projects across residential, commercial & healthcare sectors. Browse our work.',
    type: 'website',
    url: 'https://www.sidecor.in/projects',
    images: [{ url: '/images/award-iea-2025.jpg', width: 1200, height: 630, alt: 'Styluxe Interior Design Portfolio Ahmedabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Portfolio | Styluxe Ahmedabad',
    description: '27+ completed projects. Residential, commercial & healthcare interior design.',
    images: ['/images/award-iea-2025.jpg'],
  },
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
