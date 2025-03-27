'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Database,
  Table,
  Folder,
  HardDrive,
  Wrench,
  Network,
  BarChart
} from 'lucide-react'

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

export default function ServiciosBasesDatosNube() {
  const [activeTab, setActiveTab] = useState('introduccion')

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <CardHeader>
          <CardTitle className="text-4xl font-bold flex items-center text-blue-600 dark:text-blue-400">
            <Database className="mr-4 h-8 w-8" />
            Servicios de bases de datos en la nube
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
            Explora los diferentes tipos de servicios de bases de datos en la nube y sus funcionalidades para optimizar la gestión de datos.
          </CardDescription>
        </CardHeader>
      </motion.div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-8"
      >
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 gap-4">
          <TabsTrigger value="introduccion">Introducción</TabsTrigger>
          <TabsTrigger value="relacionales">BBDD Relacionales</TabsTrigger>
          <TabsTrigger value="nosql">BBDD NoSQL</TabsTrigger>
          <TabsTrigger value="analiticas">BBDD Analíticas</TabsTrigger>
          <TabsTrigger value="despliegue">Despliegue en AWS</TabsTrigger>
          <TabsTrigger value="optimizacion">Optimización</TabsTrigger>
        </TabsList>

        <TabsContent value="introduccion">
          <IntroduccionBasesDatos />
        </TabsContent>

        <TabsContent value="relacionales">
          <BasesDatosRelacionales />
        </TabsContent>

        <TabsContent value="nosql">
          <BasesDatosNoSQL />
        </TabsContent>

        <TabsContent value="analiticas">
          <BasesDatosAnaliticas />
        </TabsContent>

        <TabsContent value="despliegue">
          <DespliegueAWS />
        </TabsContent>

        <TabsContent value="optimizacion">
          <OptimizacionBasesDatos />
        </TabsContent>
      </Tabs>
    </main>
  )
}

function IntroduccionBasesDatos() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400">
              <HardDrive className="mr-2 h-6 w-6" />
              Introducción a las bases de datos en la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Las bases de datos en la nube permiten almacenar y gestionar datos sin necesidad de configurar y mantener servidores físicos, ofreciendo ventajas como escalabilidad, alta disponibilidad y seguridad.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Beneficios clave:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Escalabilidad: Ajustar capacidad según la demanda.</li>
              <li>Alta disponibilidad: Redundancia y replicación de datos.</li>
              <li>Seguridad mejorada: Cifrado y controles de acceso.</li>
              <li>Reducción de costos: Eliminación de hardware especializado.</li>
              <li>Gestión automatizada: Administración de parches y copias de seguridad.</li>
              <li>Conectividad global: Acceso desde cualquier parte del mundo.</li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              <strong>Ejemplo práctico:</strong> Una tienda online utiliza bases de datos en la nube para gestionar inventarios y pedidos de manera eficiente.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function BasesDatosRelacionales() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400">
              <Table className="mr-2 h-6 w-6" />
              Bases de datos relacionales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Las bases de datos relacionales organizan los datos en tablas con filas y columnas, utilizando SQL para gestionar y manipular la información.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="caracteristicas-relacionales">
                <AccordionTrigger>Características principales</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Estructura basada en tablas.</li>
                    <li>Uso del lenguaje SQL.</li>
                    <li>Integridad referencial.</li>
                    <li>Escalabilidad vertical.</li>
                    <li>Transaccionalidad con propiedades ACID.</li>
                    <li>Seguridad y control de acceso.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="funcionalidades-relacionales">
                <AccordionTrigger>Funcionalidades de servicios administrados</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Escalabilidad automática.</li>
                    <li>Alta disponibilidad.</li>
                    <li>Seguridad avanzada.</li>
                    <li>Optimización del rendimiento.</li>
                    <li>Automatización del mantenimiento.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="despliegue-relacionales">
                <AccordionTrigger>Despliegue en la nube</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Elección del motor de base de datos.</li>
                    <li>Configuración de la instancia.</li>
                    <li>Configuración de la seguridad y accesibilidad.</li>
                    <li>Definición de la estrategia de copias de seguridad.</li>
                    <li>Implementación de la base de datos.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function BasesDatosNoSQL() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400">
              <Folder className="mr-2 h-6 w-6" />
              Bases de datos NoSQL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Las bases de datos NoSQL son flexibles y están diseñadas para manejar grandes volúmenes de datos no estructurados o semiestructurados.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="caracteristicas-nosql">
                <AccordionTrigger>Características principales</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Modelo de datos flexible.</li>
                    <li>Escalabilidad horizontal.</li>
                    <li>Alto rendimiento.</li>
                    <li>Disponibilidad y tolerancia a fallos.</li>
                    <li>Modelo de consistencia eventual.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tipos-nosql">
                <AccordionTrigger>Tipos de bases de datos NoSQL</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Documentos: JSON o BSON.</li>
                    <li>Clave-valor: Acceso ultrarrápido.</li>
                    <li>Grafos: Relaciones complejas.</li>
                    <li>Columnas anchas: Acceso rápido a grandes volúmenes.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="funcionalidades-nosql">
                <AccordionTrigger>Funcionalidades de servicios administrados</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Alta escalabilidad.</li>
                    <li>Baja latencia.</li>
                    <li>Alta disponibilidad.</li>
                    <li>Flexibilidad en la estructura de datos.</li>
                    <li>Administración simplificada.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function BasesDatosAnaliticas() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400">
              <BarChart className="mr-2 h-6 w-6" />
              Bases de datos analíticas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Las bases de datos analíticas están diseñadas para procesar grandes volúmenes de datos y proporcionar información útil a partir de ellos.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="caracteristicas-analiticas">
                <AccordionTrigger>Características principales</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Optimización para consultas complejas.</li>
                    <li>Estructura orientada a la lectura.</li>
                    <li>Modelos de almacenamiento en columnas.</li>
                    <li>Compatibilidad con grandes volúmenes de datos.</li>
                    <li>Integración con herramientas de BI.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tipos-analiticas">
                <AccordionTrigger>Tipos de bases de datos analíticas</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Almacenes de datos (Data Warehouses).</li>
                    <li>Lagos de datos (Data Lakes).</li>
                    <li>Bases de datos analíticas en tiempo real.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="funcionalidades-analiticas">
                <AccordionTrigger>Funcionalidades de Servicios Administrados</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Procesamiento de grandes volúmenes de datos.</li>
                    <li>Optimización para consultas complejas.</li>
                    <li>Escalabilidad automática.</li>
                    <li>Integración con herramientas de análisis e inteligencia de negocios.</li>
                    <li>Procesamiento distribuido.</li>
                    <li>Seguridad y cumplimiento.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function DespliegueAWS() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400">
              <Network className="mr-2 h-6 w-6" />
              Despliegue de dases de datos en AWS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              El despliegue de bases de datos en AWS implica la configuración de instancias y servicios específicos para cada tipo de base de datos.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="relacionales-aws">
                <AccordionTrigger>Bases de datos relacionales</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Elección del motor de base de datos.</li>
                    <li>Configuración de la instancia.</li>
                    <li>Configuración de la seguridad y accesibilidad.</li>
                    <li>Definición de la estrategia de copias de seguridad.</li>
                    <li>Implementación de la base de datos.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="nosql-aws">
                <AccordionTrigger>Bases de datos NoSQL</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Selección del tipo de base de datos NoSQL.</li>
                    <li>Configuración del servicio AWS adecuado.</li>
                    <li>Definición de políticas de acceso y seguridad.</li>
                    <li>Optimización del rendimiento.</li>
                    <li>Implementación y monitoreo.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="analiticas-aws">
                <AccordionTrigger>Bases de datos analíticas</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Definición de necesidades de análisis.</li>
                    <li>Selección del servicio AWS adecuado.</li>
                    <li>Integración con fuentes de datos.</li>
                    <li>Optimización del almacenamiento y consultas.</li>
                    <li>Configuración de seguridad y acceso.</li>
                    <li>Implementación de herramientas de visualización.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function OptimizacionBasesDatos() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400">
              <Wrench className="mr-2 h-6 w-6" />
              Optimización de bases de datos en la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La optimización de bases de datos en la nube busca maximizar la eficiencia y minimizar los costos asociados con la gestión de datos.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="estrategias-optimizacion">
                <AccordionTrigger>Estrategias de optimización</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Dimensionamiento correcto (Right-sizing).</li>
                    <li>Uso de instancias reservadas y planes de ahorro.</li>
                    <li>Implementación de políticas de apagado automático.</li>
                    <li>Optimización de almacenamiento y transferencia de datos.</li>
                    <li>Adopción de arquitecturas serverless.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="herramientas-optimizacion">
                <AccordionTrigger>Herramientas para optimización</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>AWS Trusted Advisor y AWS Cost Explorer.</li>
                    <li>Azure Cost Management y Azure Advisor.</li>
                    <li>Google Cloud's Recommender y Cost Management.</li>
                    <li>Herramientas de terceros: CloudHealth, Cloudability.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
