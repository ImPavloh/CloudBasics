'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import * as Icons from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { topics, categories } from '@/components/topics/data'

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
}

type IconComponentType = LucideIcon;

export default function Temas() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [showUnavailable, setShowUnavailable] = useState(false)

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'Todos' || topic.category === selectedCategory
      const matchesAvailability = showUnavailable || topic.available
      return matchesSearch && matchesCategory && matchesAvailability
    })
  }, [searchTerm, selectedCategory, showUnavailable])

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
            Temas
          </h1>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Cloud Computing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
            Explora los conceptos fundamentales del Cloud Computing.
          </p>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{category}</span>
                </motion.button>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-grow relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <Input
                  type="text"
                  placeholder="Buscar temas..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">Mostrar no disponibles</span>
                <Switch
                  checked={showUnavailable}
                  onCheckedChange={setShowUnavailable}
                />
              </div>
            </div>
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
              {filteredTopics.map((topic) => {
                const IconComponent: IconComponentType = Icons[topic.icon as keyof typeof Icons] as IconComponentType;
                return (
                  <motion.div
                    key={topic.id}
                    className="h-full"
                    variants={itemVariants}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex-grow p-6">
                        <div className="flex items-center justify-between mb-4">
                          <motion.span
                            className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                          </motion.span>
                          <Badge variant={topic.available ? "default" : "secondary"} className="text-xs">
                            {topic.available ? topic.category : "Próximamente"}
                          </Badge>
                        </div>
                        <h2 className="text-lg font-medium text-gray-900 dark:text-white tracking-tight mb-2">
                          {topic.title}
                        </h2>
                        <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                          {topic.description}
                        </p>
                      </div>
                      <div className="p-6 mt-auto bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                        {topic.available ? (
                          <Link href={`/tema/${topic.id}`} passHref legacyBehavior>
                            <motion.a
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Explorar tema
                            </motion.a>
                          </Link>
                        ) : (
                          <Button variant="outline" disabled className="w-full">
                            Próximamente
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
