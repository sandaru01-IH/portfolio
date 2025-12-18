'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollLinesBgProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function ScrollLinesBg({ sectionRef }: ScrollLinesBgProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Track scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
    layoutEffect: false, // Fix hydration warning
  })

  // Transform scroll progress into subtle movements
  // Different transforms for each line create depth
  const y1 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [15, -15])
  const x1 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-8, 8])
  
  const y2 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-12, 12])
  const x2 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [10, -10])
  
  const y3 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [20, -20])
  const x3 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-5, 5])
  
  const y4 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-18, 18])
  const x4 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [7, -7])
  
  const y5 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [10, -10])
  const x5 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-12, 12])

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.08" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.10" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.06" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.10" />
        </linearGradient>
      </defs>

      <g className="text-dark-400">
        {/* Line 1 - Top curve */}
        <motion.path
          d="M 0,150 Q 300,100 600,150 T 1200,150"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.25"
          style={{ x: x1, y: y1 }}
        />

        {/* Line 2 - Middle curve */}
        <motion.path
          d="M 0,300 Q 400,250 800,300 T 1200,300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.2"
          style={{ x: x2, y: y2 }}
        />

        {/* Line 3 - Lower curve */}
        <motion.path
          d="M 0,500 Q 350,450 700,500 T 1200,500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.2"
          style={{ x: x3, y: y3 }}
        />

        {/* Line 4 - Bottom curve */}
        <motion.path
          d="M 0,650 Q 450,600 900,650 T 1200,650"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.18"
          style={{ x: x4, y: y4 }}
        />

        {/* Line 5 - Subtle accent */}
        <motion.path
          d="M 0,400 Q 500,350 1000,400 T 1200,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          style={{ x: x5, y: y5 }}
        />
      </g>
    </svg>
  )
}

