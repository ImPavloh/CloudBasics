'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Search, Filter, ExternalLink, Star, Book, Cloud, GraduationCap, Wrench,
  Video, BookOpen, HelpCircle, CheckSquare, Award, Compass, FileText,
  Users, Terminal, Cpu, ShieldCheck, Code
} from 'lucide-react'

interface Category {
  name: string
  icon: any
  description: string
}

interface Resource {
  title: string
  description: string
  icon: any
  link: string
  category: string
  level: string
  tags: string[]
  type: string
  pricing: string
  isFeatured?: boolean
  isOfficial?: boolean
  estimatedTime?: string
  lastUpdate?: string
  language?: string
}

const resources: Resource[] = [
// Introducción a AWS
{
    title: 'AWS Free Tier',
    description: 'Explora y prueba los servicios de AWS de forma gratuita, con acceso a más de 60 productos',
    icon: Cloud,
    link: 'https://aws.amazon.com/free/',
    category: 'Introduction to AWS',
    level: 'Beginner',
    tags: ['free', 'hands-on', 'practice'],
    type: 'Documentation',
    isFeatured: true,
    isOfficial: true,
    pricing: 'Free',
    lastUpdate: 'Marzo 2025'
    },
    {
    title: 'AWS Essentials',
    description: 'Videos introductorios sobre los servicios principales de AWS con ejemplos prácticos',
    icon: Book,
    link: 'https://aws.amazon.com/getting-started/fundamentals-core-concepts/',
    category: 'Introduction to AWS',
    level: 'Beginner',
    tags: ['fundamentals', 'overview', 'core services'],
    estimatedTime: '3-4 hours',
    type: 'Course',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Cloud Practitioner Essentials',
    description: 'Curso fundamental para introducirte a los conceptos de AWS Cloud',
    icon: Video,
    link: 'https://aws.amazon.com/training/learn-about/cloud-practitioner/',
    category: 'Introduction to AWS',
    level: 'Beginner',
    tags: ['cloud practitioner', 'fundamentals', 'core concepts'],
    estimatedTime: '6 hours',
    type: 'Course',
    isOfficial: true,
    pricing: 'Free'
    },
    // Entrenamiento y cursos
    {
    title: 'AWS Academy',
    description: 'Currículo de computación en la nube para instituciones de educación superior con laboratorios prácticos',
    icon: GraduationCap,
    link: 'https://aws.amazon.com/training/awsacademy/',
    category: 'Training and Courses',
    level: 'Beginner',
    tags: ['education', 'academic', 'institutions'],
    type: 'Course',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Educate',
    description: 'Recursos de aprendizaje en la nube para estudiantes y educadores con créditos gratuitos',
    icon: GraduationCap,
    link: 'https://aws.amazon.com/education/awseducate/',
    category: 'Training and Courses',
    level: 'Beginner',
    tags: ['students', 'educators', 'free credits'],
    type: 'Course',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Skill Builder',
    description: 'Entrenamiento digital personalizado y preparación para certificaciones con seguimiento de progreso',
    icon: GraduationCap,
    link: 'https://skillbuilder.aws/',
    category: 'Training and Courses',
    level: 'Intermediate',
    tags: ['digital training', 'certification prep', 'self-paced'],
    type: 'Course',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'A Cloud Guru',
    description: 'Plataforma de aprendizaje con cursos, laboratorios y aprendizaje práctico',
    icon: Cloud,
    link: 'https://acloudguru.com/',
    category: 'Training and Courses',
    level: 'Intermediate',
    tags: ['hands-on', 'sandbox', 'certification'],
    type: 'Course',
    pricing: 'Paid',
    lastUpdate: 'Marzo 2025'
  },
    // Certificaciones
    {
    title: 'AWS Certified Cloud Practitioner',
    description: 'Certificación fundamental para fluidez en la nube con contenido actualizado para 2025',
    icon: Award,
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    category: 'Certifications',
    level: 'Beginner',
    tags: ['certification', 'foundational', 'starting point'],
    estimatedTime: '6-12 weeks prep',
    type: 'Exam',
    isFeatured: true,
    isOfficial: true,
    pricing: 'Paid'
    },
    {
    title: 'AWS Certified Solutions Architect - Associate',
    description: 'Certificación para diseñar y desplegar sistemas escalables en AWS con prácticas recomendadas',
    icon: Award,
    link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    category: 'Certifications',
    level: 'Intermediate',
    tags: ['architecture', 'design', 'solutions'],
    estimatedTime: '2-3 months prep',
    type: 'Exam',
    isOfficial: true,
    pricing: 'Paid'
    },
    {
    title: 'AWS Certified Developer - Associate',
    description: 'Certificación para desarrollo en AWS enfocada en servicios y herramientas de programación',
    icon: Award,
    link: 'https://aws.amazon.com/certification/certified-developer-associate/',
    category: 'Certifications',
    level: 'Intermediate',
    tags: ['development', 'coding', 'CI/CD'],
    estimatedTime: '2-3 months prep',
    type: 'Exam',
    isOfficial: true,
    pricing: 'Paid'
    },
    {
    title: 'AWS Certified Solutions Architect - Professional',
    description: 'Certificación avanzada para arquitectos de soluciones con experiencia',
    icon: Award,
    link: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
    category: 'Certifications',
    level: 'Advanced',
    tags: ['professional', 'advanced architecture', 'complex solutions'],
    estimatedTime: '3-6 months prep',
    type: 'Exam',
    isOfficial: true,
    pricing: 'Paid'
    },
    // Rutas de aprendizaje
    {
    title: 'Ruta para Cloud Practitioner',
    description: 'Guía paso a paso para principiantes con recursos recomendados y calendario de estudios',
    icon: Compass,
    link: 'https://aws.amazon.com/training/path-cloud-practitioner/',
    category: 'Learning Paths',
    level: 'Beginner',
    tags: ['guided path', 'structured learning', 'first certification'],
    estimatedTime: '3 months',
    type: 'Documentation',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'Ruta para Solutions Architect',
    description: 'De principiante a arquitecto de soluciones con estudios de caso y ejemplos prácticos',
    icon: Compass,
    link: 'https://aws.amazon.com/training/path-architecting/',
    category: 'Learning Paths',
    level: 'Intermediate',
    tags: ['architect', 'design patterns', 'best practices'],
    estimatedTime: '6 months',
    type: 'Documentation',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'Ruta para AWS DevOps Engineer',
    description: 'Enfocado en automatización, CI/CD y operaciones en AWS',
    icon: Compass,
    link: 'https://aws.amazon.com/training/path-devops/',
    category: 'Learning Paths',
    level: 'Intermediate',
    tags: ['devops', 'automation', 'CI/CD'],
    estimatedTime: '6 months',
    type: 'Documentation',
    isOfficial: true,
    pricing: 'Free'
    },
    // Recursos por nivel
    {
    title: 'AWS Workshop Studio',
    description: 'Colección de talleres y laboratorios prácticos autoguiados con entornos sandbox',
    icon: Terminal,
    link: 'https://workshop.aws/',
    category: 'Resources by Level',
    level: 'Intermediate',
    tags: ['workshops', 'hands-on', 'practical'],
    type: 'Tool',
    isFeatured: true,
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Qwiklabs',
    description: 'Laboratorios prácticos para ganar experiencia con entornos reales y guiados',
    icon: Wrench,
    link: 'https://qwiklabs.com/',
    category: 'Resources by Level',
    level: 'Intermediate',
    tags: ['labs', 'practice', 'hands-on'],
    type: 'Tool',
    pricing: 'Paid'
    },
    {
    title: 'AWS Well-Architected Framework',
    description: 'Guías para diseñar arquitecturas seguras y eficientes con pilares fundamentales',
    icon: FileText,
    link: 'https://aws.amazon.com/architecture/well-architected/',
    category: 'Resources by Level',
    level: 'Advanced',
    tags: ['best practices', 'architecture', 'optimization'],
    type: 'Documentation',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Architecture Center',
    description: 'Patrones de arquitectura, diagramas de referencia y mejores prácticas',
    icon: Cpu,
    link: 'https://aws.amazon.com/architecture/',
    category: 'Architecture',
    level: 'Intermediate',
    tags: ['reference architectures', 'patterns', 'diagrams'],
    type: 'Documentation',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS This is My Architecture',
    description: 'Videos explicando arquitecturas reales de clientes de AWS',
    icon: Video,
    link: 'https://aws.amazon.com/this-is-my-architecture/',
    category: 'Architecture',
    level: 'Intermediate',
    tags: ['case studies', 'real-world', 'examples'],
    type: 'Video',
    isOfficial: true,
    pricing: 'Free'
    },
    // Exam Preparation
    {
    title: 'AWS Certification Exam Preparation',
    description: 'Recursos oficiales para la preparación de exámenes incluyendo guías de estudio y ejemplos',
    icon: FileText,
    link: 'https://aws.amazon.com/certification/exam-prep/',
    category: 'Exam Preparation',
    level: 'Intermediate',
    tags: ['exam prep', 'study guides', 'resources'],
    type: 'Documentation',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Practice Exams',
    description: 'Exámenes de práctica oficiales para certificaciones con preguntas similares a las del examen real',
    icon: CheckSquare,
    link: 'https://aws.amazon.com/certification/exam-prep/',
    category: 'Exam Preparation',
    level: 'Intermediate',
    tags: ['practice tests', 'sample questions', 'exam simulation'],
    type: 'Exam',
    isOfficial: true,
    pricing: 'Paid'
    },
    {
    title: 'Whizlabs AWS Practice Tests',
    description: 'Exámenes de práctica y laboratorios con explicaciones detalladas',
    icon: CheckSquare,
    link: 'https://www.whizlabs.com/aws-certification-training/',
    category: 'Exam Preparation',
    level: 'Intermediate',
    tags: ['practice exams', 'detailed explanations', 'hands-on labs'],
    type: 'Exam',
    pricing: 'Paid'
    },
    {
    title: 'Tutorials Dojo AWS Cheat Sheets',
    description: 'Guías de referencia rápida para preparación de exámenes',
    icon: FileText,
    link: 'https://tutorialsdojo.com/aws-cheat-sheets/',
    category: 'Exam Preparation',
    level: 'Intermediate',
    tags: ['quick reference', 'cheat sheets', 'exam tips'],
    type: 'Documentation',
    pricing: 'Free'
    },
    // Community and Support
    {
    title: 'AWS Forums',
    description: 'Foros comunitarios para usuarios de AWS donde puedes hacer preguntas y compartir conocimientos',
    icon: Users,
    link: 'https://forums.aws.amazon.com/',
    category: 'Community and Support',
    level: 'Beginner',
    tags: ['community', 'questions', 'discussions'],
    type: 'Community',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Blogs',
    description: 'Blogs oficiales de AWS con actualizaciones y mejores prácticas escritos por expertos de AWS',
    icon: BookOpen,
    link: 'https://aws.amazon.com/blogs/',
    category: 'Community and Support',
    level: 'Intermediate',
    tags: ['blogs', 'updates', 'best practices'],
    type: 'Article',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Knowledge Center',
    description: 'Preguntas frecuentes y guías de resolución de problemas organizadas por servicio',
    icon: HelpCircle,
    link: 'https://aws.amazon.com/premiumsupport/knowledge-center/',
    category: 'Community and Support',
    level: 'Advanced',
    tags: ['faqs', 'troubleshooting', 'support'],
    type: 'Documentation',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Community Hero Program',
    description: 'Reconocimiento a expertos comunitarios que comparten conocimientos sobre AWS',
    icon: Star,
    link: 'https://aws.amazon.com/developer/community/heroes/',
    category: 'Community and Support',
    level: 'Advanced',
    tags: ['community leaders', 'experts', 'knowledge sharing'],
    type: 'Community',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS re:Post',
    description: 'Comunidad de preguntas y respuestas técnicas verificadas sobre AWS',
    icon: HelpCircle,
    link: 'https://repost.aws/',
    category: 'Community and Support',
    level: 'Intermediate',
    tags: ['q&a', 'technical support', 'community answers'],
    type: 'Community',
    isFeatured: true,
    isOfficial: true,
    pricing: 'Free'
    },
    // Hands-on Labs
    {
    title: 'AWS Hands-On Tutorials',
    description: 'Tutoriales paso a paso para aprender a utilizar los servicios de AWS',
    icon: Terminal,
    link: 'https://aws.amazon.com/getting-started/hands-on/',
    category: 'Hands-on Labs',
    level: 'Beginner',
    tags: ['tutorials', 'step-by-step', 'practical'],
    type: 'Tool',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Cloud9',
    description: 'Entorno de desarrollo basado en la nube para escribir, ejecutar y depurar código',
    icon: Code,
    link: 'https://aws.amazon.com/cloud9/',
    category: 'Hands-on Labs',
    level: 'Intermediate',
    tags: ['ide', 'development', 'cloud'],
    type: 'Tool',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Well-Architected Labs',
    description: 'Laboratorios prácticos basados en el marco Well-Architected',
    icon: Wrench,
    link: 'https://wellarchitectedlabs.com/',
    category: 'Hands-on Labs',
    level: 'Advanced',
    tags: ['well-architected', 'best practices', 'hands-on'],
    type: 'Tool',
    isOfficial: true,
    pricing: 'Free'
    },
    // Security
    {
    title: 'AWS Security Hub',
    description: 'Centro para ver y gestionar alertas de seguridad y evaluaciones de cumplimiento',
    icon: ShieldCheck,
    link: 'https://aws.amazon.com/security-hub/',
    category: 'Security',
    level: 'Intermediate',
    tags: ['security', 'compliance', 'monitoring'],
    type: 'Tool',
    isOfficial: true,
    pricing: 'Free'
    },
    {
    title: 'AWS Security Best Practices',
    description: 'Guía completa de mejores prácticas de seguridad en AWS',
    icon: ShieldCheck,
    link: 'https://aws.amazon.com/architecture/security-identity-compliance/',
    category: 'Security',
    level: 'Intermediate',
    tags: ['best practices', 'security', 'compliance'],
    type: 'Documentation',
    isOfficial: true,
    pricing: 'Free'
    },
]

const categories: Category[] = [
  { name: 'All', icon: Cloud, description: 'Todos los recursos de AWS en un solo lugar' },
  { name: 'Introduction to AWS', icon: Book, description: 'Conceptos fundamentales para iniciar con AWS' },
  { name: 'Training and Courses', icon: GraduationCap, description: 'Cursos estructurados para todos los niveles' },
  { name: 'Certifications', icon: Award, description: 'Certificaciones AWS reconocidas en la industria' },
  { name: 'Learning Paths', icon: Compass, description: 'Rutas de progresión según objetivos profesionales' },
  { name: 'Resources by Level', icon: Star, description: 'Material adaptado a tu nivel de experiencia' },
  { name: 'Exam Preparation', icon: FileText, description: 'Recursos para aprobar exámenes de certificación' },
  { name: 'Community and Support', icon: Users, description: 'Comunidad y soporte para usuarios de AWS' },
  { name: 'Hands-on Labs', icon: Terminal, description: 'Ejercicios prácticos para experiencia real' },
  { name: 'Architecture', icon: Cpu, description: 'Mejores prácticas de diseño para soluciones AWS' },
  { name: 'Security', icon: ShieldCheck, description: 'Protección y seguridad para entornos AWS' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
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
      damping: 12
    }
  },
}

export default function AWSHub() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedLevel, setSelectedLevel] = useState<string>('All')
  const [selectedType, setSelectedType] = useState<string>('All')
  const [selectedPricing, setSelectedPricing] = useState<string>('All')
  const [showStats, setShowStats] = useState<boolean>(false)

  const filteredResources = useMemo(() => {
    return resources
      .filter(
        (resource) =>
          (selectedCategory === 'All' || resource.category === selectedCategory) &&
          (selectedLevel === 'All' || resource.level === selectedLevel) &&
          (selectedType === 'All' || resource.type === selectedType) &&
          (selectedPricing === 'All' || resource.pricing === selectedPricing) &&
          (searchTerm === '' ||
            resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      )
  }, [selectedCategory, searchTerm, selectedLevel, selectedType, selectedPricing])

  const resourceStats = useMemo(() => {
    return {
      total: filteredResources.length,
      byLevel: {
        beginner: filteredResources.filter(r => r.level === 'Beginner').length,
        intermediate: filteredResources.filter(r => r.level === 'Intermediate').length,
        advanced: filteredResources.filter(r => r.level === 'Advanced').length,
      },
      byType: {
        courses: filteredResources.filter(r => r.type === 'Course').length,
        documentation: filteredResources.filter(r => r.type === 'Documentation').length,
        videos: filteredResources.filter(r => r.type === 'Video').length,
        tools: filteredResources.filter(r => r.type === 'Tool').length,
      },
      byPricing: {
        free: filteredResources.filter(r => r.pricing === 'Free').length,
        paid: filteredResources.filter(r => r.pricing === 'Paid').length,
      }
    }
  }, [filteredResources])

  return (
    <main className="flex-grow flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
      <FeaturedRecommendations resources={resources} />
      <LearningPathways />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSearchTerm={setSearchTerm}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedPricing={selectedPricing}
        setSelectedPricing={setSelectedPricing}
        showStats={showStats}
        setShowStats={setShowStats}
        stats={resourceStats}
      />

      {showStats && <ResourceDashboard stats={resourceStats} />}

      <ResourceGrid resources={filteredResources} />

      <motion.div
        className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p>Última actualización: Marzo 2025 • Los recursos presentados pueden cambiar sin previo aviso</p>
        <p className="mt-1">Esta página es solo informativa y no está afiliada oficialmente con Amazon Web Services</p>
      </motion.div>
    </main>
  )
}

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  setSearchTerm,
  selectedLevel,
  setSelectedLevel,
  selectedType,
  setSelectedType,
  selectedPricing,
  setSelectedPricing,
  showStats,
  setShowStats,
  stats
}: {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  setSearchTerm: (term: string) => void
  selectedLevel: string
  setSelectedLevel: (level: string) => void
  selectedType: string
  setSelectedType: (type: string) => void
  selectedPricing: string
  setSelectedPricing: (pricing: string) => void
  showStats: boolean
  setShowStats: (show: boolean) => void
  stats: any
}) {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-md p-4 mb-6">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
        {categories.map((category) => (
          <CategoryButton
            key={category.name}
            category={category}
            isSelected={selectedCategory === category.name}
            onClick={() => setSelectedCategory(category.name)}
          />
        ))}
      </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="relative flex-grow w-full sm:w-auto">
            <input
              type="text"
              placeholder="Buscar recursos..."
              className="w-full px-4 py-2 pl-10 rounded-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          </div>

          <div className="flex items-center space-x-2 flex-wrap sm:flex-nowrap gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-3 py-2 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">Todos los niveles</option>
              <option value="Beginner">Principiante</option>
              <option value="Intermediate">Intermedio</option>
              <option value="Advanced">Avanzado</option>
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">Todos los tipos</option>
              <option value="Article">Artículo</option>
              <option value="Course">Curso</option>
              <option value="Video">Video</option>
              <option value="Tool">Herramienta</option>
              <option value="Documentation">Documentación</option>
              <option value="Exam">Examen</option>
              <option value="Community">Comunidad</option>
            </select>
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-3 py-2 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">Todos los precios</option>
              <option value="Free">Gratis</option>
              <option value="Paid">Pago</option>
            </select>

            <motion.button
              className={`px-3 py-2 rounded-md flex items-center ${
                showStats ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => setShowStats(!showStats)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Estadísticas</span>
            </motion.button>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{stats.total} recursos encontrados</span>
          <span>
            {(() => {
              const filters = [selectedCategory, selectedLevel, selectedType, selectedPricing]
                .filter(filter => filter !== 'All');

              return filters.length ? `Filtrado por: ${filters.join(', ')}` : 'Sin filtros aplicados';
            })()}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function ResourceDashboard({ stats }: { stats: any }) {
  return (
    <motion.div
      className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Por nivel</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Principiante</span>
              <span className="font-medium">{stats.byLevel.beginner}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(stats.byLevel.beginner / stats.total) * 100}%` }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Intermedio</span>
              <span className="font-medium">{stats.byLevel.intermediate}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(stats.byLevel.intermediate / stats.total) * 100}%` }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Avanzado</span>
              <span className="font-medium">{stats.byLevel.advanced}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${(stats.byLevel.advanced / stats.total) * 100}%` }}></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Por tipo</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Cursos</span>
              <span className="font-medium">{stats.byType.courses}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${(stats.byType.courses / stats.total) * 100}%` }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Documentación</span>
              <span className="font-medium">{stats.byType.documentation}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(stats.byType.documentation / stats.total) * 100}%` }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Videos</span>
              <span className="font-medium">{stats.byType.videos}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: `${(stats.byType.videos / stats.total) * 100}%` }}></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Por precio</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Gratis</span>
              <span className="font-medium">{stats.byPricing.free}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(stats.byPricing.free / stats.total) * 100}%` }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Pago</span>
              <span className="font-medium">{stats.byPricing.paid}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(stats.byPricing.paid / stats.total) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CategoryButton({
  category,
  isSelected,
  onClick,
}: {
  category: Category
  isSelected: boolean
  onClick: () => void
}) {
  return (
    <motion.div className="relative group">
      <motion.button
        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base ${
          isSelected
            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <category.icon className="h-4 w-4 sm:h-5 sm:w-5" />
        <span>{category.name}</span>
      </motion.button>
    </motion.div>
  )
}

function ResourceGrid({ resources }: { resources: Resource[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-6"
    >
      {resources.length === 0 ? (
        <motion.div
          className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Search className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">No se encontraron recursos</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Intenta ajustar tus filtros para encontrar lo que buscas</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} index={index} />
          ))}
        </div>
      )}
    </motion.div>
  )
}

function ResourceCard({ resource, index }: { resource: Resource, index: number }) {
  return (
    <motion.div
      className="h-full"
      variants={itemVariants}
      custom={index}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg px-4 sm:px-6 py-6 sm:py-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-4">
            <motion.div
              className="inline-flex items-center justify-center p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-sm"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <resource.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
            </motion.div>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                {resource.category}
              </span>
              {resource.isOfficial && (
                <span className="px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  Oficial
                </span>
              )}
            </div>
          </div>

          <h2 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white tracking-tight mb-2">
            {resource.title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
            {resource.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400">{resource.level}</span>
            </div>

            {resource.pricing && (
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <span className={`mr-1 w-2 h-2 rounded-full ${
                  resource.pricing === 'Free' ? 'bg-green-500' :
                  resource.pricing === 'Paid' ? 'bg-blue-500' : 'bg-yellow-500'
                }`}></span>
                {resource.pricing}
              </span>
            )}

            {resource.estimatedTime && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {resource.estimatedTime}
              </span>
            )}

            {resource.language && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {resource.language}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {resource.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
          {resource.lastUpdate && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Actualizado: {resource.lastUpdate}
            </span>
          )}

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

function FeaturedRecommendations({ resources }: { resources: Resource[] }) {
  const featuredResources = resources.filter(r => r.isFeatured).slice(0, 3)

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.7 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredResources.map((resource, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-blue-500 to-indigo-600"
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            <div className="relative h-full p-6 flex flex-col justify-end z-20">
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700 mb-2">
                {resource.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{resource.title}</h3>
              <p className="text-gray-200 text-sm mb-4 line-clamp-2">{resource.description}</p>
              <Link href={resource.link} passHref legacyBehavior>
                <motion.a
                  className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
        ))}
      </div>
    </motion.div>
  )
}

function LearningPathways() {
  const pathways = [
    {
      title: "Cloud Fundamentals",
      steps: ["AWS Cloud Practitioner", "AWS Technical Essentials", "AWS Architecture Fundamentals"],
      icon: Book,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Solutions Architect",
      steps: ["Cloud Practitioner", "Solutions Architect Associate", "Well-Architected Framework", "Solutions Architect Professional"],
      icon: Cpu,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Developer",
      steps: ["Cloud Practitioner", "Developer Associate", "DevOps Tools", "Advanced Development"],
      icon: Code,
      color: "from-green-400 to-green-600",
    },
  ]

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pathways.map((path, index) => (
          <div
            className={`rounded-xl shadow-lg overflow-hidden bg-gradient-to-r ${path.color}`}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="p-2 rounded-full bg-white text-blue-600 mr-3">
                  <path.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-bold text-white">{path.title}</h3>
              </div>
              <div className="space-y-3">
                {path.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white text-blue-600 text-xs font-bold mr-2">
                      {stepIndex + 1}
                    </span>
                    <span className="text-white">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
