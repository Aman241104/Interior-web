import { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | Book a Free Consultation',
  description: 'Get in touch with Styluxe Interior Decor. Book a free consultation for your interior design project in Ahmedabad. We respond within 24 hours.',
  keywords: ['contact interior designer Ahmedabad', 'book interior design consultation', 'free interior design quote Ahmedabad', 'Styluxe contact'],
  openGraph: {
    title: 'Contact Styluxe Interior Decor',
    description: 'Book a free consultation for your interior design project. We respond within 24 hours.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Styluxe Interior Decor',
    description: 'Book a free interior design consultation. We respond within 24 hours.',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
