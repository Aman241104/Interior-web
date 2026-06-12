import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/data'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Styluxe Interior Decor Blog`,
    description: post.excerpt,
    keywords: [post.category, 'interior design', 'Ahmedabad', ...post.title.toLowerCase().split(' ').slice(0, 5)],
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) notFound()

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3)
  const otherPosts = relatedPosts.length < 3 ? [...relatedPosts, ...blogPosts.filter(p => p.slug !== post.slug && !relatedPosts.includes(p)).slice(0, 3 - relatedPosts.length)] : relatedPosts

  return (
    <main className="min-h-screen bg-cream pt-[76px]">
      {/* Hero */}
      <div className={`w-full h-[50vh] min-h-[400px] ${post.bgClass} relative flex items-end`}>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
        <div className="relative z-10 px-6 md:px-16 pb-12 max-w-5xl mx-auto w-full">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold uppercase mb-3 bg-dark/50 px-3 py-1 rounded-sm">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-serif font-light text-cream leading-tight max-w-3xl">{post.title}</h1>
          <div className="flex items-center gap-4 mt-4 text-stone-400 text-sm">
            <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>By Akash Modi</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xl text-stone-600 font-light leading-relaxed mb-10 border-l-4 border-gold pl-6 italic">{post.excerpt}</p>
        {post.content ? (
          <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:font-light prose-headings:text-dark prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-stone-600 prose-p:leading-relaxed prose-p:mb-5 prose-ul:text-stone-600 prose-li:mb-2 prose-strong:text-dark" dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <p className="text-stone-500 italic">Full article coming soon.</p>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-dark rounded-sm text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-3">Ready to Transform Your Space?</p>
          <h3 className="text-2xl font-serif text-cream mb-4">Get a Free Consultation</h3>
          <p className="text-stone-400 text-sm mb-6">Talk to our design team about your project — no obligation, no cost.</p>
          <Link href="/contact" className="inline-block bg-gold text-dark px-8 py-3 text-sm font-semibold tracking-wider hover:opacity-90 transition-opacity">
            Book Consultation
          </Link>
        </div>

        {/* Back + related */}
        <div className="mt-12 pt-12 border-t border-stone-200">
          <Link href="/blog" className="text-gold text-sm hover:underline">← Back to all articles</Link>
          {otherPosts.length > 0 && (
            <div className="mt-10">
              <h4 className="text-sm font-semibold tracking-widest uppercase text-stone-500 mb-6">More Articles</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherPosts.map(p => (
                  <Link key={p.id} href={`/blog/${p.slug}`} className="group">
                    <div className={`h-32 ${p.bgClass} rounded-sm mb-3`} />
                    <span className="text-xs text-gold tracking-wider uppercase">{p.category}</span>
                    <p className="text-sm font-medium text-dark mt-1 group-hover:text-gold transition-colors leading-snug">{p.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
