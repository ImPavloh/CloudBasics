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
  Server,
  Shield,
  Activity,
  AlertCircle,
  Archive,
  HardDrive,
  Network,
  BarChart,
  Monitor,
  Code,
  LayoutDashboard,
  Settings
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

export default function PrincipiosArquitectonicosNube() {
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
            Arquitectura en la Nube
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
            Explora los principios y servicios clave para diseñar arquitecturas eficientes y seguras en la nube.
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
          <TabsTrigger value="diseno">Diseño</TabsTrigger>
          <TabsTrigger value="operacional">Excelencia operacional</TabsTrigger>
          <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
          <TabsTrigger value="fiabilidad">Fiabilidad</TabsTrigger>
          <TabsTrigger value="rendimiento">Rendimiento</TabsTrigger>
          <TabsTrigger value="costos">Costos</TabsTrigger>
          <TabsTrigger value="herramientas">Herramientas</TabsTrigger>
        </TabsList>

        <TabsContent value="introduccion">
          <IntroduccionArquitectura />
        </TabsContent>

        <TabsContent value="diseno">
          <DisenoArquitectura />
        </TabsContent>

        <TabsContent value="operacional">
          <ExcelenciaOperacional />
        </TabsContent>

        <TabsContent value="seguridad">
          <SeguridadArquitectura />
        </TabsContent>

        <TabsContent value="fiabilidad">
          <FiabilidadArquitectura />
        </TabsContent>

        <TabsContent value="rendimiento">
          <RendimientoArquitectura />
        </TabsContent>

        <TabsContent value="costos">
          <OptimizacionCostos />
        </TabsContent>

        <TabsContent value="herramientas">
          <HerramientasDiseño />
        </TabsContent>
      </Tabs>
    </main>
  )
}

function IntroduccionArquitectura() {
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
              Introducción a la arquitectura en la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La arquitectura en la nube se refiere al diseño de sistemas informáticos basados en la nube, combinando hardware, software, redes y servicios para ofrecer soluciones escalables y flexibles.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Características clave:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Escalabilidad: Ajustar recursos según la demanda.</li>
              <li>Elasticidad: Ajuste dinámico de recursos.</li>
              <li>Pago por uso: Costos basados en el consumo real.</li>
              <li>Disponibilidad global: Acceso desde cualquier parte del mundo.</li>
              <li>Automatización: Procesos automatizados para gestión eficiente.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function DisenoArquitectura() {
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
              <LayoutDashboard className="mr-2 h-6 w-6" />
              Principios de diseño del Well-Architected Framework
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              El Well-Architected Framework de AWS proporciona principios para diseñar arquitecturas en la nube eficientes y seguras.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="principios-diseno">
                <AccordionTrigger>Principios de diseño</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Excelencia operacional</li>
                    <li>Seguridad</li>
                    <li>Fiabilidad</li>
                    <li>Eficiencia en el rendimiento</li>
                    <li>Optimización de costos</li>
                    <li>Sostenibilidad</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ejemplo-diseno">
                <AccordionTrigger>Ejemplo práctico</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Una empresa de streaming de música aplica estos principios para mejorar la experiencia del usuario, garantizando disponibilidad, seguridad y eficiencia en el uso de recursos.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function ExcelenciaOperacional() {
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
              <Monitor className="mr-2 h-6 w-6" />
              Excelencia operacional en la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La excelencia operacional se refiere a la capacidad de ejecutar y monitorear cargas de trabajo de manera eficiente, mejorando continuamente los procesos.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="principios-operacional">
                <AccordionTrigger>Principios de la excelencia operacional</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Realizar operaciones como código</li>
                    <li>Documentar y mejorar procesos operativos</li>
                    <li>Anticiparse a fallos y aprender de ellos</li>
                    <li>Automatizar procesos y minimizar la intervención manual</li>
                    <li>Medir la eficiencia operativa mediante métricas</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ejemplo-operacional">
                <AccordionTrigger>Ejemplo práctico</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Una tienda en línea utiliza AWS CloudFormation para definir su infraestructura como código y AWS CloudWatch para monitorear el tráfico, asegurando configuraciones uniformes y respuesta rápida a incidentes.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function SeguridadArquitectura() {
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
              <Shield className="mr-2 h-6 w-6" />
              Seguridad en la arquitectura en la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La seguridad en la nube implica prácticas y controles para proteger datos, aplicaciones e infraestructuras, con un modelo de responsabilidad compartida.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="modelo-seguridad">
                <AccordionTrigger>Modelo de responsabilidad compartida</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Proveedor de la nube: Protege la infraestructura física y servicios globales.</li>
                    <li>Cliente: Protege sus datos y configura herramientas de seguridad.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="amenazas-seguridad">
                <AccordionTrigger>Principales amenazas</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Fugas de información</li>
                    <li>Ataques de denegación de servicio (DDoS)</li>
                    <li>Robo de credenciales</li>
                    <li>Malware y ransomware</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="practicas-seguridad">
                <AccordionTrigger>Buenas prácticas de seguridad</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Control de accesos y autenticación</li>
                    <li>Cifrado de datos en reposo y en tránsito</li>
                    <li>Monitoreo y detección de amenazas</li>
                    <li>Gestión de parches y actualizaciones</li>
                    <li>Copias de seguridad y recuperación ante desastres</li>
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

function FiabilidadArquitectura() {
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
              <Activity className="mr-2 h-6 w-6" />
              Fiabilidad y alta disponibilidad en la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La fiabilidad y alta disponibilidad garantizan que los sistemas sigan funcionando sin interrupciones, incluso ante fallos.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="caracteristicas-fiabilidad">
                <AccordionTrigger>Características clave</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Redundancia</li>
                    <li>Escalabilidad automática</li>
                    <li>Recuperación ante desastres</li>
                    <li>Balanceo de carga</li>
                    <li>Supervisión y monitoreo</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="estrategias-fiabilidad">
                <AccordionTrigger>Estrategias para lograr fiabilidad</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Redundancia y replicación de datos</li>
                    <li>Escalabilidad automática</li>
                    <li>Recuperación ante desastres y tolerancia a fallos</li>
                    <li>Balanceo de carga</li>
                    <li>Supervisión y monitoreo</li>
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

function RendimientoArquitectura() {
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
              Eficiencia en el rendimiento de la arquitectura en la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La eficiencia en el rendimiento se refiere a la capacidad de utilizar los recursos de manera óptima, asegurando respuestas rápidas y sin desperdicio de capacidad.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="eleccion-recursos">
                <AccordionTrigger>Elección adecuada de los recursos computacionales</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>CPU vs. GPU</li>
                    <li>Memoria RAM</li>
                    <li>Optimización de instancias</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="optimizacion-almacenamiento">
                <AccordionTrigger>Optimización del almacenamiento y bases de datos</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Almacenamiento en caché</li>
                    <li>Indexación de bases de datos</li>
                    <li>Elección de almacenamiento adecuado</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="uso-redes">
                <AccordionTrigger>Uso eficiente de redes y conectividad</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Ubicación geográfica de los servidores</li>
                    <li>CDN (Content Delivery Network)</li>
                    <li>Optimización de tráfico</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="escalabilidad-dinamica">
                <AccordionTrigger>Escalabilidad dinámica</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Escalabilidad horizontal</li>
                    <li>Escalabilidad vertical</li>
                    <li>Autoescalado</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="monitoreo-optimizacion">
                <AccordionTrigger>Monitoreo y optimización continua</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Alertas y notificaciones</li>
                    <li>Análisis de rendimiento</li>
                    <li>Optimización continua</li>
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

function OptimizacionCostos() {
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
              <AlertCircle className="mr-2 h-6 w-6" />
              Optimización de costos en la arquitectura en la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La optimización de costos implica implementar estrategias para minimizar el gasto en infraestructura sin comprometer el rendimiento ni la seguridad.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="eleccion-instancias">
                <AccordionTrigger>Elección adecuada de los tipos de instancias y modelos de pago</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Instancias bajo demanda</li>
                    <li>Instancias reservadas</li>
                    <li>Instancias spot</li>
                    <li>Computación sin servidor (Serverless)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="escalabilidad-recursos">
                <AccordionTrigger>Escalabilidad y uso eficiente de los recursos</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Escalabilidad automática</li>
                    <li>Optimización de instancias</li>
                    <li>Uso eficiente de contenedores</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="gestion-almacenamiento">
                <AccordionTrigger>Gestión del almacenamiento para evitar costos innecesarios</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Clases de almacenamiento</li>
                    <li>Eliminación de datos inactivos</li>
                    <li>Compresión y deduplicación</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="optimizacion-transferencia">
                <AccordionTrigger>Optimización de la transferencia de datos</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Uso de redes privadas</li>
                    <li>CDN (Content Delivery Network)</li>
                    <li>Evitar la salida innecesaria de datos</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="monitoreo-costos">
                <AccordionTrigger>Monitoreo y control de costos en tiempo real</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Alertas de presupuesto</li>
                    <li>Análisis de facturación</li>
                    <li>Recomendaciones de optimización</li>
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

function HerramientasDiseño() {
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
              <Settings className="mr-2 h-6 w-6" />
              Herramientas para el diseño de arquitecturas en la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Las herramientas para el diseño de arquitecturas en la nube facilitan la planificación, estructuración y optimización de los recursos tecnológicos.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="modelado-planificacion">
                <AccordionTrigger>Herramientas para el modelado y planificación de arquitecturas</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Modelado de arquitecturas</li>
                    <li>Evaluación de mejores prácticas</li>
                    <li>Simulación y prueba</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="infraestructura-codigo">
                <AccordionTrigger>Servicios de infraestructura como código (IaC)</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Automatización del aprovisionamiento</li>
                    <li>Versionado de la infraestructura</li>
                    <li>Consistencia y reducción de errores</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="monitoreo-gestion">
                <AccordionTrigger>Servicios de monitoreo y gestión de la arquitectura</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Monitoreo en tiempo real</li>
                    <li>Alertas y notificaciones</li>
                    <li>Optimización del rendimiento</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="automatizacion-orquestacion">
                <AccordionTrigger>Servicios de automatización y orquestación</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Automatización de tareas repetitivas</li>
                    <li>Orquestación de flujos de trabajo</li>
                    <li>Autoscaling y aprovisionamiento dinámico</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="integracion-conectividad">
                <AccordionTrigger>Plataformas de integración y conectividad</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Mensajería y eventos</li>
                    <li>APIs y gateways</li>
                    <li>Redes híbridas y conectividad</li>
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
