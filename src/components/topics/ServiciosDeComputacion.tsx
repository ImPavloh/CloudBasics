'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cloud,
  Server,
  Database,
  Globe,
  Shield,
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

export default function ServiciosDeComputoEnLaNube() {
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
              <Server className="mr-4 h-12 w-12" />
              Servicios de Cómputo en la Nube: Conceptos y Estrategias
            </CardTitle>
            <CardDescription className="text-lg text-white dark:text-white">
              Explora los fundamentos de los servicios de cómputo en la nube, modelos de despliegue y mejores prácticas.
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
            'principios_servicios_computo',
            'diferentes_servicios_computo',
            'seguridad_administrados_despliegue',
            'servicios_funciones_sin_servidor',
            'maquinas_virtuales',
            'optimizacion_costes_maquinas_virtuales',
            'servicios_contendores_cluster',
            'introduccion_computacion_sin_servidor',
            'introduccion_servicios_administrados_computo',
          ].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="px-4 py-2 rounded-full transition-all duration-200 ease-in-out hover:bg-blue-100 dark:hover:bg-blue-900"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('_', ' ')}
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
              <IntroduccionServiciosComputo />
            </TabsContent>

            <TabsContent value="principios_servicios_computo">
              <PrincipiosServiciosComputo />
            </TabsContent>

            <TabsContent value="diferentes_servicios_computo">
              <DiferentesServiciosComputo />
            </TabsContent>

            <TabsContent value="seguridad_administrados_despliegue">
              <SeguridadAdministradosDespliegue />
            </TabsContent>

            <TabsContent value="servicios_funciones_sin_servidor">
              <ServiciosFuncionesSinServidor />
            </TabsContent>

            <TabsContent value="maquinas_virtuales">
              <MaquinasVirtuales />
            </TabsContent>

            <TabsContent value="optimizacion_costes_maquinas_virtuales">
              <OptimizacionCostesMaquinasVirtuales />
            </TabsContent>

            <TabsContent value="servicios_contendores_cluster">
              <ServiciosContenedoresCluster />
            </TabsContent>

            <TabsContent value="introduccion_computacion_sin_servidor">
              <IntroduccionComputacionSinServidor />
            </TabsContent>

            <TabsContent value="introduccion_servicios_administrados_computo">
              <IntroduccionServiciosAdministradosComputo />
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </main>
  )
}

function IntroduccionServiciosComputo() {
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
              Introducción a los Servicios de Cómputo en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Los servicios de cómputo en la nube permiten a individuos y organizaciones acceder a capacidades de procesamiento, almacenamiento y redes de manera flexible y escalable, sin necesidad de invertir en infraestructura física propia.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Definición y Concepto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              El cómputo en la nube se refiere a la entrega de recursos informáticos bajo demanda a través de Internet.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Historia y Evolución
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              El concepto de cómputo en la nube surge con el avance de la virtualización y la computación distribuida, evolucionando desde los primeros servicios de Internet en la década de 1960 hasta plataformas modernas como AWS, Azure y Google Cloud.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Características Clave
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Autoservicio bajo demanda',
                  description: 'Los usuarios pueden aprovisionar recursos sin intervención manual del proveedor.',
                },
                {
                  text: 'Acceso a través de la red',
                  description: 'Los recursos se acceden mediante Internet desde cualquier ubicación.',
                },
                {
                  text: 'Agrupación de recursos',
                  description: 'Se comparten infraestructuras para maximizar eficiencia y reducir costos.',
                },
                {
                  text: 'Escalabilidad rápida',
                  description: 'Posibilidad de aumentar o reducir recursos según la demanda.',
                },
                {
                  text: 'Pago por uso',
                  description: 'Modelo de facturación basado en el consumo real de los servicios.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Modelos de Despliegue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Nube Pública',
                  description: 'Infraestructura compartida entre múltiples clientes, administrada por proveedores como AWS o Google Cloud.',
                },
                {
                  text: 'Nube Privada',
                  description: 'Infraestructura dedicada exclusivamente a una organización, proporcionando mayor control y seguridad.',
                },
                {
                  text: 'Nube Híbrida',
                  description: 'Combinación de nubes públicas y privadas, permitiendo una gestión flexible de recursos.',
                },
                {
                  text: 'Multinube',
                  description: 'Uso de múltiples proveedores de nube para mejorar disponibilidad y reducir riesgos.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Beneficios del Cómputo en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Reducción de costos',
                  description: 'Elimina la necesidad de infraestructura física propia y hardware de coste elevado.',
                },
                {
                  text: 'Mayor disponibilidad y resiliencia',
                  description: 'Replicación de datos en múltiples ubicaciones y soluciones de backup.',
                },
                {
                  text: 'Facilidad de gestión y mantenimiento',
                  description: 'Automatización de tareas administrativas.',
                },
                {
                  text: 'Seguridad y cumplimiento normativo',
                  description: 'Herramientas avanzadas de protección y control de acceso.',
                },
                {
                  text: 'Escalabilidad',
                  description: 'Permite aumentar o disminuir los recursos según la demanda.',
                },
                {
                  text: 'Flexibilidad',
                  description: 'Acceso a los recursos desde cualquier lugar.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Desafíos y Consideraciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Seguridad y privacidad',
                  description: 'Gestión de datos en la nube requiere estrictos controles de acceso y cifrado.',
                },
                {
                  text: 'Dependencia del proveedor',
                  description: 'El uso de plataformas propietarias puede generar riesgos de bloqueo tecnológico.',
                },
                {
                  text: 'Latencia y conectividad',
                  description: 'La calidad del servicio depende de una conexión estable a Internet.',
                },
                {
                  text: 'Cumplimiento legal y regulatorio',
                  description: 'Empresas de ciertos sectores deben garantizar el cumplimiento de normativas de protección de datos.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Ejemplos de Uso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Plataformas de streaming',
                  description: 'Netflix utiliza la nube para la entrega de contenido multimedia.',
                },
                {
                  text: 'Aplicaciones empresariales',
                  description: 'SAP o Salesforce operan en la nube para mejorar eficiencia y colaboración.',
                },
                {
                  text: 'Inteligencia Artificial y Big Data',
                  description: 'Tesla y Google utilizan la nube para entrenar modelos de IA y procesar grandes volúmenes de datos.',
                },
                {
                  text: 'Desarrollo de software',
                  description: 'Equipos de desarrollo emplean servicios como GitHub Codespaces o AWS Lambda para crear aplicaciones sin preocuparse por la infraestructura.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tendencias y Futuro del Cómputo en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Computación sin servidor (Serverless)',
                  description: 'Modelo en el que los desarrolladores solo se enfocan en el código sin gestionar servidores.',
                },
                {
                  text: 'Computación en el borde (Edge Computing)',
                  description: 'Procesamiento de datos cerca del origen para reducir latencia.',
                },
                {
                  text: 'Inteligencia Artificial y automatización',
                  description: 'Integración de IA para mejorar la eficiencia operativa.',
                },
                {
                  text: 'Computación cuántica en la nube',
                  description: 'Propuesta emergente con potencial para revolucionar la computación en el futuro.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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
    </motion.div>
  )
}

function PrincipiosServiciosComputo() {
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
              <Layers className="mr-2 h-6 w-6" />
              Principios de los Servicios de Cómputo en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Los servicios de cómputo en la nube se basan en principios fundamentales que garantizan su eficiencia, escalabilidad y disponibilidad.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Elasticidad y Escalabilidad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La elasticidad permite aumentar o reducir automáticamente los recursos de cómputo en función de la demanda. La escalabilidad se refiere a la habilidad de un sistema para aumentar su capacidad de procesamiento de manera controlada y sostenida.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Pago por Uso (Pay-as-you-go)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Este principio implica que los usuarios solo pagan por los recursos que consumen, eliminando la necesidad de inversiones iniciales en infraestructura.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Acceso Remoto y Ubicuidad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Los servicios de cómputo en la nube permiten acceder a los recursos desde cualquier lugar con conexión a Internet.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Virtualización
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La virtualización es una tecnología clave en la computación en la nube que permite crear múltiples entornos de cómputo dentro de un mismo hardware físico.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Seguridad y Aislamiento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Los servicios de cómputo en la nube implementan medidas de seguridad como cifrado de datos, autenticación multifactor y control de acceso basado en roles.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Automatización y Autoservicio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La automatización permite que los usuarios aprovisionen, configuren y administren recursos sin intervención manual del proveedor de la nube.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Disponibilidad y Tolerancia a Fallos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Los proveedores de nube garantizan alta disponibilidad mediante la replicación de datos en múltiples ubicaciones geográficas y la implementación de mecanismos de recuperación ante desastres.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Interoperabilidad y Portabilidad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La interoperabilidad se refiere a la capacidad de los servicios en la nube para interactuar con diferentes sistemas y aplicaciones, mientras que la portabilidad permite migrar servicios entre distintos proveedores sin grandes complicaciones.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function DiferentesServiciosComputo() {
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
              <Terminal className="mr-2 h-6 w-6" />
              Diferentes Servicios de Cómputo en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Los servicios de cómputo en la nube se dividen en diferentes categorías según el nivel de control, administración y abstracción que ofrecen a los usuarios.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Infraestructura como Servicio (IaaS)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Los proveedores de la nube ofrecen recursos de infraestructura virtualizados, como servidores, almacenamiento y redes, a través de Internet. Los usuarios tienen control sobre la configuración y administración de estos recursos, pero no sobre el hardware físico.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Plataforma como Servicio (PaaS)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Proporciona entornos de desarrollo preconfigurados que incluyen sistemas operativos, bases de datos, herramientas de desarrollo y middleware. Los desarrolladores pueden centrarse en la creación de software sin preocuparse por la infraestructura subyacente.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Software como Servicio (SaaS)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Permite a los usuarios acceder a aplicaciones completamente gestionadas a través de Internet. No requieren instalación ni mantenimiento, ya que el proveedor se encarga de su administración.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Computación sin Servidor (Serverless Computing)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Modelo en el que los desarrolladores ejecutan código sin administrar servidores. Los recursos se asignan dinámicamente y los usuarios solo pagan por el tiempo de ejecución del código.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Contenedores como Servicio (CaaS)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Permiten empaquetar aplicaciones con todas sus dependencias en entornos portables y ligeros. CaaS proporciona una plataforma administrada para ejecutar y escalar contenedores sin gestionar la infraestructura subyacente.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Funciones como Servicio (FaaS)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Modelo de computación sin servidor en el que los desarrolladores ejecutan funciones independientes en respuesta a eventos específicos, pagando solo por la ejecución.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function SeguridadAdministradosDespliegue() {
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
              <Shield className="mr-2 h-6 w-6" />
              Seguridad Administrados de Despliegue de Aplicaciones Web
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Los servicios administrados de despliegue de aplicaciones web permiten el alojamiento, escalado y mantenimiento automático de aplicaciones sin que el usuario tenga que gestionar la infraestructura subyacente.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Definición de Servicios Administrados de Despliegue de Aplicaciones Web
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Plataformas en la nube que permiten el despliegue y la gestión de aplicaciones sin que los desarrolladores tengan que administrar servidores.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tipos de Servicios Administrados para Aplicaciones Web
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Plataforma como Servicio (PaaS) para Aplicaciones Web',
                  description: 'Permite ejecutar aplicaciones en múltiples lenguajes de programación, gestionando automáticamente el escalado y la seguridad.',
                },
                {
                  text: 'Servicios de Contenedores Administrados',
                  description: 'Permiten empaquetar y ejecutar aplicaciones de forma portátil en entornos administrados.',
                },
                {
                  text: 'Servicios de Computación Sin Servidor (Serverless Computing)',
                  description: 'Ejecutan funciones en respuesta a eventos sin requerir infraestructura persistente.',
                },
                {
                  text: 'Servicios de Hosting Administrado',
                  description: 'Permiten alojar y administrar sitios web y aplicaciones de manera sencilla sin preocuparse por servidores ni infraestructura compleja.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Casos de Uso de Servicios Administrados para Aplicaciones Web
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Comercio Electrónico Escalable',
                  description: 'Un negocio de ventas en línea experimenta picos de tráfico en fechas especiales. Con AWS Elastic Beanstalk, su aplicación se escala automáticamente para manejar la demanda sin interrupciones.',
                },
                {
                  text: 'Aplicaciones Web de Alto Tráfico',
                  description: 'Una red social emergente necesita responder a millones de solicitudes diarias. Utilizando Google Kubernetes Engine (GKE), pueden distribuir su carga de manera eficiente y optimizar la disponibilidad de la aplicación.',
                },
                {
                  text: 'Funciones de Procesamiento de Datos',
                  description: 'Un sistema de análisis de datos requiere ejecutar procesos periódicos sin mantener servidores en línea. Con Azure Functions, pueden automatizar el análisis de datos en tiempo real y reducir costos operativos.',
                },
                {
                  text: 'Despliegue de Aplicaciones en Tiempo Récord',
                  description: 'Un equipo de desarrollo necesita iterar rápidamente sobre una aplicación en fase de prueba. Con Vercel, pueden desplegar cambios en segundos con integración continua y control de versiones.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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
    </motion.div>
  )
}

function ServiciosFuncionesSinServidor() {
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
              <Package className="mr-2 h-6 w-6" />
              Servicios de Funciones sin Servidor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La computación sin servidor permite ejecutar código sin administrar servidores. Los recursos se asignan dinámicamente y los usuarios solo pagan por el tiempo de ejecución del código.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Definición de Servicios de Funciones sin Servidor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Plataformas en la nube que permiten la ejecución de funciones de software en respuesta a eventos sin requerir la gestión de infraestructura subyacente.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Principales Servicios de Funciones sin Servidor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'AWS Lambda',
                  description: 'Ejecuta código en respuesta a eventos generados por otros servicios de AWS o fuentes externas.',
                },
                {
                  text: 'Azure Functions',
                  description: 'Permite la ejecución de funciones en la nube de manera escalable y con integración nativa a otros servicios de Azure.',
                },
                {
                  text: 'Google Cloud Functions',
                  description: 'Servicio que permite la ejecución de código sin servidor en la nube de Google, con integración directa a servicios como Google Cloud Storage, Firebase y Pub/Sub.',
                },
                {
                  text: 'IBM Cloud Functions',
                  description: 'Plataforma basada en Apache OpenWhisk para la ejecución de funciones sin servidor en entornos empresariales.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Casos de Uso de Funciones sin Servidor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Automatización de Procesos Empresariales',
                  description: 'Tareas como copias de seguridad, mantenimiento de bases de datos y otras tareas programadas pueden ser automatizadas utilizando funciones sin servidor.',
                },
                {
                  text: 'Procesamiento de Datos en Tiempo Real',
                  description: 'Ideal para aplicaciones que necesitan procesar datos en tiempo real, como la transmisión de datos de dispositivos IoT.',
                },
                {
                  text: 'Backend para Aplicaciones Móviles',
                  description: 'Pueden ser desarrollados y desplegados utilizando arquitecturas sin servidor, permitiendo una gestión eficiente de la carga de trabajo variable.',
                },
                {
                  text: 'Integración de Servicios en la Nube',
                  description: 'Facilita la construcción de APIs y microservicios, ya que cada función puede representar un endpoint de API o un microservicio individual.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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
    </motion.div>
  )
}

function MaquinasVirtuales() {
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
              <HardDrive className="mr-2 h-6 w-6" />
              Máquinas Virtuales en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Las máquinas virtuales en la nube son instancias de software que emulan el hardware de un sistema informático, permitiendo la ejecución de sistemas operativos y aplicaciones de manera aislada del hardware físico.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Definición de Máquina Virtual en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Una máquina virtual en la nube es un recurso de cómputo que se ejecuta sobre una infraestructura virtualizada en un entorno de nube, proporcionando la capacidad de ejecutar aplicaciones y servicios de forma similar a un servidor físico, pero con mayor flexibilidad y escalabilidad.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tipos de Máquinas Virtuales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Propósito general',
                  description: 'Ofrecen un equilibrio de recursos de cómputo, memoria y red, lo que las hace adecuadas para una amplia variedad de cargas de trabajo.',
                },
                {
                  text: 'Optimizadas para computación',
                  description: 'Ofrecen mayor capacidad de procesamiento. Su uso es ideal para cargas de trabajo intensivas en CPU como análisis de datos, cálculos científicos y servidores web de alto rendimiento.',
                },
                {
                  text: 'Optimizadas para memoria',
                  description: 'Tienen una mayor capacidad de memoria RAM. Son ideales para aplicaciones que manejan grandes volúmenes de datos en memoria, bases de datos de alta escala y análisis en tiempo real.',
                },
                {
                  text: 'Optimizadas para almacenamiento',
                  description: 'Tienen un mayor rendimiento de IOPS (operaciones de entrada/salida por segundo) y capacidad de almacenamiento. Son ideales para bases de datos grandes, análisis de big data y aplicaciones que requieren alta velocidad de acceso a datos.',
                },
                {
                  text: 'Aceleradas por GPU',
                  description: 'Incluyen unidades de procesamiento gráfico (GPU). Son adecuadas para cargas de trabajo intensivas en gráficos y cómputo, como aprendizaje automático, renderizado 3D y simulaciones científicas.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Proveedores y Servicios de Máquinas Virtuales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Amazon Elastic Compute Cloud (EC2)',
                  description: 'Servicio de instancias virtuales de AWS que permite ejecutar aplicaciones en una infraestructura escalable y con opciones de personalización en términos de almacenamiento, redes y seguridad.',
                },
                {
                  text: 'Azure Virtual Machines',
                  description: 'Microsoft Azure proporciona VMs con integración nativa a su ecosistema de servicios en la nube, permitiendo desplegar aplicaciones con compatibilidad para sistemas Windows y Linux.',
                },
                {
                  text: 'Google Compute Engine (GCE)',
                  description: 'Permite la ejecución de máquinas virtuales con una infraestructura altamente optimizada y con opciones avanzadas de networking y almacenamiento.',
                },
                {
                  text: 'IBM Cloud Virtual Servers',
                  description: 'IBM Cloud ofrece servidores virtuales con alto rendimiento para cargas de trabajo empresariales, incluyendo inteligencia artificial y análisis de datos.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Casos de Uso de Máquinas Virtuales en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Desarrollo y Pruebas de Software',
                  description: 'Un equipo de desarrollo utiliza máquinas virtuales en la nube para probar aplicaciones en distintos sistemas operativos sin necesidad de contar con hardware físico adicional.',
                },
                {
                  text: 'Hosting de Aplicaciones Web',
                  description: 'Una startup lanza su plataforma web en una instancia de AWS EC2, permitiendo una rápida expansión sin inversiones iniciales en infraestructura.',
                },
                {
                  text: 'Análisis de Grandes Volúmenes de Datos',
                  description: 'Un centro de investigación en biotecnología emplea Google Compute Engine para realizar simulaciones de secuencias genéticas de alto consumo computacional.',
                },
                {
                  text: 'Backup y Recuperación ante Desastres',
                  description: 'Una empresa de seguros mantiene instancias virtuales en Microsoft Azure con copias de seguridad automatizadas, asegurando la continuidad del negocio ante posibles fallos.',
                },
                {
                  text: 'Aplicaciones de Inteligencia Artificial y Machine Learning',
                  description: 'Una compañía de comercio digital implementa IBM Cloud Virtual Servers con GPUs para entrenar modelos de aprendizaje profundo que optimizan la personalización de recomendaciones para clientes.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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
    </motion.div>
  )
}

function OptimizacionCostesMaquinasVirtuales() {
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
              <Monitor className="mr-2 h-6 w-6" />
              Optimización de Costes en Máquinas Virtuales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La optimización de costes en máquinas virtuales es un proceso mediante el cual se buscan estrategias para reducir el gasto en recursos computacionales sin comprometer el rendimiento, la seguridad o la disponibilidad de los servicios en la nube.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Principios de la Optimización de Costes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Dimensionamiento adecuado',
                  description: 'Ajustar los recursos de CPU, memoria y almacenamiento según las necesidades reales de la carga de trabajo.',
                },
                {
                  text: 'Uso eficiente del almacenamiento',
                  description: 'Seleccionar tipos de almacenamiento adecuados y evitar la retención innecesaria de datos.',
                },
                {
                  text: 'Automatización y escalabilidad',
                  description: 'Configurar el escalado automático para garantizar que solo se utilicen recursos cuando sean necesarios.',
                },
                {
                  text: 'Uso de instancias reservadas y descuentos',
                  description: 'Aprovechar planes de pago que reduzcan costos a largo plazo.',
                },
                {
                  text: 'Monitorización y análisis de costos',
                  description: 'Identificar oportunidades de ahorro mediante herramientas de análisis de consumo en la nube.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Estrategias para la Optimización de Costes en Máquinas Virtuales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Selección del Tipo de Máquina Virtual',
                  description: 'Los proveedores de nube ofrecen diferentes tipos de máquinas virtuales diseñadas para distintos casos de uso. Seleccionar la instancia correcta es fundamental para evitar pagar por recursos innecesarios.',
                },
                {
                  text: 'Escalado Automático (Auto Scaling)',
                  description: 'El escalado automático permite ajustar dinámicamente el número de máquinas virtuales en función de la demanda. Esto evita el sobreaprovisionamiento y garantiza que los recursos solo se utilicen cuando sea necesario.',
                },
                {
                  text: 'Uso de Instancias Reservadas y Planes de Pago por Adelantado',
                  description: 'Las instancias reservadas permiten comprometerse a utilizar máquinas virtuales por un período prolongado a cambio de descuentos significativos.',
                },
                {
                  text: 'Optimización del Uso del Almacenamiento',
                  description: 'El almacenamiento de datos asociado a las máquinas virtuales puede generar costos elevados si no se gestiona correctamente. Se recomienda utilizar almacenamiento de menor costo para datos que no requieren acceso frecuente y configurar la eliminación automática de discos persistentes no utilizados.',
                },
                {
                  text: 'Monitorización y Ajuste de Recursos',
                  description: 'El uso de herramientas de monitorización ayuda a identificar desperdicio de recursos y ajustar la configuración de las máquinas virtuales según el consumo real.',
                },
                {
                  text: 'Uso de Contenedores en Lugar de Máquinas Virtuales',
                  description: 'En ciertos casos, el uso de contenedores en lugar de máquinas virtuales puede optimizar costos, ya que los contenedores comparten el mismo sistema operativo y requieren menos recursos.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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
    </motion.div>
  )
}

function ServiciosContenedoresCluster() {
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
              <Database className="mr-2 h-6 w-6" />
              Servicios de Contenedores en un Clúster de Servicios Administrados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Un clúster de servicios administrados de contenedores es un conjunto de servidores que trabajan juntos para ejecutar y gestionar contenedores de manera eficiente. Los proveedores de servicios en la nube ofrecen soluciones administradas que automatizan la orquestación, el escalado y la gestión de estos contenedores.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Introducción a los Contenedores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Un contenedor es una unidad estándar de software que empaqueta código y todas sus dependencias para que una aplicación se ejecute de manera rápida y confiable en cualquier entorno.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Características Principales de los Contenedores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Portabilidad',
                  description: 'Los contenedores permiten ejecutar aplicaciones en distintos entornos sin necesidad de modificaciones.',
                },
                {
                  text: 'Aislamiento',
                  description: 'Los contenedores proporcionan un entorno aislado para ejecutar aplicaciones, lo que asegura que no interfieran entre sí.',
                },
                {
                  text: 'Eficiencia',
                  description: 'Utilizan menos recursos que las máquinas virtuales al compartir el mismo núcleo del sistema operativo.',
                },
                {
                  text: 'Escalabilidad',
                  description: 'Pueden ser replicados y desplegados fácilmente según la demanda.',
                },
                {
                  text: 'Rapidez',
                  description: 'Se inician en segundos, a diferencia de las máquinas virtuales que requieren un proceso de arranque más largo.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Servicios de Contenedores Administrados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Amazon Elastic Kubernetes Service (EKS)',
                  description: 'Servicio administrado de Kubernetes en AWS.',
                },
                {
                  text: 'Google Kubernetes Engine (GKE)',
                  description: 'Plataforma de Google Cloud para ejecutar Kubernetes.',
                },
                {
                  text: 'Azure Kubernetes Service (AKS)',
                  description: 'Servicio de Kubernetes administrado en Microsoft Azure.',
                },
                {
                  text: 'Amazon Elastic Container Service (ECS)',
                  description: 'Plataforma de orquestación de contenedores propia de AWS.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Casos de Uso de los Contenedores y Clústeres Administrados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Microservicios',
                  description: 'Los microservicios son una arquitectura en la que una aplicación se divide en múltiples servicios independientes que pueden desarrollarse, implementarse y escalarse de manera autónoma.',
                },
                {
                  text: 'Computación en la Nube Híbrida',
                  description: 'Los contenedores permiten que las aplicaciones se ejecuten sin problemas en entornos híbridos (combinación de nube pública y privada) al ofrecer portabilidad y estandarización.',
                },
                {
                  text: 'Pruebas y Desarrollo Ágil',
                  description: 'Los contenedores permiten crear entornos de desarrollo consistentes, reduciendo problemas de compatibilidad entre distintas configuraciones.',
                },
                {
                  text: 'Implementación Continua y Entrega Continua (CI/CD)',
                  description: 'Los contenedores facilitan la integración y despliegue continuo al permitir actualizaciones rápidas sin afectar la disponibilidad del servicio.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tecnologías y Herramientas de Contenedores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Docker',
                  description: 'Plataforma líder en la creación y gestión de contenedores. Permite a los desarrolladores empaquetar aplicaciones en imágenes portables que pueden ejecutarse en cualquier sistema compatible con Docker.',
                },
                {
                  text: 'Podman',
                  description: 'Alternativa a Docker que no requiere un demonio en ejecución y proporciona una mayor flexibilidad en términos de seguridad y gestión de contenedores.',
                },
                {
                  text: 'LXC (Linux Containers)',
                  description: 'Tecnología más ligera que permite la ejecución de múltiples instancias de sistemas operativos en un solo núcleo de Linux.',
                },
                {
                  text: 'Buildah',
                  description: 'Herramienta para construir imágenes de contenedores sin necesidad de un daemon central. Se utiliza ampliamente en entornos de desarrollo y CI/CD (Integración y entrega continua).',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Orquestación de Contenedores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La orquestación de contenedores es el proceso de automatizar la implementación, escalado, administración y networking de contenedores en un entorno de producción.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Principales Herramientas de Orquestación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Kubernetes',
                  description: 'Plataforma de orquestación de contenedores más utilizada en la actualidad. Permite la gestión automatizada de contenedores a través de un clúster de servidores.',
                },
                {
                  text: 'Docker Swarm',
                  description: 'Solución de orquestación de Docker que permite agrupar múltiples hosts que ejecutan Docker en un solo clúster lógico.',
                },
                {
                  text: 'Apache Mesos y Marathon',
                  description: 'Apache Mesos es un sistema de gestión de recursos para infraestructuras distribuidas, mientras que Marathon es un framework de orquestación que se ejecuta sobre Mesos.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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
    </motion.div>
  )
}

function IntroduccionComputacionSinServidor() {
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
              <Network className="mr-2 h-6 w-6" />
              Introducción a la Computación sin Servidor (Serverless)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La computación sin servidor es un modelo de ejecución en la nube donde el proveedor gestiona completamente la infraestructura, permitiendo a los desarrolladores enfocarse exclusivamente en la lógica de la aplicación.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Definición de Computación sin Servidor (Serverless)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La computación sin servidor es un modelo de desarrollo y ejecución de aplicaciones en el que el proveedor de servicios en la nube gestiona la infraestructura de servidores y asigna recursos automáticamente.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Características Clave de la Computación sin Servidor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Gestión automática de infraestructura',
                  description: 'Los desarrolladores no tienen que administrar servidores ni preocuparse por la configuración y mantenimiento de hardware o software.',
                },
                {
                  text: 'Escalabilidad bajo demanda',
                  description: 'La capacidad de cómputo se ajusta automáticamente según la carga de trabajo, optimizando el uso de recursos.',
                },
                {
                  text: 'Modelo de pago por uso',
                  description: 'Los costos se calculan en función del tiempo de ejecución y los recursos consumidos en lugar de instancias predefinidas.',
                },
                {
                  text: 'Ejecución basada en eventos',
                  description: 'Los servicios sin servidor se activan por eventos como peticiones HTTP, cambios en bases de datos o mensajes en colas de procesamiento.',
                },
                {
                  text: 'Reducción del tiempo de implementación',
                  description: 'Permite a los equipos de desarrollo desplegar nuevas funcionalidades rápidamente sin preocuparse por la infraestructura subyacente.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Ejemplos de Servicios sin Servidor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'AWS Lambda',
                  description: 'Plataforma de funciones sin servidor de Amazon que permite ejecutar código en respuesta a eventos sin gestionar servidores.',
                },
                {
                  text: 'Google Cloud Functions',
                  description: 'Servicio que permite la ejecución de código sin servidor en la nube de Google, con integración directa a servicios como Google Cloud Storage, Firebase y Pub/Sub.',
                },
                {
                  text: 'Azure Functions',
                  description: 'Solución de Microsoft que ofrece ejecución sin servidor con integración en múltiples servicios de Azure.',
                },
                {
                  text: 'IBM Cloud Functions',
                  description: 'Plataforma basada en Apache OpenWhisk para la ejecución de funciones sin servidor con integración en servicios de IBM Cloud.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Casos de Uso en la Vida Real
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Procesamiento de imágenes y videos',
                  description: 'Empresas de comercio electrónico utilizan AWS Lambda para redimensionar imágenes de productos en tiempo real sin necesidad de servidores dedicados.',
                },
                {
                  text: 'Automatización de respuestas a eventos',
                  description: 'Un servicio financiero puede usar Google Cloud Functions para enviar notificaciones automáticas cuando un usuario realiza una transacción sospechosa.',
                },
                {
                  text: 'Backend para aplicaciones móviles',
                  description: 'Aplicaciones como servicios de mensajería utilizan Azure Functions para gestionar autenticación de usuarios sin necesidad de mantener servidores dedicados.',
                },
                {
                  text: 'Análisis de datos en tiempo real',
                  description: 'Un servicio de análisis de redes sociales puede utilizar funciones sin servidor para procesar grandes volúmenes de datos a medida que se reciben, mejorando la toma de decisiones en tiempo real.',
                },
                {
                  text: 'Automatización de tareas empresariales',
                  description: 'Empresas pueden emplear funciones sin servidor para la generación automática de reportes, gestión de facturas o actualización de bases de datos, optimizando procesos internos.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Ventajas y Desafíos de la Computación sin Servidor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Reducción de costos operativos',
                  description: 'No es necesario pagar por servidores en reposo, solo por el tiempo de ejecución de las funciones.',
                },
                {
                  text: 'Mayor agilidad en el desarrollo',
                  description: 'Permite la entrega rápida de nuevas funcionalidades sin preocuparse por la infraestructura subyacente.',
                },
                {
                  text: 'Escalabilidad automática',
                  description: 'Se adapta de forma dinámica a la demanda, mejorando la eficiencia en el uso de recursos.',
                },
                {
                  text: 'Mejora la resiliencia y disponibilidad',
                  description: 'Reduce los puntos de fallo al distribuir la ejecución en múltiples entornos gestionados por el proveedor.',
                },
                {
                  text: 'Dependencia del proveedor de la nube',
                  description: 'La computación sin servidor está estrechamente vinculada a los servicios y limitaciones del proveedor elegido.',
                },
                {
                  text: 'Latencia en la ejecución de funciones',
                  description: 'En algunos casos, el tiempo de activación de una función puede introducir una latencia adicional.',
                },
                {
                  text: 'Dificultad en la depuración y monitoreo',
                  description: 'Debido a su naturaleza efímera, puede ser complejo rastrear y depurar errores en la ejecución de funciones.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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
    </motion.div>
  )
}

function IntroduccionServiciosAdministradosComputo() {
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
              <Lock className="mr-2 h-6 w-6" />
              Introducción a los Servicios Administrados de Cómputo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Los servicios administrados de cómputo en la nube son soluciones tecnológicas en las que un proveedor de nube se encarga de gestionar, mantener y optimizar la infraestructura de cómputo subyacente.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Características Principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Automatización y gestión simplificada',
                  description: 'Los servicios administrados automatizan tareas como la implementación de parches de seguridad, las copias de seguridad y la supervisión del rendimiento, lo que reduce la carga operativa.',
                },
                {
                  text: 'Escalabilidad dinámica',
                  description: 'Se ajustan automáticamente a la demanda, aumentando o reduciendo los recursos según sea necesario para optimizar costos y mejorar el rendimiento.',
                },
                {
                  text: 'Alta disponibilidad y redundancia',
                  description: 'Los proveedores de servicios administrados diseñan sus infraestructuras para garantizar la continuidad del negocio mediante copias de seguridad, distribución de cargas y replicación en centros de datos geográficamente dispersos.',
                },
                {
                  text: 'Seguridad avanzada',
                  description: 'Incluyen medidas de protección como cifrado de datos, control de acceso basado en roles y detección de amenazas en tiempo real.',
                },
                {
                  text: 'Optimización de costos',
                  description: 'Se cobra solo por los recursos consumidos, permitiendo a las organizaciones evitar gastos en hardware, mantenimiento y administración de infraestructura.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tipos de Servicios Administrados de Cómputo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Plataformas de aplicaciones administradas (PaaS - Platform as a Service)',
                  description: 'Proporcionan un entorno de desarrollo y despliegue preconfigurado que facilita a los desarrolladores la creación de aplicaciones sin preocuparse por la administración de servidores o configuraciones subyacentes.',
                },
                {
                  text: 'Infraestructura como servicio (IaaS) administrada',
                  description: 'Ofrece instancias de máquinas virtuales y otros recursos computacionales con herramientas de administración integradas, eliminando la necesidad de aprovisionar y gestionar físicamente servidores.',
                },
                {
                  text: 'Contenedores y orquestación de contenedores administrados',
                  description: 'Los proveedores ofrecen plataformas que facilitan el despliegue, escalado y administración de contenedores de manera eficiente sin que el usuario tenga que administrar manualmente la infraestructura de orquestación.',
                },
                {
                  text: 'Computación sin servidor (Serverless)',
                  description: 'Los servicios sin servidor permiten la ejecución de código sin necesidad de administrar servidores físicos o virtuales. El proveedor gestiona la infraestructura, asignando recursos de manera dinámica.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Casos de Uso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Desarrollo de aplicaciones escalables',
                  description: 'Empresas que necesitan responder a cambios en la demanda pueden usar Google App Engine o AWS Elastic Beanstalk para administrar automáticamente la escalabilidad.',
                },
                {
                  text: 'Procesamiento de datos en tiempo real',
                  description: 'Servicios como Google Cloud Functions permiten analizar grandes volúmenes de datos en tiempo real sin infraestructura adicional.',
                },
                {
                  text: 'Automatización de procesos empresariales',
                  description: 'Las organizaciones pueden ejecutar flujos de trabajo automatizados con herramientas como Azure Functions para reducir costos y mejorar eficiencia.',
                },
                {
                  text: 'Gestión de cargas de trabajo de alta disponibilidad',
                  description: 'Empresas de comercio electrónico pueden usar Kubernetes administrado para garantizar la continuidad del servicio en períodos de alta demanda.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Ventajas y Desafíos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Reducción de costos operativos',
                  description: 'Los servicios administrados permiten a las organizaciones centrarse en la innovación y en ofrecer mejores experiencias a los usuarios sin preocuparse por la administración del hardware o la infraestructura.',
                },
                {
                  text: 'Mayor eficiencia en la gestión de infraestructura',
                  description: 'Permiten a las empresas centrarse en la innovación y en ofrecer mejores experiencias a los usuarios sin preocuparse por la administración del hardware o la infraestructura.',
                },
                {
                  text: 'Mejor seguridad y cumplimiento de normativas',
                  description: 'Los proveedores de servicios administrados implementan medidas de seguridad avanzadas y garantizan el cumplimiento de normativas de protección de datos.',
                },
                {
                  text: 'Mayor agilidad y rapidez en la innovación tecnológica',
                  description: 'Facilitan la implementación rápida de nuevas funcionalidades y mejoras en las aplicaciones.',
                },
                {
                  text: 'Dependencia del proveedor de servicios',
                  description: 'Las organizaciones dependen del proveedor de servicios para la gestión y el mantenimiento de la infraestructura.',
                },
                {
                  text: 'Posibles costos ocultos si no se gestionan adecuadamente los recursos consumidos',
                  description: 'Es importante monitorear y optimizar el uso de recursos para evitar gastos innecesarios.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />
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
    </motion.div>
  )
}
