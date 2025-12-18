'use client'

import { useEffect, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SmoothScrollProviderProps {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Initialize ScrollTrigger with native scrolling
    ScrollTrigger.refresh()

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 150)
    }
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.killAll()
    }
  }, [])

  return <>{children}</>
}


