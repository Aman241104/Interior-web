import { MetadataRoute } from 'next'
import { blogPosts, projects } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.styluxeinterior.com'

  const staticRoutes = ['', '/about', '/services', '/projects', '/blog', '/calculator', '/contact'].map(route => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogRoutes = blogPosts.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  const projectRoutes = projects.map(project => ({
    url: `${base}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
