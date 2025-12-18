'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export default function TextReveal({ children, className = '', delay = 0, duration = 1.2 }: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !textRef.current) {
      return
    }

    const ctx = gsap.context(() => {
      // Progressive text reveal with clip-path
      gsap.fromTo(
        textRef.current,
        {
          clipPath: 'inset(0 100% 0 0)',
          opacity: 0,
        },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, textRef)

    return () => ctx.revert()
  }, [delay, duration])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}

