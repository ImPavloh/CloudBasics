'use client'

import { FaCloud, FaBook, FaTools } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Footer from '../components/page/Footer'

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

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
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
            <FaCloud
              className="mx-auto h-24 w-24 text-blue-500"
              aria-hidden="true"
            />
          </motion.div>
          <span className="block font-bold text-gray-900 dark:text-white text-xl mb-4">
            Cloud Basics
          </span>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Fundamentos de
            </motion.span>
            <motion.span
              className="block text-blue-600 dark:text-blue-400"
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
        </motion.div>

        <motion.div
          className="mt-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FaCloud,
                title: 'Conceptos básicos',
                description:
                  'Aprende los fundamentos del cloud computing, incluyendo modelos de servicio y tipos de implementación.',
              },
              {
                icon: FaBook,
                title: 'Temas avanzados',
                description:
                  'Explora temas avanzados como seguridad en la nube, arquitecturas y estrategias de migración.',
              },
              {
                icon: FaTools,
                title: 'Recursos prácticos',
                description:
                  'Accede a tutoriales, guías y herramientas para aplicar tus conocimientos en proyectos reales.',
              },
            ].map((item, index) => (
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
                    <h2 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-5 text-base text-gray-600 dark:text-gray-300">
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
