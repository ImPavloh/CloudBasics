'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Book,
  Video,
  Wrench,
  ExternalLink,
  Cloud,
  Code,
  Podcast,
  Newspaper,
  GraduationCap,
  Users,
  LucideIcon,
  Folder,
} from 'lucide-react'

interface Category {
  name: string
  icon: LucideIcon
}

interface Resource {
  title: string
  description: string
  icon: LucideIcon
  link: string
  category: string
}

const categories: Category[] = [
  { name: 'All', icon: Cloud },
  { name: 'Documentation', icon: Book },
  { name: 'Video', icon: Video },
  { name: 'Tools', icon: Wrench },
  { name: 'Courses', icon: GraduationCap },
  { name: 'Community', icon: Users },
]

const resources: Resource[] = [
  {
    title: 'AWS Documentation',
    description: 'Documentación oficial de Amazon Web Services',
    icon: Book,
    link: 'https://docs.aws.amazon.com/',
    category: 'Documentation',
  },
  {
    title: 'Google Cloud Platform YouTube',
    description: 'Canal oficial de YouTube de Google Cloud Platform',
    icon: Video,
    link: 'https://www.youtube.com/user/googlecloudplatform',
    category: 'Video',
  },
  {
    title: 'Microsoft Azure Tools',
    description: 'Herramientas y utilidades para Microsoft Azure',
    icon: Wrench,
    link: 'https://azure.microsoft.com/en-us/downloads/',
    category: 'Tools',
  },
  {
    title: 'Cloud Computing Courses - Coursera',
    description: 'Cursos en línea sobre Cloud Computing',
    icon: GraduationCap,
    link: 'https://www.coursera.org/courses?query=cloud%20computing',
    category: 'Courses',
  },
  {
    title: 'IBM Cloud Tutorials',
    description: 'Tutoriales y guías para IBM Cloud',
    icon: Video,
    link: 'https://cloud.ibm.com/docs/tutorials?topic=solution-tutorials-tutorials',
    category: 'Video',
  },
  {
    title: 'Cloud Native Computing Foundation',
    description: 'Recursos y proyectos de la CNCF',
    icon: Wrench,
    link: 'https://www.cncf.io/',
    category: 'Community',
  },
  {
    title: 'DigitalOcean Community Tutorials',
    description:
      'Tutoriales de la comunidad de DigitalOcean sobre cloud computing',
    icon: Code,
    link: 'https://www.digitalocean.com/community/tutorials',
    category: 'Documentation',
  },
  {
    title: 'Kubernetes Documentation',
    description: 'Documentación oficial de Kubernetes',
    icon: Book,
    link: 'https://kubernetes.io/docs/home/',
    category: 'Documentation',
  },
  {
    title: 'Cloud Computing Podcast',
    description:
      'Podcast semanal sobre las últimas noticias y tendencias en cloud computing',
    icon: Podcast,
    link: 'https://www.cloudcomputingpodcast.com/',
    category: 'Community',
  },
  {
    title: 'The New Stack',
    description: 'Noticias y análisis sobre cloud native computing',
    icon: Newspaper,
    link: 'https://thenewstack.io/',
    category: 'Community',
  },
  {
    title: 'edX Cloud Computing Courses',
    description:
      'Cursos en línea de universidades de prestigio sobre cloud computing',
    icon: GraduationCap,
    link: 'https://www.edx.org/learn/cloud-computing',
    category: 'Courses',
  },
  {
    title: 'Docker Documentation',
    description: 'Documentación oficial de Docker',
    icon: Book,
    link: 'https://docs.docker.com/',
    category: 'Documentation',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
}

export default function CloudResources() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const filteredResources = useMemo(() => {
    return resources.filter(
      (resource) =>
        (selectedCategory === 'All' ||
          resource.category === selectedCategory) &&
        (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())),
    )
  }, [selectedCategory, searchTerm])

  return (
    <main className="flex-grow flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSearchTerm={setSearchTerm}
      />
      <ResourceGrid resources={filteredResources} />
    </main>
  )
}

interface CategoryFilterProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  setSearchTerm: (term: string) => void
}

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  setSearchTerm,
}: CategoryFilterProps) {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4">
        {categories.map((category) => (
          <CategoryButton
            key={category.name}
            category={category}
            isSelected={selectedCategory === category.name}
            onClick={() => setSelectedCategory(category.name)}
          />
        ))}
      </div>
      <div className="max-w-md mx-auto relative">
        <input
          type="text"
          placeholder="Buscar recursos..."
          className="w-full px-4 py-2 pl-10 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Folder className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
      </div>
    </motion.div>
  )
}

interface CategoryButtonProps {
  category: Category
  isSelected: boolean
  onClick: () => void
}

function CategoryButton({
  category,
  isSelected,
  onClick,
}: CategoryButtonProps) {
  return (
    <motion.button
      className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base ${
        isSelected
          ? 'bg-blue-600 text-white'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <category.icon className="h-4 w-4 sm:h-5 sm:w-5" />
      <span>{category.name}</span>
    </motion.button>
  )
}

interface ResourceGridProps {
  resources: Resource[]
}

function ResourceGrid({ resources }: ResourceGridProps) {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

interface ResourceCardProps {
  resource: Resource
}

function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <motion.div
      className="h-full"
      variants={itemVariants}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg px-4 sm:px-6 py-6 sm:py-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-4">
            <motion.span
              className="inline-flex items-center justify-center p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <resource.icon
                className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                aria-hidden="true"
              />
            </motion.span>
            <span className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
              {resource.category}
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white tracking-tight mb-2">
            {resource.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
            {resource.description}
          </p>
        </div>
        <div className="mt-auto">
          <Link href={resource.link} passHref legacyBehavior>
            <motion.a
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorar
              <ExternalLink className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
            </motion.a>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
