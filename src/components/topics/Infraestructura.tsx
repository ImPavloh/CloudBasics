'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  FaServer,
  FaNetworkWired,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
} from 'react-icons/fa'

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
    <Card className="w-full max-w-6xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl">
      <CardHeader>
        <CardTitle className="text-4xl font-bold flex items-center text-blue-600 dark:text-blue-400">
          <FaCloud className="mr-4 h-8 w-8" />
          Infraestructura de la nube
        </CardTitle>
        <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
          Explorando los cimientos de la computación moderna
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="componentes" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 gap-4">
            <TabsTrigger value="componentes">
              Componentes Principales
            </TabsTrigger>
            <TabsTrigger value="modelos">Modelos de Implementación</TabsTrigger>
            <TabsTrigger value="conceptos">Conceptos Clave</TabsTrigger>
            <TabsTrigger value="tendencias">Tendencias Futuras</TabsTrigger>
          </TabsList>

          <TabsContent value="componentes">
            <ComponentesPrincipales />
          </TabsContent>

          <TabsContent value="modelos">
            <ModelosImplementacion />
          </TabsContent>

          <TabsContent value="conceptos">
            <ConceptosClave />
          </TabsContent>

          <TabsContent value="tendencias">
            <TendenciasFuturas />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function ComponentesPrincipales() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Componentes Esenciales de la Infraestructura en la Nube
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          La infraestructura en la nube es un ecosistema complejo de elementos
          interconectados que trabajan en armonía para ofrecer servicios de
          computación flexibles y escalables. Comprender estos componentes es
          fundamental para aprovechar al máximo las capacidades de la nube.
        </p>
      </motion.div>

      {[
        {
          icon: FaServer,
          title: 'Centros de Datos y Servidores',
          description:
            'El corazón palpitante de la nube, estos centros albergan miles de servidores interconectados que procesan y almacenan datos a escala masiva.',
        },
        {
          icon: FaNetworkWired,
          title: 'Redes y Conectividad',
          description:
            'Una red robusta y de alta velocidad es crucial para garantizar la comunicación eficiente entre los componentes de la nube y los usuarios finales.',
        },
        {
          icon: FaDatabase,
          title: 'Sistemas de Almacenamiento',
          description:
            'Desde discos de estado sólido hasta sistemas de almacenamiento en red, estos componentes aseguran que los datos estén siempre disponibles y protegidos.',
        },
        {
          icon: FaShieldAlt,
          title: 'Seguridad y Cumplimiento',
          description:
            'Capas múltiples de seguridad, incluyendo firewalls, encriptación y controles de acceso, protegen los datos y servicios en la nube.',
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex items-start space-x-4"
        >
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
            <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {item.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

function ModelosImplementacion() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Modelos de Implementación en la Nube
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Los modelos de implementación en la nube ofrecen diferentes niveles de
          control, flexibilidad y gestión. La elección del modelo adecuado
          depende de las necesidades específicas de cada organización.
        </p>
      </motion.div>

      {[
        {
          title: 'Nube Pública',
          description:
            'Recursos compartidos disponibles para el público en general. Ofrece escalabilidad y eficiencia en costos, ideal para startups y empresas con demanda variable.',
        },
        {
          title: 'Nube Privada',
          description:
            'Infraestructura dedicada a una sola organización. Proporciona mayor control y seguridad, perfecta para industrias reguladas o con requisitos de cumplimiento estrictos.',
        },
        {
          title: 'Nube Híbrida',
          description:
            'Combina nubes públicas y privadas, permitiendo a las organizaciones aprovechar lo mejor de ambos mundos. Excelente para empresas que buscan optimizar costos manteniendo el control sobre datos críticos.',
        },
        {
          title: 'Nube Multicloud',
          description:
            'Utiliza servicios de múltiples proveedores de nube. Ofrece flexibilidad y reduce la dependencia de un solo proveedor, ideal para organizaciones con necesidades diversas y complejas.',
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
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

function ConceptosClave() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Conceptos Clave en la Infraestructura en la Nube
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Comprender estos conceptos es esencial para diseñar y gestionar
          eficazmente soluciones en la nube, optimizando el rendimiento, la
          disponibilidad y la resiliencia de las aplicaciones.
        </p>
      </motion.div>

      {[
        {
          title: 'Regiones',
          description:
            'Áreas geográficas que contienen múltiples centros de datos. Permiten a las organizaciones desplegar recursos cerca de sus usuarios para reducir la latencia y cumplir con requisitos de residencia de datos.',
        },
        {
          title: 'Zonas de Disponibilidad',
          description:
            'Centros de datos aislados dentro de una región. Proporcionan redundancia y alta disponibilidad, permitiendo a las aplicaciones mantenerse operativas incluso si una zona falla.',
        },
        {
          title: 'Edge Locations',
          description:
            'Puntos de presencia para servicios de entrega de contenido. Acercan los datos a los usuarios finales, mejorando significativamente los tiempos de carga y la experiencia del usuario.',
        },
        {
          title: 'Elasticidad',
          description:
            'Capacidad de escalar recursos automáticamente según la demanda. Permite a las aplicaciones manejar picos de tráfico sin interrupciones y optimizar costos durante períodos de baja utilización.',
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg"
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
