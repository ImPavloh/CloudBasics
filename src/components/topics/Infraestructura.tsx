'use client'

import { motion } from 'framer-motion'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Server,
  Network,
  Database,
  Cloud,
  Shield,
  Globe,
  Zap,
  HardDrive,
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

export default function InfraestructuraEnLaNube() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <CardHeader>
        <CardTitle className="text-4xl font-bold flex items-center text-blue-600 dark:text-blue-400">
          <Cloud className="mr-4 h-8 w-8" />
          Infraestructura de la nube
        </CardTitle>
        <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
          Explorando los cimientos de la computación moderna
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="introduccion" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 gap-4">
            <TabsTrigger value="introduccion">Introducción</TabsTrigger>
            <TabsTrigger value="componentes">Componentes</TabsTrigger>
            <TabsTrigger value="regiones">Regiones y Zonas</TabsTrigger>
            <TabsTrigger value="redundancia">Redundancia Global</TabsTrigger>
            <TabsTrigger value="tendencias">Tendencias Futuras</TabsTrigger>
          </TabsList>

          <TabsContent value="introduccion">
            <IntroduccionInfraestructura />
          </TabsContent>

          <TabsContent value="componentes">
            <ComponentesInfraestructura />
          </TabsContent>

          <TabsContent value="regiones">
            <RegionesYZonas />
          </TabsContent>

          <TabsContent value="redundancia">
            <RedundanciaGlobal />
          </TabsContent>

          <TabsContent value="tendencias">
            <TendenciasFuturas />
          </TabsContent>
        </Tabs>
      </CardContent>
    </main>
  )
}

function IntroduccionInfraestructura() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Introducción a la Infraestructura de Servicios en la Nube
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          La infraestructura de servicios en la nube es la base tecnológica
          sobre la cual se ejecutan los servicios y aplicaciones que utilizamos
          diariamente a través de internet. Esta infraestructura incluye
          recursos físicos y virtuales distribuidos a nivel global, permitiendo
          a empresas y usuarios acceder a capacidades computacionales,
          almacenamiento de datos y redes de manera remota y bajo demanda.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h4 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
          Características Clave
        </h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Red global distribuida de centros de datos</li>
          <li>Escalabilidad global para manejar cargas de trabajo masivas</li>
          <li>Alta disponibilidad y recuperación ante desastres</li>
          <li>Localización geográfica de datos para cumplir regulaciones</li>
          <li>Reducción de latencia y mejora en la experiencia del usuario</li>
          <li>Enfoque en sostenibilidad y eficiencia energética</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h4 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
          Ejemplo Práctico
        </h4>
        <p className="text-gray-700 dark:text-gray-300">
          Microsoft Azure tiene una red global de centros de datos distribuidos
          en más de 60 regiones en todo el mundo. Estos centros de datos están
          conectados por una red de fibra óptica que asegura alta disponibilidad
          y baja latencia para sus servicios en la nube.
        </p>
      </motion.div>
    </motion.div>
  )
}

function ComponentesInfraestructura() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Componentes Principales de la Infraestructura en la Nube
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          La infraestructura de la nube está compuesta por un conjunto de
          elementos físicos y virtuales que se distribuyen y operan a nivel
          global para proporcionar servicios a millones de usuarios.
        </p>
      </motion.div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="servidores">
          <AccordionTrigger>
            <Server className="mr-2 h-5 w-5" />
            Servidores
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Los servidores son el pilar fundamental de la infraestructura de
              la nube. Están diseñados para trabajar en sincronía, distribuyendo
              las cargas de trabajo y ajustándose dinámicamente para atender las
              demandas de los usuarios en diferentes partes del mundo.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Ejemplo:</strong> Los servidores de Amazon Web Services
              (AWS) están distribuidos en más de 30 regiones alrededor del
              mundo, y cada una de estas regiones puede tener miles de
              servidores que se encargan de diferentes tareas.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="almacenamiento">
          <AccordionTrigger>
            <Database className="mr-2 h-5 w-5" />
            Almacenamiento
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              El almacenamiento en la nube es la capacidad de guardar datos de
              manera distribuida en una red global de centros de datos, con
              acceso en cualquier momento y desde cualquier lugar.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Almacenamiento de objetos (ej. Amazon S3)</li>
              <li>Almacenamiento en bloques (ej. Amazon EBS)</li>
              <li>
                Almacenamiento en bases de datos (ej. Google Cloud Spanner)
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="redes">
          <AccordionTrigger>
            <Network className="mr-2 h-5 w-5" />
            Redes
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Las redes son el componente que conecta todos los demás elementos
              de la infraestructura de la nube. Deben ser rápidas, seguras y
              confiables.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Ejemplo:</strong> AWS tiene una red de fibra óptica que
              conecta sus centros de datos en más de 100 puntos de presencia a
              nivel mundial, asegurando que los datos viajen de manera eficiente
              y segura entre usuarios y servidores.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="virtualizacion">
          <AccordionTrigger>
            <HardDrive className="mr-2 h-5 w-5" />
            Sistemas de Virtualización
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              La virtualización permite que varios sistemas operativos y
              aplicaciones se ejecuten en el mismo servidor físico, maximizando
              el uso eficiente de los recursos.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Virtualización de servidores</li>
              <li>Contenedores y microservicios</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <strong>Ejemplo:</strong> Kubernetes, una plataforma de código
              abierto para gestionar contenedores, es utilizado por empresas
              como Shopify y Airbnb para ejecutar sus aplicaciones a escala
              global.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="centros-datos">
          <AccordionTrigger>
            <Shield className="mr-2 h-5 w-5" />
            Centros de Datos
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Los centros de datos son los espacios físicos donde se aloja todo
              el hardware que respalda la infraestructura de la nube:
              servidores, almacenamiento y redes.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Ejemplo:</strong> Los centros de datos de Facebook,
              ubicados en lugares como Suecia, son ejemplos de centros de
              hiperescala que utilizan energía renovable y están diseñados para
              reducir su huella de carbono.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  )
}

function RegionesYZonas() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Regiones, Zonas de Disponibilidad y Zonas de Borde
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          La distribución geográfica de la infraestructura en la nube es
          esencial para garantizar la alta disponibilidad, la baja latencia y la
          resiliencia ante fallos de los servicios.
        </p>
      </motion.div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="regiones">
          <AccordionTrigger>
            <Globe className="mr-2 h-5 w-5" />
            Regiones
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Una región es una localización geográfica que contiene uno o más
              centros de datos que operan de manera independiente, pero
              interconectada.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Ejemplo:</strong> AWS tiene más de 30 regiones activas en
              todo el mundo, con múltiples centros de datos en cada región.
              Estas regiones están ubicadas en lugares estratégicos como Estados
              Unidos, Europa, Asia-Pacífico, Sudamérica y Oriente Medio.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="zonas-disponibilidad">
          <AccordionTrigger>
            <Shield className="mr-2 h-5 w-5" />
            Zonas de Disponibilidad
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Una zona de disponibilidad es un conjunto de centros de datos
              físicamente separados, pero interconectados, dentro de una misma
              región.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Ejemplo:</strong> AWS cuenta con varias zonas de
              disponibilidad en cada una de sus regiones. Por ejemplo, la región
              &quot;US East (N. Virginia)&quot; tiene seis zonas de
              disponibilidad (us-east-1a, us-east-1b, etc.).
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="zonas-borde">
          <AccordionTrigger>
            <Zap className="mr-2 h-5 w-5" />
            Zonas de Borde
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Las zonas de borde son puntos estratégicamente ubicados alrededor
              del mundo donde los proveedores de nube establecen servidores de
              caché y procesamiento para acelerar la entrega de contenido.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Ejemplo:</strong> CloudFront, el servicio de entrega de
              contenido (CDN) de AWS, utiliza más de 400 zonas de borde
              distribuidas globalmente para minimizar la latencia y mejorar la
              experiencia del usuario.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  )
}

function RedundanciaGlobal() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Redundancia Global y Recuperación ante Desastres
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          La arquitectura global de regiones, zonas de disponibilidad y zonas de
          borde está diseñada para garantizar no solo un rendimiento óptimo,
          sino también una alta disponibilidad y redundancia.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h4 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
          Recuperación ante Desastres
        </h4>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Las empresas pueden implementar estrategias de recuperación ante
          desastres al replicar datos y aplicaciones en múltiples regiones y
          zonas.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Ejemplo:</strong> Dropbox utiliza una arquitectura distribuida
          a nivel mundial que asegura que los archivos de los usuarios estén
          replicados en varios centros de datos. Si un centro de datos falla,
          los archivos están disponibles en otro centro de datos, garantizando
          que los usuarios no pierdan acceso a su información.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h4 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
          Alta Disponibilidad
        </h4>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Al desplegar aplicaciones en múltiples regiones y zonas, las empresas
          pueden ofrecer alta disponibilidad. Los proveedores de nube diseñan
          sus regiones y zonas de disponibilidad con acuerdos de nivel de
          servicio (SLA) que garantizan tiempo de actividad cercano al 99.99%.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Ejemplo:</strong> Slack, la popular plataforma de
          colaboración, utiliza una arquitectura multinube que incluye múltiples
          regiones y zonas de disponibilidad para asegurar que los equipos
          puedan seguir colaborando sin interrupciones, incluso si uno de los
          centros de datos experimenta problemas.
        </p>
      </motion.div>
    </motion.div>
  )
}

function TendenciasFuturas() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Tendencias Futuras en Infraestructura en la Nube
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          La infraestructura en la nube está en constante evolución. Estas son
          algunas de las tendencias emergentes que están dando forma al futuro
          de la computación en la nube.
        </p>
      </motion.div>

      {[
        {
          title: 'Computación sin Servidor (Serverless)',
          description:
            'Permite a los desarrolladores crear aplicaciones sin preocuparse por la gestión de la infraestructura subyacente, mejorando la eficiencia y reduciendo costos operativos.',
        },
        {
          title: 'Edge Computing',
          description:
            'Acerca el procesamiento de datos al borde de la red, cerca de donde se generan los datos. Ideal para aplicaciones IoT y casos de uso que requieren baja latencia.',
        },
        {
          title: 'Inteligencia Artificial y Machine Learning como Servicio',
          description:
            'Integración de capacidades avanzadas de IA y ML directamente en la infraestructura en la nube, democratizando el acceso a estas tecnologías.',
        },
        {
          title: 'Infraestructura como Código (IaC)',
          description:
            'Gestión y provisión de infraestructura a través de archivos de configuración, permitiendo una mayor automatización y consistencia en los despliegues.',
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-6 rounded-lg shadow-md"
        >
          <h4 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
            {item.title}
          </h4>
          <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
