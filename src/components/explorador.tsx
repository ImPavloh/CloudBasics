'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { topics, Topic } from '@/components/topics/data'

interface ExplorerProps {
  initialTopicId?: string
}

export default function Explor({ initialTopicId }: ExplorerProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedTopic, setSelectedTopic] = useState<Topic>(() => {
    if (initialTopicId) {
      return topics.find((t) => t.id === initialTopicId) || topics[0]
    }
    return topics[0]
  })

  useEffect(() => {
    if (initialTopicId) {
      const topic = topics.find((t) => t.id === initialTopicId)
      if (topic) {
        setSelectedTopic(topic)
      }
    }
  }, [initialTopicId])

  useEffect(() => {
    const topicId = pathname.split('/').pop()
    const topicFromUrl = topics.find((topic) => topic.id === topicId)
    if (topicFromUrl) {
      setSelectedTopic(topicFromUrl)
    } else if (pathname === '/') {
      setSelectedTopic(topics[0])
    }
  }, [pathname])

  const handleTopicSelect = (topicId: string) => {
    const selectedTopic = topics.find((topic) => topic.id === topicId)
    if (selectedTopic && selectedTopic.available) {
      setSelectedTopic(selectedTopic)
      router.push(`/tema/${topicId}`)
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {selectedTopic.component && <selectedTopic.component />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 p-2 flex items-center space-x-3">
          <Button
            size="sm"
            onClick={() => router.push('/temas')}
            className="rounded-full"
          >
            <Icons.ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="rounded-full flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white duration-150 ease-in-out">
                Navegar
                <Icons.ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent className="w-64 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-lg rounded-lg py-1 mb-2">
              {topics.map((topic) => (
                topic.available && (
                  <DropdownMenuItem
                    key={topic.id}
                    onSelect={() => handleTopicSelect(topic.id)}
                    className={`flex items-center px-4 py-2 text-sm cursor-pointer 
                      text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600
                      rounded-md duration-150 ease-in-out`}
                  >
                    {topic.icon && <topic.icon className="mr-2 h-4 w-4" />}
                    <span>{topic.title}</span>
                  </DropdownMenuItem>
                )
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </footer>
    </div>
  )
}