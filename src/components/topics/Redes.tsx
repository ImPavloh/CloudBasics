'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Server,
  Globe,
  Terminal,
  Package,
  HardDrive,
  Network,
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

export default function RedesYEntregaDeContenidos() {
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
              <Network className="mr-4 h-12 w-12" />
              Redes y Entrega de Contenidos en la Nube
            </CardTitle>
            <CardDescription className="text-lg text-white dark:text-white">
              Explora los fundamentos de las redes en la nube, la entrega de contenidos y las mejores prácticas de seguridad.
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
            'principios_basicos',
            'clasificacion_redes',
            'protocolos_redes',
            'direccionamiento_redes',
            'dns',
            'conectividad_trafico',
            'seguridad_redes',
            'redes_avanzadas',
            'vpc_networking',
            'seguridad_vpc',
            'dns_nube',
            'cdn',
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
              <IntroduccionRedesYEntrega />
            </TabsContent>

            <TabsContent value="principios_basicos">
              <PrincipiosBasicosRedes />
            </TabsContent>

            <TabsContent value="clasificacion_redes">
              <ClasificacionRedes />
            </TabsContent>

            <TabsContent value="protocolos_redes">
              <ProtocolosRedes />
            </TabsContent>

            <TabsContent value="direccionamiento_redes">
              <DireccionamientoRedes />
            </TabsContent>

            <TabsContent value="dns">
              <DNSRedes />
            </TabsContent>

            <TabsContent value="conectividad_trafico">
              <ConectividadTraficoRedes />
            </TabsContent>

            <TabsContent value="seguridad_redes">
              <SeguridadRedes />
            </TabsContent>

            <TabsContent value="redes_avanzadas">
              <RedesAvanzadas />
            </TabsContent>

            <TabsContent value="vpc_networking">
              <VPCNetworking />
            </TabsContent>

            <TabsContent value="seguridad_vpc">
              <SeguridadVPC />
            </TabsContent>

            <TabsContent value="dns_nube">
              <DNSNube />
            </TabsContent>

            <TabsContent value="cdn">
              <CDNRedes />
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </main>
  )
}

function IntroduccionRedesYEntrega() {
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
              <Globe className="mr-2 h-6 w-6" />
              Introducción a Redes y Entrega de Contenidos en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La computación en la nube se sustenta en la conectividad, que hace posible la interacción entre los usuarios finales y los recursos alojados en la nube. Las redes y los sistemas de entrega de contenidos desempeñan un papel clave al garantizar que los servicios y aplicaciones se accedan de manera eficiente, segura y confiable.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Características Principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Escalabilidad',
                  description: 'Las redes en la nube pueden ajustarse dinámicamente para manejar mayores volúmenes de tráfico según las necesidades.',
                },
                {
                  text: 'Flexibilidad y Elasticidad',
                  description: 'La infraestructura de red en la nube se adapta dinámicamente a las fluctuaciones en la carga de trabajo.',
                },
                {
                  text: 'Alta Disponibilidad Global y Redundancia',
                  description: 'Gracias a los centros de datos distribuidos, los recursos en la nube están disponibles en cualquier momento y lugar.',
                },
                {
                  text: 'Seguridad Integrada',
                  description: 'Las redes en la nube incluyen herramientas avanzadas de seguridad, como firewalls, encriptación de datos y control de acceso de autenticación multifactor.',
                },
                {
                  text: 'Optimización del Rendimiento',
                  description: 'La entrega de contenidos utiliza servidores distribuidos estratégicamente para minimizar el tiempo necesario para transferir datos al usuario final.',
                },
                {
                  text: 'Globalización',
                  description: 'La infraestructura en la nube permite a las empresas desplegar y gestionar redes a nivel global.',
                },
                {
                  text: 'Automatización y Orquestación',
                  description: 'Las herramientas de automatización permiten la gestión eficiente de recursos de red, como el aprovisionamiento de servidores y la configuración de políticas de red.',
                },
                {
                  text: 'Reducción de Costes',
                  description: 'Al utilizar una red en la nube, las empresas pueden reducir sus costes de infraestructura y mantenimiento.',
                },
                {
                  text: 'Rendimiento Mejorado',
                  description: 'Las redes en la nube a menudo ofrecen un rendimiento mejorado gracias a la optimización de rutas de datos y la capacidad de utilizar tecnologías avanzadas.',
                },
                {
                  text: 'Facilidad de Gestión',
                  description: 'Las soluciones de gestión basadas en la nube ofrecen interfaces intuitivas y herramientas de administración centralizadas.',
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

function PrincipiosBasicosRedes() {
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
              Conceptos Generales de las Redes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Una red informática es un conjunto de dispositivos conectados entre sí que comparten recursos e información. Los dispositivos pueden incluir computadoras, teléfonos móviles, tabletas, impresoras, servidores y más.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Componentes Básicos de una Red
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Server,
                  text: 'Dispositivos Finales',
                  description: 'Computadoras personales, servidores, teléfonos inteligentes, dispositivos IoT.',
                },
                {
                  icon: HardDrive,
                  text: 'Dispositivos Intermedios',
                  description: 'Switches, routers, puntos de acceso, firewalls.',
                },
                {
                  icon: Network,
                  text: 'Medios de Transmisión',
                  description: 'Cables de red, fibra óptica, señales inalámbricas (Wi-Fi, Bluetooth, redes celulares).',
                },
                {
                  icon: Terminal,
                  text: 'Direccionamiento y Protocolos de Comunicación',
                  description: 'Direcciones IP, MAC Address, protocolos como TCP/IP, HTTP/HTTPS, DNS.',
                },
                {
                  icon: Package,
                  text: 'Servicios de Red Avanzados',
                  description: 'Servidores de almacenamiento en la nube, VPN, redes de entrega de contenido (CDN).',
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
    </motion.div>
  )
}

function ClasificacionRedes() {
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
              Clasificación Según la Extensión Geográfica
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Red de Área Personal (PAN)',
                  description: 'Conexión de dispositivos personales en un área reducida, como Bluetooth entre un teléfono y auriculares.',
                },
                {
                  text: 'Red de Área Local (LAN)',
                  description: 'Conexión de dispositivos dentro de un área limitada, como una casa o oficina.',
                },
                {
                  text: 'Red de Área Metropolitana (MAN)',
                  description: 'Cubre un área más grande que una LAN, como una ciudad o campus universitario.',
                },
                {
                  text: 'Red de Área Amplia (WAN)',
                  description: 'Abarca una gran extensión geográfica, como un país o el mundo (Internet).',
                },
                {
                  text: 'Red de Área de Almacenamiento (SAN)',
                  description: 'Red especializada en la transferencia y almacenamiento de datos a alta velocidad.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Clasificación Según la Arquitectura
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Redes Cliente-Servidor',
                  description: 'Los clientes solicitan servicios a un servidor central.',
                },
                {
                  text: 'Redes Peer-to-Peer (P2P)',
                  description: 'Los dispositivos actúan como clientes y servidores simultáneamente.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Clasificación Según el Tipo de Conexión
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Redes Cableadas',
                  description: 'Utilizan cables físicos como cobre o fibra óptica.',
                },
                {
                  text: 'Redes Inalámbricas',
                  description: 'Utilizan ondas de radio, infrarrojos o satélites.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Clasificación Según la Topología de la Red
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Topología en Bus',
                  description: 'Todos los dispositivos están conectados a un único cable central.',
                },
                {
                  text: 'Topología en Estrella',
                  description: 'Todos los dispositivos se conectan a un punto central (switch o router).',
                },
                {
                  text: 'Topología en Anillo',
                  description: 'Cada dispositivo está conectado a dos otros dispositivos, formando un círculo.',
                },
                {
                  text: 'Topología en Malla',
                  description: 'Cada dispositivo está conectado con múltiples otros dispositivos.',
                },
                {
                  text: 'Topología Mixta o Híbrida',
                  description: 'Combina dos o más topologías.',
                },
                {
                  text: 'Topología en Árbol o Jerárquica',
                  description: 'Estructura en forma de árbol, con nodos organizados en niveles jerárquicos.',
                },
                {
                  text: 'Topología en Conexión Wi-Fi',
                  description: 'Permite la creación de segmentos de red de la topología en árbol en una mezcla con segmentos cableados.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Clasificación Según la Administración y Propiedad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Redes Privadas',
                  description: 'Utilizadas por organizaciones, empresas o particulares para fines específicos.',
                },
                {
                  text: 'Redes Públicas',
                  description: 'Accesibles para cualquier usuario y generalmente gestionadas por entidades gubernamentales o proveedores de servicios.',
                },
                {
                  text: 'Redes Híbridas',
                  description: 'Combinan elementos de redes públicas y privadas.',
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

function ProtocolosRedes() {
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
              Modelos de Referencia en Redes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Los modelos de referencia en redes organizan los protocolos en capas para facilitar la comprensión y el funcionamiento de la comunicación en una red.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Modelo OSI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Capa Física',
                  description: 'Transmisión de bits a través del medio físico (cables, ondas de radio, fibra óptica).',
                },
                {
                  text: 'Capa de Enlace de Datos',
                  description: 'Organiza los bits en tramas y gestiona la detección y corrección de errores.',
                },
                {
                  text: 'Capa de Red',
                  description: 'Direccionamiento y encaminamiento de los paquetes de datos entre redes.',
                },
                {
                  text: 'Capa de Transporte',
                  description: 'Garantiza que los datos lleguen completos y en orden (TCP/UDP).',
                },
                {
                  text: 'Capa de Sesión',
                  description: 'Gestiona el inicio, mantenimiento y finalización de una sesión de comunicación.',
                },
                {
                  text: 'Capa de Presentación',
                  description: 'Traduce los datos entre diferentes formatos, comprime información y cifra datos.',
                },
                {
                  text: 'Capa de Aplicación',
                  description: 'Proporciona los servicios con los que interactuamos, como el correo electrónico y la web.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Modelo TCP/IP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Capa de Acceso a la Red',
                  description: 'Equivalente a las capas Física y de Enlace del modelo OSI.',
                },
                {
                  text: 'Capa de Internet',
                  description: 'Se encarga de mover los paquetes de datos entre redes diferentes.',
                },
                {
                  text: 'Capa de Transporte',
                  description: 'Usa los protocolos TCP y UDP para garantizar la entrega confiable de datos.',
                },
                {
                  text: 'Capa de Aplicación',
                  description: 'Similar a la capa de Aplicación del modelo OSI.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Protocolos de Red Más Utilizados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="aplicacion">
                <AccordionTrigger className="text-gray-700 dark:text-gray-300">
                  Protocolos de la Capa de Aplicación
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        text: 'HTTP/HTTPS',
                        description: 'Permite acceder a páginas web.',
                      },
                      {
                        text: 'SMTP, POP3, IMAP',
                        description: 'Gestionan el envío y recepción de correos electrónicos.',
                      },
                      {
                        text: 'FTP',
                        description: 'Facilita la transferencia de archivos entre computadoras.',
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
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="transporte">
                <AccordionTrigger className="text-gray-700 dark:text-gray-300">
                  Protocolos de la Capa de Transporte
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        text: 'TCP',
                        description: 'Asegura la entrega confiable de datos.',
                      },
                      {
                        text: 'UDP',
                        description: 'Prioriza la velocidad sobre la confiabilidad.',
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
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="internet">
                <AccordionTrigger className="text-gray-700 dark:text-gray-300">
                  Protocolos de la Capa de Internet
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        text: 'IP',
                        description: 'Se encarga del direccionamiento y envío de paquetes.',
                      },
                      {
                        text: 'ICMP',
                        description: 'Permite enviar mensajes de error y diagnóstico (como los comandos "ping").',
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
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="acceso">
                <AccordionTrigger className="text-gray-700 dark:text-gray-300">
                  Protocolos de la Capa de Acceso a la Red
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        text: 'Ethernet',
                        description: 'Define cómo se transmiten los datos en redes cableadas.',
                      },
                      {
                        text: 'Wi-Fi',
                        description: 'Permite la comunicación inalámbrica entre dispositivos.',
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function DireccionamientoRedes() {
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
              ¿Qué es una dirección en una red?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Una dirección de red es un identificador único que se asigna a un dispositivo dentro de una red para que pueda comunicarse con otros dispositivos.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tipos de Direccionamiento en Redes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Direccionamiento Físico (Dirección MAC)',
                  description: 'Dirección única asignada a cada dispositivo de red.',
                },
                {
                  text: 'Direccionamiento Lógico (Dirección IP)',
                  description: 'Dirección que permite identificar dispositivos dentro de una red y facilita la comunicación a través de internet.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Versiones de Direcciones IP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'IPv4',
                  description: 'Utiliza direcciones de 32 bits y permite aproximadamente 4,3 mil millones de direcciones únicas.',
                },
                {
                  text: 'IPv6',
                  description: 'Utiliza direcciones de 128 bits y permite una cantidad prácticamente ilimitada de direcciones.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tipos de Direcciones IP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Dirección IP Privada',
                  description: 'Se usa dentro de redes locales y no es accesible desde internet.',
                },
                {
                  text: 'Dirección IP Pública',
                  description: 'Es asignada por un proveedor de servicios de internet (ISP) y permite que un dispositivo sea accesible desde internet.',
                },
                {
                  text: 'Dirección IP Estática',
                  description: 'No cambia con el tiempo y es asignada manualmente.',
                },
                {
                  text: 'Dirección IP Dinámica',
                  description: 'Cambia cada vez que el dispositivo se conecta a la red, asignada automáticamente por el DHCP.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Subnetting y Clases de Direcciones IP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Clases de Direcciones IP',
                  description: 'Las direcciones IPv4 se dividen en cinco clases principales: A, B, C, D, E.',
                },
                {
                  text: 'Subnetting',
                  description: 'Permite dividir una red grande en subredes más pequeñas para optimizar el uso de direcciones IP y mejorar la seguridad.',
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

function DNSRedes() {
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
              ¿Por qué es necesario el DNS?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              El DNS es necesario porque los usuarios recuerdan nombres de dominio más fácilmente que direcciones IP. El DNS traduce los nombres de dominio en direcciones IP.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ¿Qué es el Sistema de Nombres de Dominio (DNS)?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              El DNS es una infraestructura jerárquica y distribuida que permite la traducción de nombres de dominio en direcciones IP.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Jerarquía del DNS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Dominios de Nivel Superior (TLD)',
                  description: 'Extensiones como .com, .org, .net, .edu.',
                },
                {
                  text: 'Dominios de Segundo Nivel',
                  description: 'Nombres registrados por organizaciones o personas, como ejemplo.com.',
                },
                {
                  text: 'Dominios de Tercer Nivel (Subdominios)',
                  description: 'Divisiones dentro de un dominio principal, como blog.ejemplo.com o correo.ejemplo.com.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Funcionamiento de la Resolución de Nombres
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Consulta Recursiva',
                  description: 'El servidor DNS consulta otros servidores en nombre del cliente hasta encontrar la respuesta.',
                },
                {
                  text: 'Consulta Iterativa',
                  description: 'El servidor DNS proporciona la mejor respuesta posible y puede recomendar otro servidor al cliente.',
                },
                {
                  text: 'Pasos en la Resolución de Nombres',
                  description: 'El proceso incluye consultar la caché local, el servidor DNS recursivo, el servidor raíz, el servidor TLD, y el servidor de nombres autoritativo.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Servidores DNS Populares y Configuración
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Google DNS',
                  description: '8.8.8.8 y 8.8.4.4',
                },
                {
                  text: 'Cloudflare DNS',
                  description: '1.1.1.1',
                },
                {
                  text: 'OpenDNS',
                  description: '208.67.222.222 y 208.67.220.220',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Seguridad en DNS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Cache Poisoning',
                  description: 'Un atacante introduce información falsa en un servidor DNS.',
                },
                {
                  text: 'DNS Spoofing',
                  description: 'Se falsifica una respuesta DNS para engañar al usuario y enviarlo a un sitio fraudulento.',
                },
                {
                  text: 'Ataques DDoS',
                  description: 'Sobrecargan servidores DNS para hacer que los sitios web sean inaccesibles.',
                },
                {
                  text: 'DNSSEC',
                  description: 'Añade autenticación y verificación de las respuestas DNS para prevenir manipulaciones.',
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

function ConectividadTraficoRedes() {
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
              Conectividad en Redes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La conectividad es la capacidad de los dispositivos dentro de una red para intercambiar información de manera eficiente.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tipos de Conectividad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Conectividad por Cable',
                  description: 'Utiliza cables físicos para transmitir datos.',
                },
                {
                  text: 'Conectividad Inalámbrica',
                  description: 'No requiere cables físicos, lo que brinda mayor flexibilidad.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Parámetros Claves en la Conectividad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Ancho de Banda',
                  description: 'Capacidad máxima de transmisión de datos en una red.',
                },
                {
                  text: 'Latencia',
                  description: 'Tiempo que tarda un paquete de datos en viajar de un punto a otro.',
                },
                {
                  text: 'Pérdida de Paquetes',
                  description: 'Porcentaje de datos que no llegan a su destino.',
                },
                {
                  text: 'Jitter',
                  description: 'Variabilidad en el tiempo de llegada de los paquetes de datos.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tráfico de Red
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Tráfico Unicast',
                  description: 'Un paquete es enviado de un solo emisor a un solo receptor.',
                },
                {
                  text: 'Tráfico Broadcast',
                  description: 'Un paquete es enviado a todos los dispositivos de una red.',
                },
                {
                  text: 'Tráfico Multicast',
                  description: 'Un paquete es enviado a un grupo específico de dispositivos.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Factores que Afectan el Tráfico de Red
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Número de Usuarios Conectados',
                  description: 'A mayor cantidad de dispositivos, mayor tráfico.',
                },
                {
                  text: 'Tipo de Datos Transmitidos',
                  description: 'Videos en streaming generan más tráfico que texto o imágenes.',
                },
                {
                  text: 'Uso de Aplicaciones en la Nube',
                  description: 'Herramientas como Google Drive o Microsoft Teams requieren un alto consumo de ancho de banda.',
                },
                {
                  text: 'Congestión de la Red',
                  description: 'Cuando hay demasiado tráfico, se pueden generar retrasos y pérdidas de paquetes.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Gestión y Optimización del Tráfico de Red
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Calidad de Servicio (QoS)',
                  description: 'Permite priorizar ciertos tipos de tráfico para garantizar un mejor rendimiento en aplicaciones críticas.',
                },
                {
                  text: 'Balanceo de Carga',
                  description: 'Distribuye el tráfico de red entre múltiples servidores o rutas para evitar la congestión.',
                },
                {
                  text: 'Uso de Proxies y Caché',
                  description: 'Reduce el tráfico almacenando copias de sitios web visitados con frecuencia.',
                },
                {
                  text: 'Segmentación de Redes (VLANs)',
                  description: 'Permite dividir una red en segmentos lógicos para mejorar la eficiencia y seguridad.',
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

function SeguridadRedes() {
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
              Conceptos Fundamentales de Seguridad de Redes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Confidencialidad',
                  description: 'Garantiza que la información solo pueda ser accedida por personas autorizadas.',
                },
                {
                  text: 'Integridad',
                  description: 'Asegura que los datos no sean modificados sin autorización.',
                },
                {
                  text: 'Disponibilidad',
                  description: 'Mantiene la red y los sistemas accesibles para los usuarios legítimos.',
                },
                {
                  text: 'Autenticación',
                  description: 'Verifica la identidad de los usuarios y dispositivos que intentan acceder a la red.',
                },
                {
                  text: 'No Repudio',
                  description: 'Garantiza que una acción realizada en la red no pueda ser negada posteriormente.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tipos de Amenazas en Seguridad de Redes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Ataques de Malware',
                  description: 'Software malicioso como virus, troyanos o ransomware.',
                },
                {
                  text: 'Ataques de Phishing',
                  description: 'Suplantación de identidad para obtener información confidencial.',
                },
                {
                  text: 'Ataques de Denegación de Servicio (DoS/DDoS)',
                  description: 'Sobrecargan la red hasta dejarla inoperativa.',
                },
                {
                  text: 'Intercepción de Datos (Man-in-the-Middle)',
                  description: 'Un atacante se sitúa entre la comunicación de dos dispositivos y espía o manipula la información.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Herramientas de Protección en Seguridad de Redes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Firewalls',
                  description: 'Controlan el tráfico de red, permitiendo o bloqueando conexiones según reglas de seguridad.',
                },
                {
                  text: 'Cifrado de Datos',
                  description: 'Convierte la información en un código ilegible para que solo los destinatarios autorizados puedan descifrarla.',
                },
                {
                  text: 'VPN (Red Privada Virtual)',
                  description: 'Crea una conexión segura entre el usuario e internet, protegiendo la información transmitida.',
                },
                {
                  text: 'Sistemas de Detección y Prevención de Intrusos (IDS/IPS)',
                  description: 'Analizan el tráfico de red en busca de actividades sospechosas y bloquean ataques antes de que causen daño.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Buenas Prácticas en Seguridad de Redes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Uso de Contraseñas Seguras',
                  description: 'Combinar letras, números y símbolos para dificultar ataques.',
                },
                {
                  text: 'Autenticación Multifactor (MFA)',
                  description: 'Añadir una segunda capa de seguridad, como un código enviado al móvil.',
                },
                {
                  text: 'Actualización Constante de Software',
                  description: 'Evita vulnerabilidades explotadas por los atacantes.',
                },
                {
                  text: 'Segmentación de Red',
                  description: 'Dividir la red en secciones para limitar el acceso en caso de ataque.',
                },
                {
                  text: 'Concienciación del Usuario',
                  description: 'Capacitar a los empleados y usuarios sobre seguridad informática.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Seguridad de Redes en Ambientes Empresariales y en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Redes Privadas Virtuales (VPN)',
                  description: 'Permiten a los empleados acceder a los recursos de la empresa de forma segura desde cualquier lugar.',
                },
                {
                  text: 'Control de Acceso Basado en Roles (RBAC)',
                  description: 'Gestiona quién puede acceder a qué recursos y qué acciones pueden realizar.',
                },
                {
                  text: 'Protección Contra Accesos No Autorizados',
                  description: 'Implementar autenticación multifactor y cifrado de datos en tránsito y en reposo.',
                },
                {
                  text: 'Reglas de Seguridad en Entornos como AWS, Azure y Google Cloud',
                  description: 'Configurar reglas de seguridad específicas para proteger los recursos en la nube.',
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

function RedesAvanzadas() {
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
              Introducción a las Redes Avanzadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Las redes avanzadas son infraestructuras de comunicación que emplean tecnologías innovadoras para mejorar la eficiencia, escalabilidad y seguridad en la transmisión de datos.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tecnologías de Redes Avanzadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Redes Definidas por Software (SDN)',
                  description: 'Separan el control de la red de la infraestructura física, permitiendo una gestión centralizada y flexible.',
                },
                {
                  text: 'Virtualización de Redes (NFV)',
                  description: 'Reemplazan dispositivos de red físicos por funciones virtualizadas que se ejecutan en servidores estándar.',
                },
                {
                  text: 'Redes de Alta Velocidad y Redes Ópticas',
                  description: 'Utilizan luz para transmitir datos a velocidades extremadamente altas.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Computación en la Nube y Redes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Nube Pública',
                  description: 'Infraestructura compartida por múltiples usuarios, como AWS, Google Cloud o Microsoft Azure.',
                },
                {
                  text: 'Nube Privada',
                  description: 'Recursos exclusivos para una organización, ofreciendo mayor control y seguridad.',
                },
                {
                  text: 'Nube Híbrida',
                  description: 'Combinación de nube pública y privada para optimizar costos y seguridad.',
                },
                {
                  text: 'Multinube',
                  description: 'Uso de múltiples proveedores de nube para evitar la dependencia de uno solo.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Redes de Distribución de Contenidos (CDN)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Las CDN almacenan en caché copias de contenido estático en múltiples ubicaciones alrededor del mundo, conocidas como puntos de presencia (PoPs).
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Seguridad en Redes en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                text: 'Autenticación y Control de Acceso',
                description: 'MFA (Autenticación Multifactor): Requiere más de una forma de verificación para acceder a un sistema.',
              },
              {
                text: 'Cifrado de Datos',
                description: 'Protege los datos en tránsito y en reposo mediante mecanismos de cifrado.',
              },
              {
                text: 'Seguridad Zero Trust',
                description: 'Modelo de seguridad en el que ningún usuario o dispositivo es confiable por defecto, verificando siempre antes de otorgar acceso.',
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

function VPCNetworking() {
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
              Introducción a las Nubes Privadas Virtuales (VPC)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Una Nube Privada Virtual (VPC) es una red aislada dentro de un entorno de computación en la nube, que funciona como una red privada tradicional dentro de un centro de datos.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Componentes Básicos de una VPC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Subredes',
                  description: 'División dentro de la VPC que agrupa recursos según su función o ubicación.',
                },
                {
                  text: 'Direccionamiento IP en una VPC',
                  description: 'Cada recurso dentro de una VPC necesita una dirección IP para comunicarse.',
                },
                {
                  text: 'Puertas de Enlace',
                  description: 'Permiten que las instancias en una VPC se comuniquen con Internet.',
                },
                {
                  text: 'Tablas de Enrutamiento',
                  description: 'Definen cómo se dirige el tráfico dentro de la VPC.',
                },
                {
                  text: 'Grupos de Seguridad y ACLs',
                  description: 'Controlan el tráfico entrante y saliente de los recursos dentro de la VPC.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Conectividad dentro y fuera de una VPC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Conectividad Interna',
                  description: 'Comunicación entre subredes dentro de la misma VPC.',
                },
                {
                  text: 'Conectividad con otros Entornos',
                  description: 'VPC Peering, VPN, Direct Connect.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Seguridad en una VPC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Control de Tráfico',
                  description: 'Configurar reglas para controlar qué tráfico entra y sale mediante ACLs y Grupos de Seguridad.',
                },
                {
                  text: 'Protección Contra Ataques',
                  description: 'Filtrado de tráfico malicioso, e Integración con servicios de protección contra DDoS.',
                },
                {
                  text: 'Monitoreo y Auditoría',
                  description: 'Servicios como AWS CloudTrail, VPC Flow Logs o Azure Network Watcher permiten registrar y analizar el tráfico dentro de la VPC para detectar posibles amenazas.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Escalabilidad y Alta Disponibilidad en una VPC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Uso de Múltiples Zonas de Disponibilidad (AZs)',
                  description: 'Distribuir recursos entre varias ubicaciones geográficas dentro de una misma región para garantizar que el sistema siga funcionando incluso si una zona falla.',
                },
                {
                  text: 'Balanceo de Carga',
                  description: 'Distribuir el tráfico de red entre múltiples servidores y evitar sobrecargas.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Servicios Avanzados en una VPC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Bases de Datos en la Nube',
                  description: 'Alojar bases de datos gestionadas como Amazon RDS, Google Cloud SQL o Azure Database.',
                },
                {
                  text: 'Redes Híbridas y Multi-Nube',
                  description: 'Integrar VPCs con otras nubes o con redes locales, creando entornos híbridos o multi-nube.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Buenas Prácticas para el Uso de VPC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Diseñar una Arquitectura de Red Bien Segmentada',
                  description: 'Separar bases de datos, aplicaciones y servicios.',
                },
                {
                  text: 'Aplicar Políticas de Seguridad Estrictas',
                  description: 'Reducir riesgos.',
                },
                {
                  text: 'Configurar Correctamente las Tablas de Enrutamiento',
                  description: 'Evitar problemas de conectividad.',
                },
                {
                  text: 'Monitorear el Tráfico de la Red',
                  description: 'Detectar amenazas y optimizar el rendimiento.',
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

function SeguridadVPC() {
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
              Introducción a la Seguridad en VPC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La seguridad en una nube privada virtual (VPC) es crucial para garantizar que los recursos dentro de la nube estén protegidos frente a accesos no autorizados, ataques cibernéticos y pérdida de datos.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Principales Elementos de Seguridad en VPC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Grupos de Seguridad',
                  description: 'Controlan el tráfico entrante y saliente de las instancias dentro de una VPC.',
                },
                {
                  text: 'Listas de Control de Acceso (ACLs)',
                  description: 'Regulan el acceso entre las subredes dentro de la VPC.',
                },
                {
                  text: 'Puertas de Enlace',
                  description: 'Permiten que las instancias en una VPC se comuniquen con Internet.',
                },
                {
                  text: 'Cifrado y Protección de Datos',
                  description: 'Protege los datos en tránsito y en reposo mediante mecanismos de cifrado.',
                },
                {
                  text: 'Monitoreo y Auditoría',
                  description: 'Registrar y analizar el tráfico dentro de la VPC para detectar posibles amenazas.',
                },
                {
                  text: 'Control de Acceso y Autenticación',
                  description: 'Gestionar quién puede acceder a qué recursos y con qué nivel de privilegios.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Mejores Prácticas de Seguridad en VPC
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Minimizar la Exposición de Recursos a Internet',
                  description: 'Solo los recursos que realmente necesitan acceso externo deben tener direcciones IP públicas.',
                },
                {
                  text: 'Implementar un Enfoque de Defensa en Profundidad',
                  description: 'Utilizar múltiples capas de seguridad, como firewalls, grupos de seguridad y monitoreo constante.',
                },
                {
                  text: 'Mantener Políticas de Acceso Estrictas',
                  description: 'Usar principios de menor privilegio para limitar el acceso a recursos solo a los usuarios que realmente lo necesiten.',
                },
                {
                  text: 'Monitorear y Auditar Regularmente',
                  description: 'Implementar servicios de monitoreo y registrar todas las actividades en la red para detectar posibles amenazas.',
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

function DNSNube() {
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
              Introducción a los Servicios de Resolución de Nombres de Dominio (DNS)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              El DNS es fundamental para la navegación en Internet, traduciendo nombres de dominio en direcciones IP.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ¿Cómo Funciona el DNS en la Nube?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              En la nube, los servicios DNS se gestionan a través de proveedores como Amazon Route 53, Google Cloud DNS y Azure DNS, lo que simplifica la administración y mejora la fiabilidad y escalabilidad.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Principales Componentes de los Servicios DNS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Nombre de Dominio',
                  description: 'El nombre de dominio es la dirección que los usuarios escriben para acceder a un sitio web.',
                },
                {
                  text: 'Servidor de Nombres',
                  description: 'Una computadora que almacena registros de DNS y responde a las solicitudes DNS.',
                },
                {
                  text: 'Registros DNS',
                  description: 'Entradas en una base de datos que vinculan un nombre de dominio a otros datos relevantes.',
                },
                {
                  text: 'TTL (Time to Live)',
                  description: 'El tiempo que un registro DNS es almacenado en la caché de los servidores de nombres.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Beneficios de Utilizar DNS en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Escalabilidad y Alta Disponibilidad',
                  description: 'Los servicios DNS en la nube están diseñados para manejar grandes volúmenes de tráfico.',
                },
                {
                  text: 'Redundancia Global',
                  description: 'Los proveedores de DNS en la nube operan servidores DNS en múltiples ubicaciones geográficas.',
                },
                {
                  text: 'Integración con Otros Servicios en la Nube',
                  description: 'Los servicios DNS en la nube suelen estar estrechamente integrados con otros servicios de infraestructura en la nube.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Ejemplos de Servicios de Resolución de Nombres en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Amazon Route 53',
                  description: 'Servicio DNS gestionado que ofrece alta disponibilidad y escalabilidad.',
                },
                {
                  text: 'Google Cloud DNS',
                  description: 'Servicio de resolución de nombres altamente disponible y escalable.',
                },
                {
                  text: 'Azure DNS',
                  description: 'Servicio DNS que proporciona la misma funcionalidad de resolución de nombres dentro del ecosistema de Microsoft Azure.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Consideraciones de Seguridad en DNS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'DNSSEC',
                  description: 'Añade autenticación y verificación de las respuestas DNS para prevenir manipulaciones.',
                },
                {
                  text: 'Protección Contra DDoS',
                  description: 'Los servicios de DNS en la nube también pueden protegerte contra ataques DDoS.',
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

function CDNRedes() {
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
              Introducción a las Redes de Entrega de Contenidos (CDN)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Una CDN es un sistema de servidores distribuidos geográficamente que trabajan juntos para proporcionar la entrega de contenido web de manera eficiente y rápida a los usuarios finales.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Funcionamiento Básico de una CDN
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Solicitud del Usuario',
                  description: 'El usuario solicita una página web o un recurso.',
                },
                {
                  text: 'Redirección al Servidor Más Cercano',
                  description: 'El sistema CDN identifica el servidor más cercano al usuario.',
                },
                {
                  text: 'Entrega de Contenido',
                  description: 'El servidor cercano (nodo de borde) entrega el contenido solicitado.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tipos de Contenido que Gestionan las CDN
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Contenido Estático',
                  description: 'Archivos que no cambian con frecuencia, como imágenes, videos, hojas de estilo (CSS), y scripts JavaScript.',
                },
                {
                  text: 'Contenido Dinámico',
                  description: 'Archivos que pueden cambiar dependiendo del usuario o la solicitud, como bases de datos, datos de usuario o información personalizada.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Beneficios de Utilizar una CDN
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Mejora en el Rendimiento',
                  description: 'Reducción de la latencia y mejora en la velocidad de carga.',
                },
                {
                  text: 'Reducción de la Carga en el Servidor de Origen',
                  description: 'La CDN reduce el tráfico hacia el servidor de origen al almacenar una copia del contenido en sus servidores.',
                },
                {
                  text: 'Escalabilidad',
                  description: 'Las CDN pueden manejar picos de tráfico de manera eficiente.',
                },
                {
                  text: 'Redundancia y Fiabilidad',
                  description: 'Si un servidor de borde en una región falla, el tráfico puede ser redirigido automáticamente a otros servidores disponibles.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Componentes de una CDN
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Servidores de Borde',
                  description: 'Servidores ubicados en diferentes ubicaciones geográficas que almacenan y entregan el contenido a los usuarios.',
                },
                {
                  text: 'Orígenes',
                  description: 'El servidor de origen es donde se encuentra el contenido original.',
                },
                {
                  text: 'Cacheo',
                  description: 'Las CDN utilizan técnicas de cacheo para almacenar el contenido temporalmente en los servidores de borde.',
                },
                {
                  text: 'Redirección y Enrutamiento Inteligente',
                  description: 'Las CDN utilizan algoritmos de enrutamiento inteligente para dirigir las solicitudes de los usuarios al servidor más cercano.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Tipos de CDN
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'CDN de "Push"',
                  description: 'El contenido se envía activamente desde el servidor de origen a la red de servidores de borde.',
                },
                {
                  text: 'CDN de "Pull"',
                  description: 'Cuando un usuario solicita un contenido, el servidor de borde obtiene automáticamente ese contenido del servidor de origen y lo almacena para futuras solicitudes.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Ejemplos de Proveedores de CDN
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Akamai',
                  description: 'Uno de los mayores proveedores de CDN, conocido por su amplia red de servidores de borde y su capacidad para manejar grandes volúmenes de tráfico.',
                },
                {
                  text: 'Cloudflare',
                  description: 'Proveedor popular que ofrece servicios de CDN, junto con protección DDoS, seguridad web y optimización de rendimiento.',
                },
                {
                  text: 'Amazon CloudFront',
                  description: 'El servicio CDN de AWS, que permite distribuir contenido de manera rápida y segura a través de una red global de servidores.',
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
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Consideraciones de Seguridad en las CDN
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Encriptación SSL/TLS',
                  description: 'Protege las comunicaciones entre los usuarios y los servidores.',
                },
                {
                  text: 'Protección DDoS',
                  description: 'Mitigar los ataques de denegación de servicio.',
                },
                {
                  text: 'Autenticación de Contenido',
                  description: 'Garantizar que solo el contenido legítimo sea entregado a los usuarios.',
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
