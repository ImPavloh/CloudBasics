import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mb-4 transform w-11/12 max-w-7xl rounded-lg z-50 bg-white shadow-lg shadow-black/25 border border-gray-700/75 inset-x-0 mx-auto space-x-6">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 CloudBasics
          </div>
          <div className="flex space-x-6">
            <Link href="https://github.com/impavloh" className="text-gray-400 hover:text-black dark:hover:text-gray-300 transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="https://x.com/impavloh" className="text-gray-400 hover:text-blue-500 dark:hover:text-gray-300 transition-colors">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="https://linkedin.com/in/impavloh" className="text-gray-400 hover:text-blue-800 dark:hover:text-gray-300 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer