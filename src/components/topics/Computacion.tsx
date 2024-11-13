'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cloud,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  RefreshCw,
  DollarSign,
  Lock,
  Layers,
  Terminal,
  Package,
  HardDrive,
  Network,
  Monitor,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  LucideIcon,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'

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

interface Layer {
  name: string
  icon: LucideIcon
}

interface Responsibility {
  [key: string]: 'you' | 'provider'
}

interface ModelResponsibilities {
  [key: string]: Responsibility
}

const layers: Layer[] = [
  { name: 'Applications', icon: Monitor },
  { name: 'Data', icon: Database },
  { name: 'Runtime', icon: Terminal },
  { name: 'Middleware', icon: Package },
  { name: 'O/S', icon: Layers },
  { name: 'Virtualization', icon: Cloud },
  { name: 'Servers', icon: Server },
  { name: 'Storage', icon: HardDrive },
  { name: 'Networking', icon: Network },
]

const models = ['On-site', 'IaaS', 'PaaS', 'SaaS'] as const
type Model = (typeof models)[number]

const responsibilities: ModelResponsibilities = {
  'On-site': {
    Applications: 'you',
    Data: 'you',
    Runtime: 'you',
    Middleware: 'you',
    'O/S': 'you',
    Virtualization: 'you',
    Servers: 'you',
    Storage: 'you',
    Networking: 'you',
  },
  IaaS: {
    Applications: 'you',
    Data: 'you',
    Runtime: 'you',
    Middleware: 'you',
    'O/S': 'you',
    Virtualization: 'provider',
    Servers: 'provider',
    Storage: 'provider',
    Networking: 'provider',
  },
  PaaS: {
    Applications: 'you',
    Data: 'you',
    Runtime: 'provider',
    Middleware: 'provider',
    'O/S': 'provider',
    Virtualization: 'provider',
    Servers: 'provider',
    Storage: 'provider',
    Networking: 'provider',
  },
  SaaS: {
    Applications: 'provider',
    Data: 'provider',
    Runtime: 'provider',
    Middleware: 'provider',
    'O/S': 'provider',
    Virtualization: 'provider',
    Servers: 'provider',
    Storage: 'provider',
    Networking: 'provider',
  },
}

export default function EnhancedCloudModule() {
  const [activeTab, setActiveTab] = useState('introduccion')

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600">
          <CardHeader>
            <CardTitle className="text-4xl font-bold flex items-center text-white">
              <Cloud className="mr-4 h-12 w-12" />
              Computación en la nube: Fundamentos y Estrategias
            </CardTitle>
            <CardDescription className="text-lg text-white dark:text-white">
              Descubre los conceptos esenciales, modelos y estrategias en la
              computación en la nube moderna.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-8"
      >
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            'introduccion',
            'modelos',
            'implementacion',
            'migracion',
            'adopcion',
          ].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="px-4 py-2 rounded-full transition-all duration-200 ease-in-out hover:bg-blue-100 dark:hover:bg-blue-900"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="introduccion">
              <IntroduccionComputacionNube />
            </TabsContent>

            <TabsContent value="modelos">
              <ModelosServicioNube />
            </TabsContent>

            <TabsContent value="implementacion">
              <ModelosImplementacionNube />
            </TabsContent>

            <TabsContent value="migracion">
              <MigracionNube />
            </TabsContent>

            <TabsContent value="adopcion">
              <AdopcionNube />
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </main>
  )
}

function IntroduccionComputacionNube() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400">
              <Cloud className="mr-2 h-6 w-6" />
              ¿Qué es la computación en la nube?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La computación en la nube se refiere a la entrega de recursos y
              servicios de tecnología de la información (TI) a través de
              internet. Esto incluye servidores, almacenamiento, bases de datos,
              redes y software. En lugar de mantener infraestructuras locales,
              las empresas pueden acceder a estos recursos bajo demanda desde
              proveedores de servicios en la nube.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Características clave
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Zap,
                  text: 'Acceso bajo demanda',
                  description:
                    'Los recursos se pueden usar cuando se necesiten, sin necesidad de realizar grandes inversiones previas.',
                },
                {
                  icon: RefreshCw,
                  text: 'Escalabilidad',
                  description:
                    'Es fácil aumentar o disminuir los recursos o servicios utilizados, adaptándose a las necesidades.',
                },
                {
                  icon: DollarSign,
                  text: 'Pago por uso',
                  description:
                    'Solo se paga por los recursos consumidos, evitando costos innecesarios.',
                },
                {
                  icon: Globe,
                  text: 'Acceso global',
                  description:
                    'Los recursos están disponibles desde cualquier lugar con conexión a internet.',
                },
                {
                  icon: Lock,
                  text: 'Seguridad mejorada',
                  description:
                    'Los proveedores de nube ofrecen medidas de seguridad avanzadas y actualizaciones automáticas.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <item.icon className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="block mb-1">{item.text}</strong>
                    <span className="text-sm">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Comparación: On-premise vs Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Server className="h-6 w-6 text-blue-500" />
                  <h3>On-premise</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Control total sobre hardware y software',
                    'Costos iniciales más altos',
                    'Requiere experiencia en TI interna',
                    'Escalabilidad ilimitada',
                    'Responsable de la seguridad y el mantenimiento',
                    'Sin dependencia de internet',
                    'Mayor personalización',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Cloud className="h-6 w-6 text-blue-500" />
                  <h3>Nube</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Modelo de pago por uso',
                    'Escalable y flexible',
                    'Mantenimiento de TI reducido',
                    'Acceso desde cualquier lugar',
                    'Actualizaciones y parches de seguridad automáticos',
                    'Dependencia de la conectividad a internet',
                    'Posibles problemas de seguridad y privacidad',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function ModelosServicioNube() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <ServiceModelComparison />
      </motion.div>
      {[
        {
          title: 'Infraestructura como Servicio (IaaS)',
          icon: Server,
          description:
            'IaaS proporciona recursos informáticos virtualizados a través de internet. Es el modelo de computación en la nube más flexible, ofreciendo control total sobre la infraestructura.',
          examples: [
            'Amazon EC2',
            'Microsoft Azure VMs',
            'Google Compute Engine',
          ],
          use_cases: [
            'Sitios web y aplicaciones web',
            'Computación de alto rendimiento',
            'Análisis de big data',
          ],
          components: [
            'Servidores virtuales',
            'Almacenamiento',
            'Redes',
            'Máquinas virtuales',
          ],
        },
        {
          title: 'Plataforma como Servicio (PaaS)',
          icon: Database,
          description:
            'PaaS proporciona una plataforma que permite a los clientes desarrollar, ejecutar y gestionar aplicaciones sin la complejidad de mantener la infraestructura.',
          examples: [
            'Heroku',
            'Google App Engine',
            'Microsoft Azure App Service',
          ],
          use_cases: [
            'Aplicaciones web y móviles',
            'Desarrollo de APIs',
            'Análisis de negocios',
          ],
          components: [
            'Entornos de desarrollo integrados',
            'Base de datos gestionada',
            'Middleware',
            'Herramientas de desarrollo colaborativo',
          ],
        },
        {
          title: 'Software como Servicio (SaaS)',
          icon: Cloud,
          description:
            'SaaS entrega aplicaciones de software a través de internet, bajo demanda y típicamente en base a suscripción. Los usuarios pueden acceder a las aplicaciones SaaS a través de navegadores web.',
          examples: ['Google Workspace', 'Microsoft 365', 'Salesforce'],
          use_cases: [
            'Gestión de relaciones con clientes',
            'Planificación de recursos empresariales',
            'Herramientas de colaboración',
          ],
          components: [
            'Aplicaciones web',
            'Almacenamiento en la nube',
            'Actualizaciones automáticas',
            'Acceso multiplataforma',
          ],
        },
      ].map((model, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400">
                <model.icon className="mr-2 h-6 w-6" />
                {model.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {model.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Ejemplos:</h4>
                  <ul className="space-y-2">
                    {model.examples.map((example, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <ChevronRight className="h-4 w-4 text-blue-500" />
                        <span>{example}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Casos de Uso:</h4>
                  <ul className="space-y-2">
                    {model.use_cases.map((use_case, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <ChevronRight className="h-4 w-4 text-blue-500" />
                        <span>{use_case}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Componentes clave:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {model.components.map((component, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md text-sm text-gray-700 dark:text-gray-300"
                    >
                      {component}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

function ModelosImplementacionNube() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {[
        {
          title: 'Nube pública',
          icon: Globe,
          description:
            'Los servicios se proporcionan en un entorno virtualizado, construido utilizando recursos físicos compartidos y accesibles a través de una red pública como internet.',
          pros: ['Rentable', 'Altamente escalable', 'Fiabilidad'],
          cons: [
            'Menos control',
            'Posibles preocupaciones de seguridad',
            'Problemas de cumplimiento para algunas industrias',
          ],
        },
        {
          title: 'Nube privada',
          icon: Shield,
          description:
            'La infraestructura en la nube se aprovisiona para uso exclusivo de una sola organización que comprende múltiples consumidores. Puede ser propiedad, gestionada y operada por la organización, un tercero o alguna combinación de ellos.',
          pros: [
            'Mayor seguridad y privacidad',
            'Mayor control',
            'Personalización',
          ],
          cons: [
            'Costos más altos',
            'Escalabilidad limitada',
            'Requiere experiencia interna',
          ],
        },
        {
          title: 'Nube híbrida',
          icon: Layers,
          description:
            'Una composición de dos o más infraestructuras en la nube distintas (privada, comunitaria o pública) que siguen siendo entidades únicas, pero están unidas por tecnología estandarizada o propietaria.',
          pros: ['Flexibilidad', 'Rentabilidad', 'Seguridad mejorada'],
          cons: [
            'Complejidad en la gestión',
            'Posibles desafíos de integración',
            'Requiere una planificación cuidadosa',
          ],
        },
      ].map((model, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400">
                <model.icon className="mr-2 h-6 w-6" />
                {model.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {model.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
                    Ventajas:
                  </h4>
                  <ul className="space-y-2">
                    {model.pros.map((pro, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <ChevronUp className="h-4 w-4 text-green-500" />
                        <span>{pro}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">
                    Desventajas:
                  </h4>
                  <ul className="space-y-2">
                    {model.cons.map((con, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <ChevronDown className="h-4 w-4 text-red-500" />
                        <span>{con}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

function MigracionNube() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Proceso de migración a la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="ml-6 relative border-l border-gray-200 dark:border-gray-700">
              {[
                {
                  title: 'Evaluación y planificación',
                  description:
                    'Evaluar la infraestructura, aplicaciones y datos actuales. Determinar qué cargas de trabajo migrar y en qué orden.',
                },
                {
                  title: 'Elección de un proveedor de nube',
                  description:
                    'Seleccionar un proveedor de nube que mejor se adapte a sus necesidades (por ejemplo, AWS, Azure, Google Cloud).',
                },
                {
                  title: 'Preparación del entorno de destino',
                  description:
                    'Configurar el entorno en la nube, incluyendo redes, seguridad y controles de acceso.',
                },
                {
                  title: 'Migración de datos',
                  description:
                    'Transferir datos a la nube, asegurando la integridad y seguridad durante todo el proceso.',
                },
                {
                  title: 'Migración de aplicaciones',
                  description:
                    'Mover aplicaciones a la nube, potencialmente refactorizándolas para aprovechar las características nativas de la nube.',
                },
                {
                  title: 'Pruebas y validación',
                  description:
                    'Probar exhaustivamente las aplicaciones y datos migrados para asegurar que todo funcione como se espera.',
                },
                {
                  title: 'Cambio y puesta en marcha',
                  description:
                    'Cambiar de la infraestructura local a la infraestructura en la nube, a menudo realizado en fases para minimizar la interrupción.',
                },
                {
                  title: 'Optimización',
                  description:
                    'Monitorear y optimizar continuamente los recursos en la nube para el rendimiento y la eficiencia de costos.',
                },
              ].map((step, index) => (
                <motion.li
                  key={index}
                  className="mb-8 ml-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-blue-800 dark:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    {step.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Estrategias de Migración
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  value: 'rehost',
                  title: 'Realojar (Lift and Shift)',
                  content:
                    'Mover aplicaciones y datos a la nube tal como están, sin cambios significativos. Este es el método más rápido pero no aprovecha al máximo las capacidades de la nube.',
                },
                {
                  value: 'refactor',
                  title: 'Refactorizar (Lift, Tinker, and Shift)',
                  content:
                    'Realizar algunas optimizaciones para aprovechar las capacidades de la nube, pero manteniendo la arquitectura central igual. Modificar aplicaciones para aprovechar mejor las características nativas de la nube.',
                },
                {
                  value: 'revise',
                  title: 'Revisar',
                  content:
                    'Modificar o extender la base de código existente para soportar los requisitos de modernización heredados, luego usar las opciones de realojar o refactorizar para implementar en la nube.',
                },
                {
                  value: 'rebuild',
                  title: 'Reconstruir',
                  content:
                    'Rediseñar la aplicación desde cero utilizando características nativas de la nube. Este es el método más largo pero permite el mejor uso de las capacidades nativas de la nube.',
                },
                {
                  value: 'replace',
                  title: 'Reemplazar',
                  content:
                    'Descartar la aplicación antigua por completo y cambiar a una oferta SaaS ya construida que proporcione una funcionalidad similar.',
                },
              ].map((item, index) => (
                <AccordionItem value={item.value} key={index}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {item.content}
                    </motion.p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function AdopcionNube() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Marco de Adopción de la Nube (CAF)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              El Marco de Adopción de la Nube (CAF) es un conjunto de prácticas
              recomendadas, herramientas y orientación que ayuda a las
              organizaciones a comenzar a utilizar tecnologías en la nube.
              Proporciona mejores prácticas, documentación y herramientas que
              los arquitectos de nube, profesionales de TI y tomadores de
              decisiones empresariales necesitan para lograr sus objetivos a
              corto y largo plazo con éxito.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Componentes Clave:</h4>
                <ul className="space-y-2">
                  {[
                    'Estrategia y Plan',
                    'Preparación',
                    'Adopción',
                    'Gobernanza',
                    'Gestión',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ChevronRight className="h-4 w-4 text-blue-500" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
                  Beneficios:
                </h4>
                <ul className="space-y-2">
                  {[
                    'Acelera la adopción de la nube',
                    'Alinea los objetivos de negocio y TI',
                    'Proporciona una metodología consistente',
                    'Mejora la excelencia operativa',
                    'Identifica deficiencias en habilidades y procesos',
                    'Ayuda a mitigar riesgos',
                    'Gestiona costes',
                    'Garantiza el cumplimiento normativo',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ChevronUp className="h-4 w-4 text-green-500" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Mejores prácticas para la adopción de la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              {[
                {
                  title: 'Comenzar en pequeño',
                  description:
                    'Empezar con cargas de trabajo no críticas para ganar experiencia y confianza.',
                },
                {
                  title: 'Invertir en formación',
                  description:
                    'Asegurar que su equipo tenga las habilidades necesarias para gestionar entornos en la nube.',
                },
                {
                  title: 'Implementar medidas de seguridad sólidas',
                  description:
                    'Utilizar encriptación, controles de acceso y auditorías de seguridad regulares.',
                },
                {
                  title: 'Monitorear costos',
                  description:
                    'Implementar herramientas de gestión de costos para evitar gastos inesperados.',
                },
                {
                  title: 'Automatizar donde sea posible',
                  description:
                    'Utilizar infraestructura como código y pipelines de despliegue automatizados.',
                },
                {
                  title: 'Planificar para la recuperación ante desastres',
                  description:
                    'Implementar estrategias robustas de respaldo y recuperación.',
                },
                {
                  title: 'Evaluar la preparación',
                  description:
                    'Revisar las capacidades tecnológicas, las necesidades del negocio y las habilidades del equipo antes de la migración.',
                },
                {
                  title: 'Definir objetivos claros',
                  description:
                    'Establecer metas específicas para la migración a la nube, como mejorar la agilidad o reducir costos.',
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ArrowRight className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <strong>{item.title}:</strong> {item.description}
                  </div>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function ServiceModelComparison() {
  const [selectedModels, setSelectedModels] = useState<Model[]>([
    'On-site',
    'IaaS',
    'PaaS',
    'SaaS',
  ])

  const toggleModel = (model: Model) => {
    setSelectedModels((prev) => {
      if (prev.includes(model)) {
        return prev.length === 1 ? prev : prev.filter((m) => m !== model)
      }
      return [...prev, model].sort(
        (a, b) => models.indexOf(a) - models.indexOf(b),
      )
    })
  }

  return (
    <Card className="bg-white dark:bg-gray-800/80 shadow-md dark:shadow-none overflow-hidden">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          Comparación de modelos de servicio en la nube
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Seleccione los modelos para comparar sus responsabilidades
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap justify-center gap-2">
          {models.map((model) => (
            <Button
              key={model}
              onClick={() => toggleModel(model)}
              variant={selectedModels.includes(model) ? 'default' : 'outline'}
              className={`
                px-4 py-2 rounded-lg
                ${
                  selectedModels.includes(model)
                    ? 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/50 hover:bg-blue-200'
                    : 'bg-gray-100 text-gray-700 border-gray-300 dark:bg-slate-800/50 dark:text-slate-400 dark:border-slate-700'
                }
              `}
            >
              {model}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((model) => (
            <motion.div
              key={model}
              initial={false}
              animate={{
                opacity: selectedModels.includes(model) ? 1 : 0.3,
                scale: selectedModels.includes(model) ? 1 : 0.95,
              }}
              className="space-y-2"
            >
              <h3 className="text-center text-lg font-semibold">{model}</h3>
              {layers.map((layer) => (
                <motion.div
                  key={`${model}-${layer.name}`}
                  initial={false}
                  animate={{
                    opacity: selectedModels.includes(model) ? 1 : 0.5,
                    scale: selectedModels.includes(model) ? 1 : 0.98,
                  }}
                  className={`
                    flex items-center gap-2 p-3 rounded-lg
                    ${
                      responsibilities[model][layer.name] === 'you'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300'
                        : 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300'
                    }
                  `}
                >
                  <layer.icon className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm">{layer.name}</span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-emerald-100 dark:bg-emerald-500/20 rounded-sm border border-emerald-300 dark:border-emerald-500/30" />
            <span className="text-emerald-700 dark:text-emerald-300">
              Usted gestiona
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-100 dark:bg-red-500/20 rounded-sm border border-red-300 dark:border-red-500/30" />
            <span className="text-red-700 dark:text-red-300">
              El proveedor de servicios gestiona
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
