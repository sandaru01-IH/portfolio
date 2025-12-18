'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Copy, Check, Send } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const email = 'alphagrid.official@gmail.com'

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    // In production, replace this with actual Formspree or Resend integration
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })

    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-dark-900" style={{ letterSpacing: '-0.02em', lineHeight: '1.15', paddingBottom: '0.1em' }}>
            Get In <span className="text-dark-900">Touch</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Ready to transform your data into intelligence? Let's start a conversation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6" style={{ letterSpacing: '-0.01em' }}>Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-dark-900 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-dark-900 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-dark-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-dark-900 focus:border-transparent transition-all"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-6 py-4 bg-dark-900 text-white rounded-lg font-semibold hover:bg-dark-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
                {isSubmitted && (
                  <p className="text-sm text-green-600 text-center">
                    Thank you! We'll get back to you soon.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6" style={{ letterSpacing: '-0.01em' }}>Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="text-dark-900" size={24} />
                    <h4 className="text-lg font-semibold text-dark-900">Email</h4>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-dark-50 rounded-lg">
                    <a
                      href={`mailto:${email}`}
                      className="flex-1 text-dark-700 hover:text-dark-900 transition-colors"
                    >
                      {email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                      aria-label="Copy email"
                    >
                      {copied ? (
                        <Check className="text-green-600" size={20} />
                      ) : (
                        <Copy className="text-dark-600" size={20} />
                      )}
                    </button>
                  </div>
                  {copied && (
                    <p className="text-sm text-green-600 mt-2">Email copied to clipboard!</p>
                  )}
                </div>

                <div className="pt-8 border-t border-dark-200">
                  <h4 className="text-lg font-semibold text-dark-900 mb-4">Why work with us?</h4>
                  <ul className="space-y-3 text-dark-600">
                    <li className="flex items-start gap-2">
                      <span className="text-dark-900 mt-1">✓</span>
                      <span>Free consultation to understand your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-dark-900 mt-1">✓</span>
                      <span>Transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-dark-900 mt-1">✓</span>
                      <span>Dedicated project manager for every engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-dark-900 mt-1">✓</span>
                      <span>Ongoing support and maintenance available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


