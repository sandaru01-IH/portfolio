'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { services } from '@/content/services'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    const ctx = gsap.context(() => {
      // Smooth reveal animation - cards visible by default, animate in
      gsap.fromTo(
        '.service-card',
        {
          opacity: 1, // Start visible
          y: 0,
          scale: 1,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            scrub: false,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-dark-900" style={{ letterSpacing: '-0.02em', lineHeight: '1.15', paddingBottom: '0.1em' }}>
            Our <span className="text-dark-900">Services</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Comprehensive solutions to transform your data into competitive advantages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card group relative bg-white rounded-2xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-dark-200 overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Black overlay on hover */}
              <div className="absolute inset-0 bg-dark-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              {/* Border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-dark-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Service number */}
                <div className="mb-6">
                  <span className="text-6xl font-display font-bold text-dark-200 group-hover:text-dark-400 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-semibold mb-4 text-dark-900 group-hover:text-dark-700 transition-colors duration-300" style={{ letterSpacing: '-0.01em' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-dark-600 mb-8 text-base" style={{ lineHeight: '1.6' }}>
                  {service.description}
                </p>

                {/* Features list with premium styling */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-dark-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-dark-900 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Subtle CTA indicator */}
                <div className="flex items-center gap-2 text-dark-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


