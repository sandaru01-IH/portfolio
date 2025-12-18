import Link from 'next/link'
import { Linkedin, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">AlphaGrid</h3>
            <p className="text-dark-300 mb-4 max-w-md">
              Transforming businesses with cutting-edge data analytics, AI solutions, and software development.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/alphagrid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com/alphagrid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-dark-300">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Data Visualization
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  AI Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-dark-300">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-dark-400 text-sm">
            © {new Date().getFullYear()} AlphaGrid. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-dark-400 text-sm">
            <Mail size={16} />
            <a
              href="mailto:alphagrid.official@gmail.com"
              className="hover:text-white transition-colors"
            >
              alphagrid.official@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


