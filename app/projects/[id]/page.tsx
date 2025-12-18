import { projects } from '@/content/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, Building2 } from 'lucide-react'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.category} project hero image`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-custom section-padding pb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/90">
            <span className="inline-flex items-center gap-2">
              <span className="px-3 py-1 bg-dark-900 rounded-full text-sm">
                {project.category}
              </span>
            </span>
            {project.year && (
              <span className="inline-flex items-center gap-2">
                <Calendar size={16} />
                {project.year}
              </span>
            )}
            {project.client && (
              <span className="inline-flex items-center gap-2">
                <Building2 size={16} />
                {project.client}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-dark-600 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Gallery */}
          {project.images.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {project.images.slice(1).map((image, idx) => (
                <div key={idx} className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} - Gallery image ${idx + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-dark-100 text-dark-700 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Outcomes</h2>
            <ul className="space-y-3">
              {project.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-dark-900 mt-1">✓</span>
                  <span className="text-dark-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* External Link */}
          {project.externalLink && (
            <div className="pt-8 border-t border-dark-200">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-dark-900 text-white rounded-lg font-semibold hover:bg-dark-800 transition-colors"
              >
                View Live Project
                <ExternalLink size={20} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

