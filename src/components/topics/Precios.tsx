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
              La facturación en la nube es un modelo revolucionario que ha
              transformado la forma en que las empresas adquieren y gestionan
              sus recursos tecnológicos. A diferencia del modelo tradicional de
              infraestructura on-premise, la nube ofrece un enfoque flexible y
              escalable basado en el consumo real.
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
                Actualizaciones automáticas: El proveedor se encarga del
                mantenimiento y las actualizaciones.
              </li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              <strong>Ejemplo práctico:</strong> Una startup de e-commerce
              utiliza AWS EC2 para su sitio web. Durante el Black Friday,
              aumenta temporalmente sus instancias de 2 a 10 para manejar el
              tráfico adicional. AWS solo factura por las 8 instancias extra
              durante el tiempo que estuvieron activas, permitiendo a la startup
              manejar el pico de demanda sin una inversión permanente en
              infraestructura.
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
              la nube. Comprender estas características es crucial para una
              gestión eficiente de costes.
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
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Ejemplo avanzado:</strong> Una aplicación de IA
                    utiliza GPU en la nube para entrenamiento de modelos. La
                    facturación se basa en el tiempo de uso de la GPU, el
                    almacenamiento de datos y el número de predicciones
                    realizadas, permitiendo un control granular de los costes en
                    función del uso real.
                  </p>
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
                      Auto-escalado: Ajuste automático basado en métricas
                      predefinidas
                    </li>
                  </ul>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Caso de uso:</strong> Un servicio de streaming de
                    video utiliza auto-escalado en Azure para manejar picos de
                    tráfico durante estrenos de series populares, asegurando una
                    experiencia fluida para los usuarios mientras optimiza
                    costes durante períodos de baja demanda.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tipos-servicio">
                <AccordionTrigger>
                  Precios Basados en el Tipo de Servicio
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Cada tipo de servicio en la nube tiene su propia estructura
                    de precios, reflejando las diferentes capacidades y recursos
                    subyacentes.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Cómputo: Instancias bajo demanda, reservadas, spot</li>
                    <li>Almacenamiento: En caliente, en frío, archivado</li>
                    <li>
                      Redes: Transferencia de datos, balanceadores de carga
                    </li>
                    <li>
                      Servicios gestionados: Bases de datos, contenedores,
                      serverless
                    </li>
                  </ul>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Estrategia de optimización:</strong> Una empresa
                    utiliza una combinación de instancias reservadas para cargas
                    de trabajo constantes, instancias spot para procesamiento
                    por lotes tolerante a interrupciones, y servicios serverless
                    para microservicios, optimizando costes en cada capa de su
                    arquitectura.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="descuentos">
                <AccordionTrigger>
                  Descuentos y Programas de Facturación Especiales
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Los proveedores de nube ofrecen varios programas de
                    descuento para incentivar el uso a largo plazo y de gran
                    volumen.
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
                    <li>
                      Programas para startups: Créditos gratuitos para empresas
                      emergentes
                    </li>
                  </ul>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Ejemplo de optimización:</strong> Una empresa
                    multinacional negocia un Enterprise Agreement con Microsoft
                    Azure, obteniendo descuentos significativos basados en su
                    compromiso de gasto anual y utilizando Azure Hybrid Benefit
                    para aprovechar sus licencias de Windows Server y SQL Server
                    existentes en la nube.
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
              El Coste Total de la Propiedad (TCO) en la nube va más allá de los
              costes directos de los servicios, abarcando todos los aspectos
              financieros asociados con la implementación y mantenimiento de una
              solución en la nube.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="definicion-tco">
                <AccordionTrigger>
                  Definición y Importancia del TCO
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    El TCO incluye todos los costes directos e indirectos
                    asociados con la adopción y operación de servicios en la
                    nube a lo largo del tiempo.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Permite una evaluación completa de la inversión en la nube
                    </li>
                    <li>
                      Facilita la comparación entre diferentes opciones de
                      implementación
                    </li>
                    <li>Ayuda a identificar áreas de optimización de costes</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
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
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Ejemplo de análisis:</strong> Una empresa de
                    e-commerce migra su infraestructura a AWS. Los costes
                    directos incluyen instancias EC2 para servidores web y de
                    aplicaciones, RDS para bases de datos, S3 para
                    almacenamiento de imágenes, y CloudFront para CDN. La
                    empresa utiliza AWS Cost Explorer para desglosar estos
                    costes por servicio y optimizar el uso de recursos.
                  </p>
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
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Caso de estudio:</strong> Una institución
                    financiera, al migrar a Azure, invierte significativamente
                    en formación de su equipo de IT en Azure, contrata
                    consultores para la planificación de la migración, y
                    adquiere herramientas de terceros para monitorización y
                    seguridad compatibles con GDPR. Estos costes indirectos,
                    aunque sustanciales inicialmente, se justifican por la
                    mejora en eficiencia y cumplimiento normativo a largo plazo.
                  </p>
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
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Análisis comparativo:</strong> Una empresa mediana
                    compara el TCO de mantener un centro de datos on-premise vs.
                    migrar a Google Cloud. Aunque los costes mensuales de GCP
                    parecen más altos inicialmente, al considerar la eliminación
                    de costes de hardware, refrigeración, espacio físico y parte
                    del personal de IT, junto con la mejora en escalabilidad y
                    disponibilidad, la solución en la nube resulta más económica
                    a largo plazo. La empresa utiliza la calculadora de TCO de
                    Google Cloud para cuantificar estos ahorros proyectados a 3
                    años.
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
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Uso práctico:</strong> Un arquitecto de soluciones
                    utiliza la AWS Pricing Calculator para estimar el coste
                    mensual de una arquitectura de microservicios que incluye
                    instancias EC2, contenedores en ECS, una base de datos
                    Aurora, y almacenamiento en S3. Ajusta parámetros como el
                    tipo de instancia, el almacenamiento requerido y el tráfico
                    de red esperado para obtener una estimación precisa antes de
                    la implementación.
                  </p>
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
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Caso de optimización:</strong> El equipo de finanzas
                    de una startup utiliza Azure Cost Management para
                    identificar un aumento inesperado en los costes de
                    almacenamiento. Descubren que un conjunto de datos de prueba
                    obsoleto estaba consumiendo una cantidad significativa de
                    almacenamiento premium. Utilizando esta información,
                    coordinan con el equipo de desarrollo para eliminar los
                    datos innecesarios y mover los datos de acceso poco
                    frecuente a un nivel de almacenamiento más económico,
                    logrando un ahorro mensual del 30% en costes de
                    almacenamiento.
                  </p>
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
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Implementación avanzada:</strong> Una empresa
                    multinacional con presencia en múltiples nubes (AWS, Azure y
                    Google Cloud) implementa CloudHealth para obtener una visión
                    unificada de sus costes en la nube. Utilizan la herramienta
                    para identificar recursos infrautilizados en todas las
                    plataformas, establecer políticas de gobernanza de costes
                    coherentes y generar informes personalizados para diferentes
                    unidades de negocio. Esta visibilidad centralizada les
                    permite optimizar su estrategia multi-cloud y negociar
                    mejores términos con los proveedores basándose en su uso
                    agregado.
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
              operativa y la optimización de los servicios en la nube. Los
              proveedores ofrecen diferentes niveles de soporte para adaptarse a
              las necesidades de diversas organizaciones.
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
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Ejemplo de selección:</strong> Una startup de
                    fintech inicialmente opta por el plan de Soporte para
                    Desarrolladores de AWS, que les proporciona acceso a soporte
                    técnico con tiempos de respuesta de 12-24 horas para
                    problemas de producción. A medida que su base de usuarios
                    crece y lanzan servicios críticos, actualizan al plan
                    Empresarial para obtener soporte 24/7 con tiempos de
                    respuesta de 1 hora para incidentes críticos, asegurando la
                    continuidad del negocio.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="beneficios-soporte">
                <AccordionTrigger>
                  Beneficios del Soporte Avanzado
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Resolución rápida de problemas críticos</li>
                    <li>Asesoramiento en arquitectura y mejores prácticas</li>
                    <li>Acceso a especialistas en servicios específicos</li>
                    <li>Soporte en la planificación de la infraestructura</li>
                    <li>Revisiones de seguridad y cumplimiento normativo</li>
                  </ul>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Caso de éxito:</strong> Una empresa de comercio
                    electrónico con el plan de Soporte Empresarial de Azure
                    experimentó un pico de tráfico inesperado durante una
                    campaña viral. Gracias al soporte 24/7, pudieron escalar
                    rápidamente su infraestructura con la ayuda de expertos de
                    Azure, evitando tiempo de inactividad y pérdidas
                    potenciales. Además, el equipo de soporte les proporcionó un
                    análisis post-incidente y recomendaciones para optimizar su
                    arquitectura para futuros eventos de alto tráfico.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="consideraciones-costes">
                <AccordionTrigger>Consideraciones de Costes</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Al evaluar planes de soporte, es importante considerar:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Criticidad de las cargas de trabajo</li>
                    <li>Capacidades internas del equipo de IT</li>
                    <li>Requisitos de cumplimiento normativo</li>
                    <li>
                      Presupuesto disponible vs. riesgo de tiempo de inactividad
                    </li>
                  </ul>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Análisis de ROI:</strong> Una empresa mediana
                    calcula el ROI de actualizar su plan de soporte en Google
                    Cloud. Aunque el coste anual del plan Empresarial es
                    significativo, estiman que el acceso a soporte prioritario y
                    asesoramiento experto les ahorrará potencialmente decenas de
                    miles de euros en tiempo de inactividad evitado y
                    optimización de recursos. Además, la capacidad de resolver
                    problemas críticos rápidamente mejora la satisfacción del
                    cliente, justificando la inversión adicional en soporte.
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
              mientras se minimizan los gastos. Implica una combinación de
              estrategias, herramientas y mejores prácticas.
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
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Aplicación práctica:</strong> Un equipo de DevOps
                    implementa un script automatizado que identifica instancias
                    EC2 (NURI) que han estado inactivas durante más de 48 horas,
                    volúmenes EBS no asociados (PURI), y bases de datos RDS con
                    baja utilización (AURI). Este proceso semanal les permite
                    ahorrar un 25% en costes de infraestructura al eliminar o
                    redimensionar recursos innecesarios.
                  </p>
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
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Caso de estudio:</strong> Una empresa de análisis de
                    datos implementa una estrategia multi-facética de
                    optimización en Azure. Utilizan Azure Advisor para el
                    dimensionamiento correcto de VMs, implementan Azure
                    Functions para procesos por lotes, aprovechan Azure
                    Reservations para cargas de trabajo predecibles, y
                    configuran políticas de ciclo de vida de datos en Azure Blob
                    Storage. Estas medidas combinadas resultan en una reducción
                    del 40% en su factura mensual de Azure.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="herramientas">
                <AccordionTrigger>
                  Herramientas y Recursos para Optimización
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>AWS Trusted Advisor y AWS Cost Explorer</li>
                    <li>Azure Cost Management y Azure Advisor</li>
                    <li>Google Cloud&apos;s Recommender y Cost Management</li>
                    <li>Herramientas de terceros: CloudHealth, Cloudability</li>
                  </ul>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    <strong>Implementación avanzada:</strong> Una multinacional
                    utiliza una combinación de herramientas nativas de la nube y
                    soluciones de terceros para optimizar su infraestructura
                    multi-cloud. Implementan dashboards personalizados que
                    agregan datos de AWS Cost Explorer, Azure Cost Management y
                    Google Cloud Billing, utilizando APIs para automatizar la
                    recolección de datos. Además, utilizan CloudHealth para
                    análisis predictivo de costes y para implementar políticas
                    de gobernanza consistentes en todas las plataformas. Esta
                    estrategia integral les permite mantener un control granular
                    sobre sus gastos en la nube y proyectar con precisión los
                    costes futuros.
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
