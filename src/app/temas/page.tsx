'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Textarea } from '@/components/ui/textarea'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { topics, categories } from '@/components/topics/data'

export default function Temas() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedTopic, setSelectedTopic] = useState(topics[0])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState(false)
  const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(false)
  const [notes, setNotes] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cloudNotes') || ''
    }
    return ''
  })

  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cloudNotes', notes)
  }, [notes])

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      const matchesCategory =
        selectedCategory === 'Todos' || topic.category === selectedCategory
      const matchesSearch =
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const handleDownloadNotes = () => {
    const element = document.createElement('a')
    const file = new Blob([notes], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'cloud_notes.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const LeftSidebar = () => (
    <Card
      className={`h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg ${
        isLeftSidebarCollapsed ? 'w-16' : 'w-80'
      }`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {isLeftSidebarCollapsed ? 'Temas' : 'Explorar Temas'}
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
          onClick={() => setIsLeftSidebarCollapsed(!isLeftSidebarCollapsed)}
          aria-label={
            isLeftSidebarCollapsed ? 'Expandir sidebar' : 'Colapsar sidebar'
          }
        >
          {isLeftSidebarCollapsed ? (
            <Icons.PanelLeftOpen className="h-4 w-4" />
          ) : (
            <Icons.PanelLeftClose className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>
      <CardContent>
        {!isLeftSidebarCollapsed && (
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-4">
              <div className="relative">
                <Icons.Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar temas..."
                  className="pl-8 bg-white dark:bg-gray-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  ref={searchInputRef}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={
                      selectedCategory === category ? 'default' : 'outline'
                    }
                    className="cursor-pointer hover:bg-primary/90"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <div className="space-y-2">
                {filteredTopics.map((topic) => {
                  const isDisabled = topics.indexOf(topic) >= 3
                  return (
                    <TooltipProvider key={topic.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant={
                              selectedTopic.id === topic.id
                                ? 'secondary'
                                : 'ghost'
                            }
                            className={`
                              w-full justify-start text-left relative
                              ${
                                isDisabled
                                  ? 'opacity-60 hover:opacity-70'
                                  : 'hover:bg-primary/10 dark:hover:bg-primary/20'
                              }
                            `}
                            onClick={() => {
                              if (!isDisabled) {
                                setSelectedTopic(topic)
                                setSidebarOpen(false)
                              }
                            }}
                            disabled={isDisabled}
                            aria-label={`Seleccionar tema: ${topic.title}`}
                          >
                            <div className="flex items-start w-full gap-2">
                              <Icons.Tag
                                className={`h-5 w-5 shrink-0 ${
                                  isDisabled
                                    ? 'text-muted-foreground'
                                    : 'text-primary'
                                }`}
                              />
                              <div className="flex-grow min-w-0">
                                <div className="font-medium truncate">
                                  {topic.title}
                                </div>
                                <div className="text-xs text-muted-foreground truncate">
                                  {topic.description}
                                </div>
                              </div>
                              {isDisabled && (
                                <Badge
                                  variant="secondary"
                                  className="ml-auto shrink-0 h-5 gap-1 bg-muted/50"
                                >
                                  <Icons.Clock className="h-3 w-3" />
                                  <span className="text-xs">Próximamente</span>
                                </Badge>
                              )}
                            </div>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{topic.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )
                })}
              </div>
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  )

  const RightSidebar = () => (
    <Card
      className={`h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg ${
        isRightSidebarCollapsed ? 'w-12' : 'w-80'
      }`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {isRightSidebarCollapsed ? 'Notas' : 'Notas Rápidas'}
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
          onClick={() => setIsRightSidebarCollapsed(!isRightSidebarCollapsed)}
          aria-label={
            isRightSidebarCollapsed ? 'Expandir notas' : 'Colapsar notas'
          }
        >
          {isRightSidebarCollapsed ? (
            <Icons.PanelRightOpen className="h-4 w-4" />
          ) : (
            <Icons.PanelRightClose className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>
      {!isRightSidebarCollapsed && (
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Escribe tus notas aquí..."
            className="h-[calc(100vh-16rem)] resize-none"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="flex space-x-2">
            <Button onClick={handleDownloadNotes} className="flex-1">
              <Icons.Download className="mr-2 h-4 w-4" />
              Descargar
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  )

  return (
    <div className="min-h-screen dark:bg-gray-900 bg-gray-100 flex pt-16">
      <div
        className={`hidden lg:block h-[calc(100vh-4rem)] fixed left-0 top-24 p-4 ${
          isLeftSidebarCollapsed ? 'w-24' : 'w-80'
        }`}
      >
        <LeftSidebar />
      </div>

      <div className="lg:hidden fixed top-20 left-4 z-50">
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Abrir menú">
              <Icons.Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <LeftSidebar />
          </SheetContent>
        </Sheet>
      </div>

      <main
        className={`flex-1 ${
          isLeftSidebarCollapsed ? 'lg:ml-24' : 'lg:ml-80'
        } ${isRightSidebarCollapsed ? 'lg:mr-12' : 'lg:mr-80'}`}
      >
        <div className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <selectedTopic.component />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <div
        className={`hidden lg:block ${
          isRightSidebarCollapsed ? 'w-12' : 'w-80'
        } h-[calc(100vh-4rem)] fixed right-0 top-24 p-4`}
      >
        <RightSidebar />
      </div>
    </div>
  )
}
