'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaCloud, FaBars, FaTimes, FaGithub } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 transform w-11/12 max-w-7xl rounded-lg z-50 bg-white shadow-lg shadow-black/50 border border-gray-700 inset-x-0 mx-auto space-x-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <FaCloud className="h-8 w-8 text-blue-500" aria-hidden="true" />
              <span className="sr-only">Fundamentos Cloud Computing</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Inicio
                </Link>
                <Link href="/temas" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Temas
                </Link>
                <Link href="/recursos" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Recursos
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block px-2">
            <Link href="" className="inline-flex items-center px-4 py-2 gap-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                <span>Repositorio</span>
                <FaGithub className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 dark:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Inicio
            </Link>
            <Link href="/temas" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Temas
            </Link>
            <Link href="/recursos" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Recursos
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <Link href="https://github.com/impavloh" className="text-gray-400 hover:text-black dark:hover:text-gray-300 transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar