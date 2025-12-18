import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-dark-600 mb-8">The project you're looking for doesn't exist.</p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-dark-900 text-white rounded-lg font-semibold hover:bg-dark-800 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>
    </div>
  )
}


