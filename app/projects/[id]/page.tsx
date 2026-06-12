import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/data'

type Props = { params: { id: string } }

export async function generateStaticParams() {
  return projects.map(p => ({ id: String(p.id) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => String(p.id) === params.id)
  if (!project) return {}
  return {
    title: `${project.title} | Styluxe Interior Projects`,
    description: project.description,
    openGraph: { title: project.title, description: project.description, type: 'website' },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => String(p.id) === params.id)
  if (!project) notFound()

  const relatedProjects = projects.filter(p => p.id !== project.id && p.type === project.type).slice(0, 3)

  return (
    <main className="min-h-screen bg-cream pt-[76px]">
      {/* Hero */}
      <div className={`w-full h-[60vh] min-h-[480px] ${project.bgClass} relative`}>
        {(project as any).imageSrc && (
          <Image src={(project as any).imageSrc} alt={project.title} fill className="object-cover" sizes="100vw" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-12 max-w-6xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase bg-dark/50 px-3 py-1 rounded-sm">{project.type} · {project.subtype}</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-cream mt-3 leading-tight">{project.title}</h1>
          <p className="text-stone-300 text-sm mt-3">{project.location} · {project.area} · {project.year}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xl text-stone-600 font-light leading-relaxed mb-10">{project.description}</p>
            {project.challenge && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">The Challenge</h2>
                <p className="text-stone-600 leading-relaxed">{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">Our Approach</h2>
                <p className="text-stone-600 leading-relaxed">{project.solution}</p>
              </div>
            )}
            {project.highlights && (
              <div>
                <h2 className="text-sm font-semibold tracking-widest uppercase text-gold mb-4">Project Highlights</h2>
                <ul className="space-y-2">
                  {project.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-stone-600">
                      <span className="text-gold mt-1">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <div className="bg-dark p-6 rounded-sm text-cream">
              <h3 className="text-xs tracking-widest uppercase text-gold mb-5">Project Details</h3>
              {[
                ['Type', project.type],
                ['Category', project.subtype],
                ['Location', project.location],
                ['Area', project.area],
                ['Year', String(project.year)],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-3 border-b border-stone-700 text-sm">
                  <span className="text-stone-400">{label}</span>
                  <span className="capitalize font-medium">{value}</span>
                </div>
              ))}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags?.map((tag: string) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-stone-800 text-stone-400 rounded-sm">{tag}</span>
                ))}
              </div>
              <Link href="/contact" className="block w-full text-center bg-gold text-dark py-3 mt-6 text-sm font-semibold tracking-wider hover:opacity-90 transition-opacity">
                Start Similar Project
              </Link>
            </div>
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <div className="mt-20 pt-12 border-t border-stone-200">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-stone-500 mb-8">More {project.type} Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProjects.map(p => (
                <Link key={p.id} href={`/projects/${p.id}`} className="group">
                  <div className={`h-48 ${p.bgClass} rounded-sm mb-3 overflow-hidden relative`}>
                    {(p as any).imageSrc && <Image src={(p as any).imageSrc} alt={p.title} fill className="object-cover" sizes="33vw" />}
                    <div className="w-full h-full bg-gradient-to-t from-dark/60 to-transparent flex items-end p-4">
                      <div>
                        <span className="text-xs text-gold">{p.subtype}</span>
                        <p className="text-cream font-serif font-light group-hover:text-gold transition-colors">{p.title}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link href="/projects" className="text-gold text-sm hover:underline">← Back to all projects</Link>
        </div>
      </div>
    </main>
  )
}
