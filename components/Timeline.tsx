'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TimelineItem {
  step: string
  title: string
  description: string
  image?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export default function Timeline({ items, className = '' }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const curvedLineRef = useRef<SVGPathElement>(null)
  const verticalLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !timelineRef.current) {
      return
    }

    const ctx = gsap.context(() => {
      // Animate the curved line path (drawing effect)
      if (curvedLineRef.current) {
        const path = curvedLineRef.current
        const pathLength = path.getTotalLength()
        
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        })

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 10%',
            scrub: 0.5, // Faster animation to keep up with scroll
          },
        })
      }

      // Animate vertical line (growing from top)
      if (verticalLineRef.current) {
        gsap.fromTo(
          verticalLineRef.current,
          { scaleY: 0, transformOrigin: 'top' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              end: 'bottom 10%',
              scrub: 0.5, // Faster animation to keep up with scroll
            },
          }
        )
      }

      // Animate each timeline item with progressive reveal
      items.forEach((_, index) => {
        const item = timelineRef.current?.querySelector(`[data-timeline-item="${index}"]`)
        const circle = timelineRef.current?.querySelector(`[data-timeline-circle="${index}"]`)
        const stepNumber = timelineRef.current?.querySelector(`[data-step-number="${index}"]`)
        const title = timelineRef.current?.querySelector(`[data-step-title="${index}"]`)
        const description = timelineRef.current?.querySelector(`[data-step-desc="${index}"]`)

        // Animate item container
        if (item) {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              y: 60,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        }

        // Animate circle marker with bounce
        if (circle) {
          gsap.fromTo(
            circle,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: item || timelineRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        }

        // Progressive text reveal for step number
        if (stepNumber) {
          gsap.fromTo(
            stepNumber,
            {
              clipPath: 'inset(0 100% 0 0)',
              opacity: 0,
            },
            {
              clipPath: 'inset(0 0% 0 0)',
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item || timelineRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
              delay: 0.1,
            }
          )
        }

        // Animate title
        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item || timelineRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
              delay: 0.3,
            }
          )
        }

        // Animate description
        if (description) {
          gsap.fromTo(
            description,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item || timelineRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
              delay: 0.5,
            }
          )
        }

        // Animate image with fade in/out on scroll
        const image = timelineRef.current?.querySelector(`[data-timeline-image="${index}"]`)
        if (image) {
          gsap.fromTo(
            image,
            { opacity: 0, scale: 0.9, x: index % 2 === 0 ? -30 : 30 },
            {
              opacity: 1,
              scale: 1,
              x: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item || timelineRef.current,
                start: 'top 70%',
                end: 'bottom 30%',
                toggleActions: 'play none none reverse',
                scrub: 1,
              },
            }
          )
        }
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [items])

  return (
    <div ref={timelineRef} className={`relative py-12 ${className}`}>
      {/* Curved Line SVG - More prominent like reference */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ overflow: 'visible', height: '100%' }}
        viewBox="0 0 1200 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(0, 0, 0)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="rgb(64, 64, 64)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(0, 0, 0)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path
          ref={curvedLineRef}
          d="M 0,150 Q 400,50 800,200 T 1200,150"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="5"
          vectorEffect="non-scaling-stroke"
          style={{ filter: 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.5))' }}
        />
      </svg>

      {/* Vertical Timeline Line - Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark-400 via-dark-500 to-dark-600 opacity-30" />
        <div
          ref={verticalLineRef}
          className="absolute top-0 left-0 w-full h-full bg-dark-900 origin-top"
        />
      </div>

      {/* Timeline Items - Full Width Layout */}
      <div className="relative z-20 space-y-40 md:space-y-48">
        {items.map((item, index) => (
          <div
            key={index}
            data-timeline-item={index}
            className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center"
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Content - Left or Right based on index */}
                <div
                  className={`${
                    index % 2 === 0 
                      ? 'order-2 lg:order-2 lg:text-right lg:pl-20' 
                      : 'order-2 lg:order-1 lg:text-left lg:pr-20'
                  }`}
                >
                  <div className="inline-block mb-4">
                    <span
                      data-step-number={index}
                      className="text-5xl md:text-6xl font-heading font-bold text-dark-900 block"
                  style={{ letterSpacing: '-0.02em', lineHeight: '1.15', paddingBottom: '0.1em' }}
                    >
                      {item.step}
                    </span>
                  </div>
              <h3
                data-step-title={index}
                className="text-2xl md:text-3xl font-heading font-semibold text-dark-900 mb-4"
                style={{ letterSpacing: '-0.01em' }}
              >
                    {item.title}
                  </h3>
              <p
                data-step-desc={index}
                className="text-lg text-dark-600"
                style={{ lineHeight: '1.6' }}
              >
                    {item.description}
                  </p>
                </div>

                {/* Image - Right or Left based on index */}
                {item.image && (
                  <div
                    data-timeline-image={index}
                    className={`${
                      index % 2 === 0 
                        ? 'order-1 lg:order-1' 
                        : 'order-1 lg:order-2'
                    } relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl`}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.step}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}

                {/* Placeholder if no image */}
                {!item.image && (
                  <div
                    data-timeline-image={index}
                    className={`${
                      index % 2 === 0 
                        ? 'order-1 lg:order-1' 
                        : 'order-1 lg:order-2'
                    } relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center`}
                  >
                    <span className="text-primary-400 text-lg">Image placeholder</span>
                  </div>
                )}
              </div>
            </div>

            {/* Timeline Circle Marker - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-30">
              <div
                data-timeline-circle={index}
                className="relative w-8 h-8 md:w-10 md:h-10"
              >
                {/* Outer glow */}
                <div className="absolute inset-0 bg-dark-400 rounded-full opacity-50 blur-md animate-pulse" />
                {/* Main circle */}
                <div className="absolute inset-0.5 bg-dark-900 rounded-full" />
                {/* Inner white circle */}
                <div className="absolute inset-2 bg-white rounded-full border-2 border-dark-900" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

