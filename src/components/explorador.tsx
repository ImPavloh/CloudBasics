'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { topics, categories } from '@/components/topics/data'

interface ExplorerProps {
  initialTopicId?: string
}

export default function Explorador({ initialTopicId }: ExplorerProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedTopic, setSelectedTopic] = useState(() => {
    if (initialTopicId) {
      const topic = topics.find((t) => t.id === initialTopicId)
      return topic || topics[0]
    }
    return topics[0]
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState(false)
  const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(false)
  const [notes, setNotes] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cloudNotes') || ''
    }
    return ''
  })
  const [highlightedText, setHighlightedText] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (initialTopicId) {
      const topic = topics.find((t) => t.id === initialTopicId)
      if (topic) {
        setSelectedTopic(topic)
        setSelectedCategory(topic.category)
      }
    }
  }, [initialTopicId])

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cloudNotes', notes)
  }, [notes])

  useEffect(() => {
    const topicId = pathname.split('/').pop()
    const topicFromUrl = topics.find((topic) => topic.id === topicId)
    if (topicFromUrl) {
      setSelectedTopic(topicFromUrl)
      setSelectedCategory(topicFromUrl.category)
    } else if (pathname === '/') {
      setSelectedTopic(topics[0])
      setSelectedCategory(topics[0].category)
    }
  }, [pathname])

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

  const handleHighlight = () => {
    const selection = window.getSelection()
    if (selection) {
      setHighlightedText(selection.toString())
    }
  }

  const handleAddTag = (tag: string) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag])
    }
  }

  const LeftSidebar = () => (
    <Card
      className={`h-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-lg ${
        isLeftSidebarCollapsed ? 'w-16' : 'w-64'
      } transition-all duration-300 overflow-hidden border-r border-gray-200 dark:border-gray-700`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {isLeftSidebarCollapsed ? '' : 'Explorar Temas'}
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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
                <Icons.Search className="absolute left-2.5 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                <Input
                  placeholder="Buscar temas..."
                  className="pl-8 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200"
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
                    className="cursor-pointer hover:bg-primary/90 transition-colors duration-200"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <div className="space-y-2">
                {filteredTopics.map((topic, index) => {
                  const isDisabled = index >= 3
                  return (
                    <Button
                      key={topic.id}
                      variant={
                        selectedTopic.id === topic.id ? 'secondary' : 'ghost'
                      }
                      className={`
                        w-full justify-start text-left relative
                        ${
                          isDisabled
                            ? 'opacity-60 hover:opacity-70'
                            : 'hover:bg-primary/10 dark:hover:bg-primary/20'
                        }
                        ${
                          selectedTopic.id === topic.id
                            ? 'bg-primary/20 dark:bg-primary/30 text-primary-foreground'
                            : ''
                        }
                        transition-all duration-200
                      `}
                      onClick={() => {
                        if (!isDisabled) {
                          setSelectedTopic(topic)
                          setSidebarOpen(false)
                          router.push(`/tema/${topic.id}`)
                        }
                      }}
                      disabled={isDisabled}
                      aria-label={`Seleccionar tema: ${topic.title}`}
                    >
                      <div className="flex items-start w-full gap-2">
                        <Icons.Tag
                          className={`h-5 w-5 shrink-0 ${
                            isDisabled
                              ? 'text-gray-400 dark:text-gray-500'
                              : 'text-primary'
                          }`}
                        />
                        <div className="flex-grow min-w-0">
                          <div className="font-medium truncate text-gray-700 dark:text-gray-300">
                            {topic.title}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {topic.description}
                          </div>
                        </div>
                        {isDisabled && (
                          <Badge className="ml-auto shrink-0 h-5 gap-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                            <Icons.Clock className="h-3 w-3" />
                            <span className="text-xs">Próximamente</span>
                          </Badge>
                        )}
                      </div>
                    </Button>
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
      className={`h-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-lg ${
        isRightSidebarCollapsed ? 'w-12' : 'w-64'
      } transition-all duration-300 overflow-hidden border-l border-gray-200 dark:border-gray-700`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {isRightSidebarCollapsed ? '' : 'Herramientas'}
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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
          <Tabs defaultValue="notes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-700">
              <TabsTrigger
                value="notes"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600"
              >
                Notas
              </TabsTrigger>
              <TabsTrigger
                value="highlight"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600"
              >
                Resaltar
              </TabsTrigger>
              <TabsTrigger
                value="tags"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600"
              >
                Etiquetas
              </TabsTrigger>
            </TabsList>
            <TabsContent value="notes">
              <Textarea
                placeholder="Escribe tus notas aquí..."
                className="h-[calc(100vh-22rem)] resize-none bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <Button
                onClick={handleDownloadNotes}
                className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Icons.Download className="mr-2 h-4 w-4" />
                Descargar
              </Button>
            </TabsContent>
            <TabsContent value="highlight">
              <Button
                onClick={handleHighlight}
                className="w-full mb-2 bg-yellow-500 hover:bg-yellow-600 text-yellow-50"
              >
                <Icons.Highlighter className="mr-2 h-4 w-4" />
                Resaltar selección
              </Button>
              {highlightedText && (
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded text-yellow-800 dark:text-yellow-200">
                  {highlightedText}
                </div>
              )}
            </TabsContent>
            <TabsContent value="tags">
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Nueva etiqueta"
                  className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddTag((e.target as HTMLInputElement).value)
                      ;(e.target as HTMLInputElement).value = ''
                    }
                  }}
                />
                <Button
                  onClick={() => {
                    const input = document.querySelector(
                      'input[placeholder="Nueva etiqueta"]',
                    ) as HTMLInputElement
                    if (input) {
                      handleAddTag(input.value)
                      input.value = ''
                    }
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Icons.Plus className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      )}
    </Card>
  )

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div
        className={`hidden lg:block fixed left-0 top-24 h-full transition-all duration-300 ${
          isLeftSidebarCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <LeftSidebar />
      </div>

      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              aria-label="Abrir menú"
              className="bg-white dark:bg-gray-800"
            >
              <Icons.Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <LeftSidebar />
          </SheetContent>
        </Sheet>
      </div>

      <main
        className={`mt-16 flex-1 overflow-auto transition-all duration-300 ${
          isLeftSidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
        } ${isRightSidebarCollapsed ? 'lg:mr-12' : 'lg:mr-64'}`}
      >
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {selectedTopic.component ? (
                <selectedTopic.component />
              ) : (
                <div className="text-center py-10">
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedTopic.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedTopic.description}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <div
        className={`hidden lg:block fixed right-0 top-24 h-full transition-all duration-300 ${
          isRightSidebarCollapsed ? 'w-12' : 'w-64'
        }`}
      >
        <RightSidebar />
      </div>
    </div>
  )
}
