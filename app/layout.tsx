import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AlphaGrid | Data Analytics & AI Solutions',
  description: 'Premium data analytics, visualization, engineering, and AI solutions. Transforming businesses with cutting-edge technology and expert insights.',
  keywords: ['data analytics', 'data visualization', 'data engineering', 'AI solutions', 'machine learning', 'software development', 'web applications'],
  authors: [{ name: 'AlphaGrid' }],
  creator: 'AlphaGrid',
  publisher: 'AlphaGrid',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alphagrid.com',
    title: 'AlphaGrid | Data Analytics & AI Solutions',
    description: 'Premium data analytics, visualization, engineering, and AI solutions.',
    siteName: 'AlphaGrid',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlphaGrid | Data Analytics & AI Solutions',
    description: 'Premium data analytics, visualization, engineering, and AI solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}


