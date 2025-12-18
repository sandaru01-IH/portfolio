import { projects } from '@/content/projects'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-custom section-padding">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-dark-600 hover:text-dark-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
          All <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-lg text-dark-600 mb-12 max-w-2xl">
          Explore our complete portfolio of successful projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden" aria-hidden="true">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.category} project`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-3 py-1 bg-dark-900 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-dark-900 group-hover:text-dark-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-dark-900 font-medium">
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

