'use client'

import { Book, Wrench, Cloud, Compass, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/page/Footer'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  const features = [
    {
      icon: Cloud,
      title: 'Conceptos básicos',
      description:
        'Aprende los fundamentos del cloud computing, incluyendo modelos de servicio y tipos de implementación.',
    },
    {
      icon: Book,
      title: 'Temas avanzados',
      description:
        'Explora temas avanzados como seguridad en la nube, arquitecturas y estrategias de migración.',
    },
    {
      icon: Wrench,
      title: 'Recursos prácticos',
      description:
        'Accede a tutoriales, guías y herramientas para aplicar tus conocimientos en proyectos reales.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 text-center">
        <motion.div
          className="lg:text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Image
              src="/favicon.svg"
              alt="CloudBasics Logo"
              width={96}
              height={96}
              className="mx-auto"
            />
          </motion.div>
          <span className="block font-bold text-gray-900 dark:text-white text-xl mb-4">
            Cloud Basics
          </span>
          <h1 className="tracking-tight font-extrabold text-gray-900 dark:text-white">
            <motion.span
              className="block text-2xl sm:text-3xl md:text-4xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Fundamentos de
            </motion.span>
            <motion.span
              className="block text-blue-600 dark:text-blue-400 text-4xl sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Cloud Computing
            </motion.span>
          </h1>
          <motion.p
            className="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Descubre los conceptos básicos y avanzados del cloud computing.
            Aprende sobre infraestructura, servicios y mejores prácticas en la
            nube.
          </motion.p>

          <AnimatePresence>
            <motion.div
              className="mt-8 flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                href="/temas"
                className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              >
                Explorar temas
                <Compass
                  className="ml-2 -mr-1 h-5 w-5 transition-transform duration-300 group-hover:rotate-45"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/recursos"
                className="group inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Ver recursos
                <FileText
                  className="ml-2 -mr-1 h-5 w-5 transition-opacity duration-300 opacity-75 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => (
              <motion.div key={index} className="pt-6" variants={itemVariants}>
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 shadow-md dark:shadow-gray-700">
                  <div className="-mt-6">
                    <div>
                      <motion.span
                        className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <item.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </motion.span>
                    </div>
                    <h2 className="mt-6 text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
