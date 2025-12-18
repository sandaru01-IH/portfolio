'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '@/content/stats'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

function AnimatedCounter({ value, suffix = '', duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (prefersReducedMotion) {
              setCount(value)
              return
            }

            const startTime = Date.now()
            const startValue = 0
            const endValue = value

            const animate = () => {
              const elapsed = (Date.now() - startTime) / 1000
              const progress = Math.min(elapsed / duration, 1)
              
              // Easing function
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
              
              setCount(currentValue)

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(endValue)
              }
            }

            animate()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [value, duration])

  return (
    <span ref={countRef} className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-dark-900" style={{ letterSpacing: '-0.02em', lineHeight: '1.15', paddingBottom: '0.1em', display: 'inline-block' }}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    const ctx = gsap.context(() => {
      // Smooth section reveal
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
            scrub: false,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-white to-dark-50"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-dark-900 mt-4 mb-2" style={{ letterSpacing: '-0.01em' }}>
                {stat.label}
              </h3>
              <p className="text-dark-600" style={{ lineHeight: '1.6' }}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


