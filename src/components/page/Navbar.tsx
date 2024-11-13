'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Github } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 w-11/12 max-w-7xl rounded-lg z-50 bg-white dark:bg-gray-800 shadow-lg shadow-black/50 border border-gray-700 inset-x-0 mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/favicon.svg"
                alt="Fundamentos Cloud Computing"
                width={32}
                height={32}
                className="text-blue-500"
              />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink href="/">Inicio</NavLink>
                <NavLink href="/temas">Temas</NavLink>
                <NavLink href="/recursos">Recursos</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <GithubLink />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" mobile>
              Inicio
            </NavLink>
            <NavLink href="/temas" mobile>
              Temas
            </NavLink>
            <NavLink href="/recursos" mobile>
              Recursos
            </NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between px-4">
            <ThemeToggle />
            <GithubLink mobile />
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({
  href,
  children,
  mobile = false,
}: {
  href: string
  children: React.ReactNode
  mobile?: boolean
}) {
  const baseClasses =
    'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white rounded-md text-sm font-medium transition-colors duration-300'
  const mobileClasses = mobile ? 'block px-3 py-2 text-base' : 'px-3 py-2'

  return (
    <Link href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </Link>
  )
}

function GithubLink({ mobile = false }: { mobile?: boolean }) {
  const baseClasses =
    'inline-flex items-center gap-2 text-sm font-medium rounded-md transition-colors duration-300'
  const desktopClasses = mobile
    ? ''
    : 'px-4 py-2 border border-transparent shadow-sm text-white bg-blue-600 hover:bg-blue-700'
  const mobileClasses = mobile
    ? 'text-gray-400 hover:text-gray-900 dark:hover:text-white'
    : ''

  return (
    <Link
      href="https://github.com/impavloh/cloudbasics"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className={`${baseClasses} ${desktopClasses} ${mobileClasses}`}
    >
      {!mobile && <span>Repositorio</span>}
      <Github className="h-6 w-6" aria-hidden="true" />
      {mobile && <span className="sr-only">GitHub</span>}
    </Link>
  )
}
