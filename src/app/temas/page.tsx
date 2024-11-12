'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Cloud, Eye, ArrowRight } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'
import { topics, categories, Topic } from '@/components/topics/data'

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

export default function Temas() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [showUnavailable, setShowUnavailable] = useState<boolean>(false)

  const filteredTopics = useMemo(() => {
    return topics.filter(
      (topic) =>
        (selectedCategory === 'Todos' || topic.category === selectedCategory) &&
        (topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          topic.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (showUnavailable || topic.available),
    )
  }, [selectedCategory, searchTerm, showUnavailable])

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Header />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSearchTerm={setSearchTerm}
          showUnavailable={showUnavailable}
          setShowUnavailable={setShowUnavailable}
        />
        <TopicGrid topics={filteredTopics} />
      </main>
    </div>
  )
}

function Header() {
  return (
    <motion.div
      className="text-center mb-8 sm:mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
        Temas
      </h1>
      <p className="mt-2 text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white">
        Cloud Computing
      </p>
      <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 mx-auto">
        Explora los conceptos fundamentales del Cloud Computing.
      </p>
    </motion.div>
  )
}

interface CategoryFilterProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  setSearchTerm: (term: string) => void
  showUnavailable: boolean
  setShowUnavailable: (show: boolean) => void
}

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  setSearchTerm,
  showUnavailable,
  setShowUnavailable,
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
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
        <div className="relative flex-grow w-full sm:w-auto">
          <input
            type="text"
            placeholder="Buscar temas..."
            className="w-full px-4 py-2 pl-10 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
          <Cloud className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        </div>
        <Toggle
          pressed={showUnavailable}
          onPressedChange={setShowUnavailable}
          aria-label="Mostrar temas no disponibles"
          className="bg-white hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-gray-700 data-[state=on]:bg-blue-600 dark:data-[state=on]:bg-blue-700 data-[state=on]:text-white dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-sm px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base"
        >
          <Eye className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">Mostrar no disponibles</span>
          <span className="sm:hidden">No disponibles</span>
        </Toggle>
      </div>
    </motion.div>
  )
}

interface CategoryButtonProps {
  category: string
  isSelected: boolean
  onClick: () => void
}

function CategoryButton({
  category,
  isSelected,
  onClick,
}: CategoryButtonProps) {
  const Icon =
    topics.find((topic) => topic.category === category)?.icon || Cloud

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
      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      <span>{category}</span>
    </motion.button>
  )
}

interface TopicGridProps {
  topics: Topic[]
}

function TopicGrid({ topics }: TopicGridProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="mt-8 sm:mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

interface TopicCardProps {
  topic: Topic
}

function TopicCard({ topic }: TopicCardProps) {
  const Icon = topic.icon

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
              <Icon
                className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                aria-hidden="true"
              />
            </motion.span>
            <span className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
              {topic.category}
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white tracking-tight mb-2">
            {topic.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
            {topic.description}
          </p>
        </div>
        <div className="mt-auto">
          {topic.available ? (
            <Link href={`/tema/${topic.id}`} passHref legacyBehavior>
              <motion.a
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explorar tema
                <ArrowRight className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
              </motion.a>
            </Link>
          ) : (
            <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border border-transparent text-sm font-medium rounded-md text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              Próximamente
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
