'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mb-4 w-11/12 max-w-7xl mx-auto rounded-lg bg-white dark:bg-gray-800 shadow-lg shadow-black/25 border border-gray-700/75">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 CloudBasics
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/impavloh"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              href="https://x.com/impavloh"
              className="text-gray-400 hover:text-blue-500 dark:hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              href="https://linkedin.com/in/impavloh"
              className="text-gray-400 hover:text-blue-700 dark:hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
