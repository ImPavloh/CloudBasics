'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Wrench,
  CreditCard,
  DollarSign,
  BarChart,
  Calculator,
  Shield,
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

export default function EconomiaFacturacionNube() {
  const [activeTab, setActiveTab] = useState('introduccion')

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
          Economía y facturación en la nube
        </h1>
        <p className="mt-3 mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl">
          Comprende los aspectos económicos y de facturación en los servicios de
          computación en la nube para optimizar costes y maximizar el valor de
          tu inversión.
        </p>
      </motion.div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-8"
      >
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 gap-4">
          <TabsTrigger value="introduccion">Introducción</TabsTrigger>
          <TabsTrigger value="caracteristicas">
            Características de Precios
          </TabsTrigger>
          <TabsTrigger value="tco">Coste Total de Propiedad</TabsTrigger>
          <TabsTrigger value="herramientas">
            Herramientas de Estimación
          </TabsTrigger>
          <TabsTrigger value="soporte">Planes de Soporte</TabsTrigger>
          <TabsTrigger value="optimizacion">Optimización de Costes</TabsTrigger>
        </TabsList>

        <TabsContent value="introduccion">
          <IntroduccionFacturacion />
        </TabsContent>

        <TabsContent value="caracteristicas">
          <CaracteristicasPrecios />
        </TabsContent>

        <TabsContent value="tco">
          <CosteTotalPropiedad />
        </TabsContent>

        <TabsContent value="herramientas">
          <HerramientasEstimacion />
        </TabsContent>

        <TabsContent value="soporte">
          <PlanesSoporte />
        </TabsContent>

        <TabsContent value="optimizacion">
          <OptimizacionCostes />
        </TabsContent>
      </Tabs>
    </main>
  )
}

function IntroduccionFacturacion() {
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
              <CreditCard className="mr-2 h-6 w-6" />
              Introducción a la Facturación en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La facturación en la nube es el proceso mediante el cual los
              proveedores de servicios de nube cobran a los usuarios por los
              recursos y servicios que consumen. A diferencia de la
              infraestructura tradicional on-premise, la nube permite un modelo
              de pago por uso, donde las empresas solo pagan por lo que
              utilizan.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              Características Clave:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Pago por uso: Solo se factura por los recursos consumidos.
              </li>
              <li>
                Escalabilidad dinámica: Capacidad de ajustar recursos según la
                demanda.
              </li>
              <li>
                Sin inversión inicial: Eliminación de grandes gastos de capital
                en hardware.
              </li>
              <li>
                Flexibilidad: Acceso a una amplia gama de servicios y recursos.
              </li>
              <li>
                Transparencia: Desglose detallado de los costes por servicio y
                recurso.
              </li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              <strong>Ejemplo práctico:</strong> Una empresa utiliza una máquina
              virtual (EC2) en AWS durante 10 horas. Solo paga por esas 10 horas
              de uso, lo que representa una ventaja frente a la compra de
              servidores físicos que requieren una gran inversión inicial.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function CaracteristicasPrecios() {
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
              <DollarSign className="mr-2 h-6 w-6" />
              Características Fundamentales de los Precios de la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Los precios en la nube se caracterizan por su flexibilidad y
              complejidad, reflejando la naturaleza dinámica de los servicios en
              la nube.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="modelo-pago">
                <AccordionTrigger>Modelo de Pago por Uso</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    El pago por uso es el pilar de la facturación en la nube,
                    permitiendo a las empresas pagar solo por los recursos que
                    consumen.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Facturación por tiempo de uso (por segundo, minuto u hora)
                    </li>
                    <li>Facturación por capacidad utilizada (GB, TB, etc.)</li>
                    <li>Facturación por transacciones o solicitudes</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="escalabilidad">
                <AccordionTrigger>Escalabilidad y Elasticidad</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    La capacidad de escalar recursos dinámicamente es una
                    característica fundamental que influye directamente en la
                    facturación.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Escalabilidad vertical: Aumentar recursos de una instancia
                    </li>
                    <li>Escalabilidad horizontal: Añadir más instancias</li>
                    <li>
                      Elasticidad automática: Ajuste automático basado en la
                      carga de trabajo
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tipos-servicio">
                <AccordionTrigger>
                  Precios Basados en el Tipo de Servicio
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Cada tipo de servicio en la nube tiene su propia estructura
                    de precios.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Cómputo: Instancias bajo demanda, reservadas, spot</li>
                    <li>Almacenamiento: En caliente, en frío, archivado</li>
                    <li>
                      Redes: Transferencia de datos, balanceadores de carga
                    </li>
                    <li>
                      Servicios adicionales: Bases de datos gestionadas,
                      análisis de datos, etc.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="descuentos">
                <AccordionTrigger>
                  Descuentos y Programas de Facturación Especiales
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Los proveedores ofrecen varios programas de descuento para
                    optimizar costes.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Instancias reservadas: Descuentos por compromisos a largo
                      plazo
                    </li>
                    <li>
                      Planes de ahorro: Compromiso de gasto por descuentos
                      flexibles
                    </li>
                    <li>
                      Descuentos por volumen: Tarifas reducidas al aumentar el
                      uso
                    </li>
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

function CosteTotalPropiedad() {
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
              Coste Total de la Propiedad (TCO)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              El Coste Total de la Propiedad (TCO) en la nube se refiere a la
              suma de todos los costes asociados con la implementación,
              operación y mantenimiento de una solución en la nube.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="costes-directos">
                <AccordionTrigger>Costes Directos</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Cómputo: Instancias de VM, contenedores, funciones
                      serverless
                    </li>
                    <li>Almacenamiento: Bloques, objetos, archivos</li>
                    <li>
                      Redes: Transferencia de datos, VPN, balanceadores de carga
                    </li>
                    <li>
                      Servicios gestionados: Bases de datos, colas, servicios de
                      aplicación
                    </li>
                    <li>
                      Licencias de software: Sistemas operativos, bases de datos
                      comerciales
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="costes-indirectos">
                <AccordionTrigger>Costes Indirectos</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Personal y formación: Capacitación del equipo en
                      tecnologías cloud
                    </li>
                    <li>
                      Migración: Planificación, ejecución y pruebas de la
                      migración a la nube
                    </li>
                    <li>
                      Integración: Adaptación de sistemas existentes al entorno
                      cloud
                    </li>
                    <li>
                      Seguridad y cumplimiento: Implementación de medidas de
                      seguridad adicionales
                    </li>
                    <li>
                      Gestión y monitorización: Herramientas y tiempo dedicado a
                      la administración
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="comparacion-tco">
                <AccordionTrigger>
                  Comparación del TCO: Nube vs. On-Premise
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Comparar el TCO entre soluciones en la nube y on-premise es
                    crucial para tomar decisiones informadas sobre la
                    infraestructura IT.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      On-Premise: Altos costes iniciales, mantenimiento
                      continuo, actualizaciones periódicas
                    </li>
                    <li>
                      Nube: Costes operativos flexibles, escalabilidad, menos
                      mantenimiento directo
                    </li>
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

function HerramientasEstimacion() {
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
              <Calculator className="mr-2 h-6 w-6" />
              Herramientas para Estimar y Analizar Costes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Los proveedores de servicios en la nube ofrecen una variedad de
              herramientas para ayudar a las organizaciones a estimar, analizar
              y optimizar sus costes en la nube.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="calculadoras">
                <AccordionTrigger>Calculadoras de Precios</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>AWS Pricing Calculator</li>
                    <li>Azure Pricing Calculator</li>
                    <li>Google Cloud Pricing Calculator</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="herramientas-analisis">
                <AccordionTrigger>
                  Herramientas de Análisis de Costes
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>AWS Cost Explorer</li>
                    <li>Azure Cost Management</li>
                    <li>Google Cloud Billing Reports</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="herramientas-terceros">
                <AccordionTrigger>Herramientas de Terceros</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>CloudHealth</li>
                    <li>Cloudability</li>
                    <li>RightScale Optima</li>
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

function PlanesSoporte() {
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
              Planes de Soporte en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Los planes de soporte son cruciales para garantizar la continuidad
              operativa y la optimización de los servicios en la nube.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="niveles-soporte">
                <AccordionTrigger>Niveles de Soporte Comunes</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Soporte Básico: Documentación, foros de la comunidad
                    </li>
                    <li>
                      Soporte para Desarrolladores: Acceso a soporte técnico,
                      tiempos de respuesta más largos
                    </li>
                    <li>
                      Soporte Empresarial: Soporte 24/7, tiempos de respuesta
                      garantizados
                    </li>
                    <li>
                      Soporte Premium: Gerente técnico de cuenta dedicado,
                      soporte proactivo
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="importancia-soporte">
                <AccordionTrigger>
                  Importancia del Soporte en la Nube
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Respuestas rápidas ante incidentes</li>
                    <li>
                      Asistencia experta para resolver problemas complejos
                    </li>
                    <li>Optimización de costes y rendimiento</li>
                    <li>Mejora continua de la infraestructura</li>
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

function OptimizacionCostes() {
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
              Optimización de Costes en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La optimización de costes en la nube es un proceso continuo que
              busca maximizar el valor obtenido de los servicios en la nube
              mientras se minimizan los gastos.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="conceptos-clave">
                <AccordionTrigger>
                  Conceptos Clave en Optimización
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      NURI (Non-Usage Resource Identification): Identificación
                      de recursos no utilizados
                    </li>
                    <li>
                      PURI (Provisioned Unused Resource Identification):
                      Recursos aprovisionados pero no utilizados
                    </li>
                    <li>
                      AURI (Active Unused Resource Identification): Recursos
                      activos pero no utilizados efectivamente
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="estrategias">
                <AccordionTrigger>Estrategias de Optimización</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Dimensionamiento correcto (Right-sizing)</li>
                    <li>Uso de instancias reservadas y planes de ahorro</li>
                    <li>Implementación de políticas de apagado automático</li>
                    <li>
                      Optimización de almacenamiento y transferencia de datos
                    </li>
                    <li>
                      Adopción de arquitecturas serverless donde sea apropiado
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="herramientas">
                <AccordionTrigger>
                  Herramientas para Optimización
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>AWS Trusted Advisor y AWS Cost Explorer</li>
                    <li>Azure Cost Management y Azure Advisor</li>
                    <li>Google Cloud&apos;s Recommender y Cost Management</li>
                    <li>Herramientas de terceros: CloudHealth, Cloudability</li>
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
