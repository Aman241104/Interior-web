import { MetadataRoute } from 'next'
import { blogPosts, projects } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.sidecor.in'

  const staticPriorities: Record<string, number> = {
    '': 1.0,
    '/services': 0.9,
    '/projects': 0.9,
    '/contact': 0.9,
    '/calculator': 0.8,
    '/about': 0.8,
    '/blog': 0.7,
  }

  const staticRoutes = ['', '/about', '/services', '/projects', '/blog', '/calculator', '/contact'].map(route => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' || route === '/projects' ? 'weekly' : 'monthly') as "weekly" | "monthly",
    priority: staticPriorities[route] ?? 0.8,
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
