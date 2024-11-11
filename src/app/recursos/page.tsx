'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  FaBook,
  FaVideo,
  FaTools,
  FaExternalLinkAlt,
  FaCloud,
  FaCode,
  FaPodcast,
  FaNewspaper,
  FaUniversity,
  FaUsers,
  FaLightbulb,
  FaChartBar,
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  { name: 'All', icon: FaCloud },
  { name: 'Documentation', icon: FaBook },
  { name: 'Video', icon: FaVideo },
  { name: 'Tools', icon: FaTools },
  { name: 'Courses', icon: FaUniversity },
  { name: 'Community', icon: FaUsers },
  { name: 'Insights', icon: FaLightbulb },
]

const resources = [
  {
    title: 'AWS Documentation',
    description: 'Documentación oficial de Amazon Web Services',
    icon: FaBook,
    link: 'https://docs.aws.amazon.com/',
    category: 'Documentation',
  },
  {
    title: 'Google Cloud Platform YouTube',
    description: 'Canal oficial de YouTube de Google Cloud Platform',
    icon: FaVideo,
    link: 'https://www.youtube.com/user/googlecloudplatform',
    category: 'Video',
  },
  {
    title: 'Microsoft Azure Tools',
    description: 'Herramientas y utilidades para Microsoft Azure',
    icon: FaTools,
    link: 'https://azure.microsoft.com/en-us/downloads/',
    category: 'Tools',
  },
  {
    title: 'Cloud Computing Courses - Coursera',
    description: 'Cursos en línea sobre Cloud Computing',
    icon: FaUniversity,
    link: 'https://www.coursera.org/courses?query=cloud%20computing',
    category: 'Courses',
  },
  {
    title: 'IBM Cloud Tutorials',
    description: 'Tutoriales y guías para IBM Cloud',
    icon: FaVideo,
    link: 'https://cloud.ibm.com/docs/tutorials?topic=solution-tutorials-tutorials',
    category: 'Video',
  },
  {
    title: 'Cloud Native Computing Foundation',
    description: 'Recursos y proyectos de la CNCF',
    icon: FaTools,
    link: 'https://www.cncf.io/',
    category: 'Community',
  },
  {
    title: 'DigitalOcean Community Tutorials',
    description:
      'Tutoriales de la comunidad de DigitalOcean sobre cloud computing',
    icon: FaCode,
    link: 'https://www.digitalocean.com/community/tutorials',
    category: 'Documentation',
  },
  {
    title: 'Kubernetes Documentation',
    description: 'Documentación oficial de Kubernetes',
    icon: FaBook,
    link: 'https://kubernetes.io/docs/home/',
    category: 'Documentation',
  },
  {
    title: 'Cloud Computing Podcast',
    description:
      'Podcast semanal sobre las últimas noticias y tendencias en cloud computing',
    icon: FaPodcast,
    link: 'https://www.cloudcomputingpodcast.com/',
    category: 'Community',
  },
  {
    title: 'The New Stack',
    description: 'Noticias y análisis sobre cloud native computing',
    icon: FaNewspaper,
    link: 'https://thenewstack.io/',
    category: 'Community',
  },
  {
    title: 'edX Cloud Computing Courses',
    description:
      'Cursos en línea de universidades de prestigio sobre cloud computing',
    icon: FaUniversity,
    link: 'https://www.edx.org/learn/cloud-computing',
    category: 'Courses',
  },
  {
    title: 'Docker Documentation',
    description: 'Documentación oficial de Docker',
    icon: FaBook,
    link: 'https://docs.docker.com/',
    category: 'Documentation',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
}

export default function Recursos() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredResources, setFilteredResources] = useState(resources)

  useEffect(() => {
    const filtered = resources.filter(
      (resource) =>
        (selectedCategory === 'All' ||
          resource.category === selectedCategory) &&
        (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())),
    )
    setFilteredResources(filtered)
  }, [selectedCategory, searchTerm])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
        <motion.div
          className="lg:text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Recursos
          </h1>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Herramientas y materiales de aprendizaje
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
            Explora estos recursos para profundizar tus conocimiento.
          </p>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setSelectedCategory(category.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Buscar recursos..."
              className="w-full px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            className="mt-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="h-full"
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg px-6 py-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <motion.span
                          className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <resource.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </motion.span>
                        <span className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                          {resource.category}
                        </span>
                      </div>
                      <h2 className="text-lg font-medium text-gray-900 dark:text-white tracking-tight mb-2">
                        {resource.title}
                      </h2>
                      <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                        {resource.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link href={resource.link} passHref legacyBehavior>
                        <motion.a
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Explorar
                          <FaExternalLinkAlt
                            className="ml-2 -mr-1 h-4 w-4"
                            aria-hidden="true"
                          />
                        </motion.a>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
