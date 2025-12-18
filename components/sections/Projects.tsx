'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '@/content/projects'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const sectionRef = useRef<HTMLElement>(null)

  const filteredProjects =
    selectedCategory === 'All'
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.featured && p.category === selectedCategory)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    const ctx = gsap.context(() => {
      // Enhanced project card animations
      gsap.fromTo(
        '.project-card',
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
            scrub: false,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [selectedCategory])

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-gradient-to-b from-dark-50 to-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-dark-900" style={{ letterSpacing: '-0.02em', lineHeight: '1.15', paddingBottom: '0.1em' }}>
            Featured <span className="text-dark-900">Projects</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Showcasing our expertise through successful client engagements
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-dark-900 text-white shadow-lg'
                  : 'bg-white text-dark-700 hover:bg-dark-100 border border-dark-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -8 }}
                layout
              >
                <Link href={`/projects/${project.id}`}>
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
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-900 text-white rounded-lg font-semibold hover:bg-dark-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ExternalLink size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

