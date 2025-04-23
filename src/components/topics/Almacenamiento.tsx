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
  Cloud,
  Database,
  File,
  Folder,
  Wrench,
  HardDrive,
  Server
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

export default function AlmacenamientoEnLaNube() {
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
            <Cloud className="mr-4 h-8 w-8" />
            Servicios de almacenamiento en la nube
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
            Explora los diferentes tipos de almacenamiento en la nube y sus funcionalidades para optimizar la gestión de datos.
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
          <TabsTrigger value="bloques">Bloques</TabsTrigger>
          <TabsTrigger value="objetos">Objetos</TabsTrigger>
          <TabsTrigger value="archivos">Archivos</TabsTrigger>
          <TabsTrigger value="datos">Datos</TabsTrigger>
          <TabsTrigger value="optimizacion">Optimización</TabsTrigger>
        </TabsList>

        <TabsContent value="introduccion">
          <IntroduccionAlmacenamiento />
        </TabsContent>

        <TabsContent value="bloques">
          <AlmacenamientoBloques />
        </TabsContent>

        <TabsContent value="objetos">
          <AlmacenamientoObjetos />
        </TabsContent>

        <TabsContent value="archivos">
          <AlmacenamientoArchivos />
        </TabsContent>

        <TabsContent value="datos">
          <AlmacenamientoDatos />
        </TabsContent>

        <TabsContent value="optimizacion">
          <OptimizacionAlmacenamiento />
        </TabsContent>
      </Tabs>
    </main>
  )
}

function IntroduccionAlmacenamiento() {
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
              Introducción al almacenamiento en la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              El almacenamiento en la nube permite a usuarios y empresas almacenar, gestionar y acceder a sus datos a través de internet, eliminando la necesidad de infraestructuras físicas propias.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Características Clave:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Escalabilidad: Aumentar o reducir el espacio de almacenamiento según la demanda.</li>
              <li>Alta disponibilidad y redundancia: Datos almacenados en múltiples ubicaciones.</li>
              <li>Accesibilidad remota: Acceso desde cualquier dispositivo con conexión a internet.</li>
              <li>Seguridad avanzada: Cifrado, autenticación multifactor y controles de acceso.</li>
              <li>Integración con otros servicios: Compatibilidad con bases de datos, IA y análisis de datos.</li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              <strong>Ejemplo práctico:</strong> Plataformas como Google Drive, Dropbox y OneDrive son ejemplos comunes de almacenamiento en la nube para usuarios individuales.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function AlmacenamientoBloques() {
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
              <Server className="mr-2 h-6 w-6" />
              Almacenamiento en bloques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              El almacenamiento en bloques divide los datos en bloques de tamaño fijo, cada uno con un identificador único. Es ideal para sistemas que requieren acceso rápido y estructurado a los datos.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="caracteristicas-bloques">
                <AccordionTrigger>Características Principales</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Baja latencia y alto rendimiento.</li>
                    <li>Flexibilidad en el tamaño de los bloques.</li>
                    <li>Gestión eficiente de datos estructurados.</li>
                    <li>Soporte para copias de seguridad y snapshots.</li>
                    <li>Acceso directo a bloques específicos.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="funcionamiento-bloques">
                <AccordionTrigger>Funcionamiento del almacenamiento en bloques</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>División del archivo en bloques de tamaño fijo.</li>
                    <li>Asignación de identificadores únicos a cada bloque.</li>
                    <li>Distribución de los bloques en la infraestructura de almacenamiento.</li>
                    <li>Acceso a los datos mediante identificadores de bloque.</li>
                    <li>Actualización de bloques específicos en lugar de reescribir el archivo completo.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="casos-uso-bloques">
                <AccordionTrigger>Casos de uso</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Bases de datos empresariales.</li>
                    <li>Máquinas virtuales y servidores en la nube.</li>
                    <li>Aplicaciones empresariales de alto rendimiento.</li>
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

function AlmacenamientoObjetos() {
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
              <File className="mr-2 h-6 w-6" />
              Almacenamiento de objetos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              El almacenamiento de objetos almacena datos como objetos individuales con metadatos y un identificador único. Es ideal para datos no estructurados como imágenes, vídeos y copias de seguridad.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="caracteristicas-objetos">
                <AccordionTrigger>Características principales</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Escalabilidad masiva.</li>
                    <li>Gestión flexible de metadatos.</li>
                    <li>Almacenamiento distribuido y redundante.</li>
                    <li>Acceso mediante API.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="funcionamiento-objetos">
                <AccordionTrigger>Funcionamiento del almacenamiento de objetos</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Conversión del archivo en un objeto con metadatos y un identificador único.</li>
                    <li>Almacenamiento del objeto en un repositorio distribuido.</li>
                    <li>Acceso a los datos mediante el identificador único.</li>
                    <li>Creación de nuevas versiones del objeto para modificaciones.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="casos-uso-objetos">
                <AccordionTrigger>Casos de uso</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Almacenamiento de contenido multimedia.</li>
                    <li>Copias de seguridad y recuperación ante desastres.</li>
                    <li>Big Data y análisis de datos.</li>
                    <li>Archivos estáticos para sitios web y aplicaciones móviles.</li>
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

function AlmacenamientoArchivos() {
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
              Almacenamiento de archivos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              El almacenamiento de archivos organiza los datos en una estructura jerárquica de directorios y archivos, similar a un sistema de archivos tradicional.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="caracteristicas-archivos">
                <AccordionTrigger>Características principales</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Estructura jerárquica de directorios y subdirectorios.</li>
                    <li>Compatibilidad con protocolos estándar como NFS y SMB.</li>
                    <li>Gestión de accesos y permisos.</li>
                    <li>Acceso compartido y colaborativo.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="funcionamiento-archivos">
                <AccordionTrigger>Funcionamiento del almacenamiento de archivos</AccordionTrigger>
                <AccordionContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Creación del sistema de archivos accesible mediante protocolos estándar.</li>
                    <li>Estructuración de carpetas y archivos según necesidades.</li>
                    <li>Acceso a los archivos mediante rutas convencionales.</li>
                    <li>Configuración de controles de acceso.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="casos-uso-archivos">
                <AccordionTrigger>Casos de uso</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Entornos empresariales y trabajo colaborativo.</li>
                    <li>Aplicaciones que requieren acceso concurrente.</li>
                    <li>Carga de trabajo en centros de datos híbridos.</li>
                    <li>Industria multimedia y de diseño.</li>
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

function AlmacenamientoDatos() {
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
              <Database className="mr-2 h-6 w-6" />
              Almacenamiento de datos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              El almacenamiento de datos está diseñado para gestionar grandes volúmenes de datos estructurados en bases de datos relacionales o NoSQL.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="caracteristicas-datos">
                <AccordionTrigger>Características principales</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Alta disponibilidad y redundancia.</li>
                    <li>Escalabilidad automática.</li>
                    <li>Optimización para análisis y procesamiento.</li>
                    <li>Integración con ecosistemas cloud.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="casos-uso-datos">
                <AccordionTrigger>Casos de uso</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Bases de datos transaccionales.</li>
                    <li>Análisis de big data.</li>
                    <li>Data lakes y almacenamiento a largo plazo.</li>
                    <li>Aplicaciones de inteligencia artificial y aprendizaje automático.</li>
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

function OptimizacionAlmacenamiento() {
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
              Optimización de almacenamiento en la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La optimización de almacenamiento en la nube busca maximizar la eficiencia y minimizar los costos asociados con la gestión de datos.
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
