'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    const ctx = gsap.context(() => {
      // Enhanced text reveal animation with progressive fill
      if (headlineRef.current) {
        const spans = headlineRef.current.querySelectorAll('span')
        spans.forEach((span, index) => {
          gsap.fromTo(
            span,
            {
              clipPath: 'inset(0 100% 0 0)',
              opacity: 0,
            },
            {
              clipPath: 'inset(0 0% 0 0)',
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out',
              delay: 0.3 + index * 0.2,
            }
          )
        })
      }

      // Smooth fade in text with stagger
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, delay: 0.9, ease: 'power2.out' }
        )
      }

      // Removed parallax for cleaner, smoother scrolling
    }, heroRef)

    return () => ctx.revert()
  }, [])


  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-white via-white to-dark-50" />

      {/* Content */}
      <div className="container-custom section-padding relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={headlineRef}
            className="hero-heading text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-8"
            style={{ letterSpacing: '-0.02em', lineHeight: '1.15', paddingBottom: '0.15em', overflow: 'visible' }}
          >
            <span className="block pb-1" style={{ overflow: 'visible', display: 'inline-block', width: '100%' }}>Transforming Data</span>
            <span className="block text-dark-900 pb-1" style={{ overflow: 'visible', display: 'inline-block', width: '100%' }}>Into Intelligence</span>
          </h1>

          <motion.p
            ref={textRef}
            className="hero-description text-lg sm:text-xl mb-12 max-w-2xl mx-auto"
            style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#475569' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            Premium data analytics, AI solutions, and software development that drive
            measurable business results. We turn complex data into actionable insights.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="group px-7 py-3.5 bg-dark-900 text-white rounded-xl font-semibold hover:bg-dark-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(15,23,42,0.15)] hover:shadow-[0_16px_32px_rgba(15,23,42,0.2)] hover:-translate-y-0.5"
            >
              View Portfolio
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-7 py-3.5 bg-white text-dark-900 border-2 border-dark-900 rounded-xl font-semibold hover:bg-dark-50 transition-all duration-200 shadow-[0_10px_25px_rgba(15,23,42,0.15)] hover:shadow-[0_16px_32px_rgba(15,23,42,0.2)] hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-dark-600 rounded-full flex justify-center backdrop-blur-sm bg-white/20">
          <div className="w-1.5 h-4 bg-dark-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

