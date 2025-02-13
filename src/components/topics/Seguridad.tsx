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
  Terminal,
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

export default function SeguridadEnLaNube() {
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
              <Shield className="mr-4 h-12 w-12" />
              Seguridad en la Nube: Conceptos y Estrategias
            </CardTitle>
            <CardDescription className="text-lg text-white dark:text-white">
              Explora los fundamentos de la seguridad en la nube, modelos de responsabilidad y mejores prácticas.
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
            'seguridad_informatica',
            'modelo_responsabilidad',
            'seguridad_fisica',
            'seguridad_logica',
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
              <IntroduccionSeguridadNube />
            </TabsContent>

            <TabsContent value="seguridad_informatica">
              <SeguridadInformatica />
            </TabsContent>

            <TabsContent value="modelo_responsabilidad">
              <ModeloResponsabilidadCompartida />
            </TabsContent>

            <TabsContent value="seguridad_fisica">
              <SeguridadFisicaNube />
            </TabsContent>

            <TabsContent value="seguridad_logica">
              <SeguridadLogicaNube />
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </main>
  )
}

function IntroduccionSeguridadNube() {
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
              Introducción a la Seguridad en la Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La seguridad en la nube es crucial para proteger la información y los sistemas en un entorno de computación en la nube.
              Este tema aborda los conceptos básicos de la seguridad informática y su importancia en la actualidad, con un enfoque particular en la protección de datos en la nube.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Principios de la Seguridad Informática
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Lock,
                  text: 'Confidencialidad',
                  description: 'Solo las personas autorizadas pueden acceder a la información.',
                },
                {
                  icon: Database,
                  text: 'Integridad',
                  description: 'Asegura que los datos no han sido alterados o manipulados de manera no autorizada.',
                },
                {
                  icon: Globe,
                  text: 'Disponibilidad',
                  description: 'Los datos y sistemas deben estar disponibles cuando los usuarios autorizados los necesiten.',
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

function SeguridadInformatica() {
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
              Definición de Seguridad Informática
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La seguridad informática es el proceso continuo de proteger sistemas, redes y datos frente a ciberataques, accesos no autorizados y otras amenazas.
              Incluye una combinación de herramientas técnicas, políticas organizativas y buenas prácticas.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ¿Qué proteger?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Datos',
                  description: 'Protección de datos personales, financieros, propiedad intelectual o información estratégica.',
                },
                {
                  text: 'Sistemas físicos y aplicaciones',
                  description: 'Protección de servidores, software y aplicaciones que manejan la información.',
                },
                {
                  text: 'Redes',
                  description: 'Protección de redes que conectan dispositivos y permiten el intercambio de información.',
                },
                {
                  text: 'Dispositivos físicos',
                  description: 'Protección de equipos como ordenadores, servidores y dispositivos móviles.',
                },
                {
                  text: 'Personas',
                  description: 'Formación y concienciación de los usuarios sobre los riesgos.',
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

function ModeloResponsabilidadCompartida() {
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
              Modelo de Responsabilidad Compartida
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              El modelo de responsabilidad compartida define qué aspectos de la seguridad son responsabilidad del proveedor de la nube y cuáles del cliente.
              Este modelo asegura que tanto el proveedor como el cliente tengan claridad sobre las áreas de seguridad de las que son responsables.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Responsabilidades del Cliente y Proveedor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Server className="h-6 w-6 text-blue-500" />
                  <h3>Cliente</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Datos del cliente',
                    'Administración de la plataforma, las aplicaciones, la identidad y el acceso',
                    'Configuración del sistema operativo, red, firewall',
                    'Cifrado de datos, autenticación del integridad de los datos, sistemas de archivos, protección del tráfico',
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
                  <h3>Proveedor</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Software de la plataforma',
                    'Computación, almacenamiento, redes y bases de datos',
                    'Infraestructura global hardware/AWS',
                    'Regiones, zonas de disponibilidad, ubicaciones de borde',
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Características del Modelo de Responsabilidad Compartida
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Colaboración activa',
                  description: 'Ambos actores trabajan juntos para garantizar la protección de los recursos.',
                },
                {
                  text: 'Roles bien definidos',
                  description: 'Cada parte tiene responsabilidades específicas que, al cumplirse, logran un sistema seguro.',
                },
                {
                  text: 'Adaptabilidad',
                  description: 'El modelo se ajusta a diferentes tipos de servicios en la nube (IaaS, PaaS, SaaS).',
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
              Responsabilidades del Cliente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Datos',
                  description: 'Cifrado, gestión de acceso, copias de seguridad.',
                },
                {
                  text: 'Aplicaciones',
                  description: 'Desarrollo seguro, gestión de vulnerabilidades, control de acceso.',
                },
                {
                  text: 'Sistema operativo',
                  description: 'Actualizaciones y parches de seguridad.',
                },
                {
                  text: 'Configuración de la cuenta',
                  description: 'Gestión de usuarios, contraseñas seguras, sistemas multifactor de autenticación.',
                },
                {
                  text: 'Configuración de red',
                  description: 'Configuración de reglas de firewall, uso de subredes privadas, VPNs y control de acceso.',
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
              Responsabilidades del Proveedor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Seguridad física de los centros de datos',
                  description: 'Acceso controlado, guardias de seguridad, autenticación de dos factores, videovigilancia.',
                },
                {
                  text: 'Infraestructura de hardware',
                  description: 'Servidores, dispositivos de almacenamiento, mantenimiento y actualizaciones.',
                },
                {
                  text: 'Infraestructura de software',
                  description: 'Sistemas operativos, aplicaciones de servicios, software de virtualización.',
                },
                {
                  text: 'Infraestructura de red',
                  description: 'Routers, conmutadores, balanceadores de carga, firewalls, monitoreo y protección contra ataques DDoS.',
                },
                {
                  text: 'Hipervisor',
                  description: 'Aislamiento de las instancias virtuales de los clientes.',
                },
                {
                  text: 'Normativas de seguridad',
                  description: 'Cumplimiento con normativas internacionales.',
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
              Responsabilidades del Proveedor respecto a IaaS, PaaS y SaaS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Servicios IaaS',
                  description: 'El cliente se encarga de la mayoría de la seguridad (SO, red, firewall, controles de acceso).',
                },
                {
                  text: 'Servicios PaaS',
                  description: 'El cliente no se encarga de la infraestructura, se encarga del cifrado de los datos y los clientes (login y password) y la seguridad del código.',
                },
                {
                  text: 'Servicios SaaS',
                  description: 'Los clientes no necesitan encargarse de nada de la seguridad, solo de sus usuarios y passwords.',
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
              Responsabilidades del Cliente en SaaS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Gestión de usuarios y contraseñas',
                  description: 'Administrar los accesos a la aplicación SaaS, asegurándose de que las cuentas sean seguras.',
                },
                {
                  text: 'Gestión de autenticación',
                  description: 'Implementar buenas prácticas, como contraseñas fuertes, autenticación multifactor (MFA) y revisiones periódicas de usuarios activos.',
                },
                {
                  text: 'Configuraciones específicas',
                  description: 'Personalizar reglas de acceso o habilitar alertas dentro de la aplicación SaaS.',
                },
                {
                  text: 'Supervisión del uso',
                  description: 'Revisar el uso del servicio para detectar accesos sospechosos o anómalos.',
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
              Responsabilidades del Cliente en PaaS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Cifrado de datos',
                  description: 'Proteger los datos en tránsito y en reposo mediante mecanismos de cifrado.',
                },
                {
                  text: 'Gestión de usuarios',
                  description: 'Controlar los accesos y permisos de los usuarios a la aplicación.',
                },
                {
                  text: 'Seguridad del código',
                  description: 'Garantizar que el código de las aplicaciones no contenga vulnerabilidades.',
                },
                {
                  text: 'Seguridad de red',
                  description: 'Establecer reglas de firewall para proteger el acceso a la base de datos.',
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
              Responsabilidades del Cliente en IaaS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Sistema operativo',
                  description: 'Instalar, configurar y mantener el sistema operativo en las máquinas virtuales.',
                },
                {
                  text: 'Red',
                  description: 'Configurar subredes, reglas de acceso y conexiones, usar Amazon VPC para entornos de red aislados y seguros.',
                },
                {
                  text: 'Firewall',
                  description: 'Configurar reglas de firewall mediante grupos de seguridad o listas de control de acceso de red (NACLs).',
                },
                {
                  text: 'Controles de acceso',
                  description: 'Gestionar quién tiene acceso a las instancias, redes y datos usando IAM.',
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

function SeguridadFisicaNube() {
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
              Centro de Procesamiento de Datos (CPD)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Un CPD es una instalación física diseñada para albergar sistemas informáticos y sus componentes asociados.
              Garantiza la disponibilidad y el funcionamiento ininterrumpido de aplicaciones y servicios web.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Funciones Principales de un CPD
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Almacenamiento de Datos',
                  description: 'Manejo de grandes cantidades de datos, desde bases de datos de empresas hasta contenido en la nube.',
                },
                {
                  text: 'Procesamiento de Datos',
                  description: 'Permite el procesamiento de datos en tiempo real, fundamental para aplicaciones como el análisis de datos, inteligencia artificial, y sistemas financieros.',
                },
                {
                  text: 'Redundancia y Recuperación ante Desastres',
                  description: 'Implementa medidas de respaldo y redundancia para asegurar la disponibilidad de datos y servicios en caso de fallos o desastres.',
                },
                {
                  text: 'Alojamiento de Aplicaciones',
                  description: 'Muchas empresas utilizan CPD para alojar aplicaciones web, plataformas de e-commerce, servicios de streaming, redes sociales, y más.',
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
              Componentes Clave de un CPD
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Server,
                  text: 'Servidores',
                  description: 'Dispositivos principales que ejecutan aplicaciones, almacenan datos y gestionan el tráfico de la red.',
                },
                {
                  icon: HardDrive,
                  text: 'Sistemas de almacenamiento de Datos',
                  description: 'Dispositivos de almacenamiento que varían desde discos duros hasta sistemas avanzados de almacenamiento en red (SAN).',
                },
                {
                  icon: Network,
                  text: 'Sistemas de Red',
                  description: 'Incluyen switches, routers y firewalls que gestionan la comunicación entre los servidores.',
                },
                {
                  icon: Terminal,
                  text: 'Sistemas de climatización',
                  description: 'Equipos de ventilación y refrigeración para controlar el calor generado por los servidores.',
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

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Ubicación de un Centro de Procesamiento de Datos (CPD)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La ubicación de un CPD es crítica para su construcción y operación. Debe minimizar los riesgos de desastres naturales, optimizar la conectividad de red y garantizar un acceso continuo a energía eléctrica.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Factores Geográficos y Riesgos Naturales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Zonas con baja actividad sísmica',
                  description: 'Los terremotos pueden causar daños graves a las infraestructuras del CPD y a los equipos sensibles.',
                },
                {
                  text: 'Zonas fuera del alcance de inundaciones',
                  description: 'Las inundaciones pueden destruir la infraestructura física y los equipos críticos de un CPD.',
                },
                {
                  text: 'Proximidad a Redes de Comunicaciones',
                  description: 'Proximidad a cables de fibra óptica y puntos de intercambio de Internet (IXP) para asegurar una mayor velocidad de transmisión de datos.',
                },
                {
                  text: 'Acceso a Energía Eléctrica Estable y Fiable',
                  description: 'Acceso a redes eléctricas estables y fiables, con sistemas de respaldo como generadores diésel y Sistemas de Alimentación Ininterrumpida (SAI).',
                },
                {
                  text: 'Clima Local y Factores Ambientales',
                  description: 'Climas fríos reducen la necesidad de sistemas de refrigeración artificial, lo que se traduce en importantes ahorros energéticos.',
                },
                {
                  text: 'Consideraciones Legales y Regulatorias',
                  description: 'Cumplimiento con normativas legales y regulatorias del país o región donde se establece el CPD.',
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
              Factores para Ubicar un CPD dentro de un Edificio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Alejamiento de zonas de riesgos',
                  description: 'Alejamiento de espacios que puedan peligrar de inundaciones, incendios, calor o frío excesivo, facilidad de accesos no autorizados.',
                },
                {
                  text: 'Fácil acceso',
                  description: 'Acceso adecuado para el mantenimiento rutinario y las operaciones de emergencia.',
                },
                {
                  text: 'Ascensores de Carga',
                  description: 'En edificios altos, el CPD debe estar cerca de ascensores de carga diseñados para transportar equipos pesados.',
                },
                {
                  text: 'Suelo con capacidad de carga',
                  description: 'El CPD debe estar en una zona del edificio con suficiente capacidad de carga para soportar el peso de gran cantidad de equipos pesados.',
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
              Características de un Centro de Procesamiento de Datos (CPD): Diseño y Dimensiones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Diseño Modular y Escalable',
                  description: 'Permite a las organizaciones construir sus infraestructuras de manera escalable, añadiendo nuevos módulos o secciones conforme aumentan sus necesidades.',
                },
                {
                  text: 'Dimensiones y Capacidad',
                  description: 'Las dimensiones de un CPD varían considerablemente en función de las necesidades de la organización y el volumen de datos que se maneja.',
                },
                {
                  text: 'Racks y Pasillos',
                  description: 'Los servidores y dispositivos de almacenamiento se organizan en racks, que son estructuras verticales diseñadas para maximizar el espacio y facilitar la gestión de los equipos.',
                },
                {
                  text: 'Altura del Techo',
                  description: 'Los techos elevados permiten un mejor flujo de aire y una gestión más eficiente del cableado y los conductos de refrigeración.',
                },
                {
                  text: 'Condiciones Ambientales',
                  description: 'La temperatura y la humedad controladas son factores esenciales en un CPD.',
                },
                {
                  text: 'Condiciones Eléctricas',
                  description: 'El suministro eléctrico es el pilar que sostiene el funcionamiento de un CPD.',
                },
                {
                  text: 'Detección y Extinción de Incendios',
                  description: 'Avanzados sistemas de detección y extinción de incendios para mitigar este riesgo y proteger los equipos y la información.',
                },
                {
                  text: 'Aislamiento Acústico',
                  description: 'Los CPD generan ruido debido al funcionamiento continuo de los servidores, ventiladores, y sistemas de refrigeración.',
                },
                {
                  text: 'Gestión del Cableado',
                  description: 'El correcto manejo del cableado en un CPD es crucial tanto para la seguridad como para el rendimiento operativo.',
                },
                {
                  text: 'Seguridad Física y Control de Acceso',
                  description: 'La seguridad física en un CPD es crucial para evitar el acceso no autorizado y garantizar la protección de los equipos y los datos.',
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

function SeguridadLogicaNube() {
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
              Control de Autenticación, Autorización y Federación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Autenticación',
                  description: 'Verificación de la identidad de un usuario o sistema a través de contraseñas, claves, autenticación multifactor (MFA) y certificados digitales.',
                },
                {
                  text: 'Autorización',
                  description: 'Determina los permisos y niveles de acceso que un usuario tiene dentro de un sistema o aplicación en la nube.',
                },
                {
                  text: 'Federación',
                  description: 'Permite a los usuarios acceder a múltiples sistemas o servicios utilizando una única identidad.',
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
              IAM Gestión de identidades y accesos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              IAM es un servicio esencial en la computación en la nube que permite gestionar quién puede acceder a los recursos, qué pueden hacer con ellos y bajo qué condiciones.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Componentes Básicos de IAM
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Usuarios',
                  description: 'Representan a personas o sistemas que necesitan acceso a los recursos.',
                },
                {
                  text: 'Grupos',
                  description: 'Conjunto de usuarios con permisos similares.',
                },
                {
                  text: 'Roles',
                  description: 'Identidades temporales con permisos específicos que pueden ser asumidas por usuarios o servicios.',
                },
                {
                  text: 'Políticas',
                  description: 'Documentos que definen los permisos para usuarios, roles o recursos.',
                },
                {
                  text: 'Recursos',
                  description: 'Los elementos dentro de la nube a los que se accede, como máquinas virtuales, bases de datos o redes.',
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
              Políticas en IAM
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Políticas basadas en identidad',
                  description: 'Políticas que se adjuntan directamente a usuarios, grupos o roles.',
                },
                {
                  text: 'Políticas basadas en recursos',
                  description: 'Políticas que se adjuntan directamente a los recursos de la nube.',
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
              Jerarquía de Permisos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Evaluación de permisos',
                  description: 'Si una acción está permitida en alguna política, se concede acceso.',
                },
                {
                  text: 'Prioridad de políticas',
                  description: 'Las políticas explícitas de denegación tienen mayor prioridad.',
                },
                {
                  text: 'Condiciones',
                  description: 'Se pueden establecer reglas adicionales, como restringir el acceso según ubicación geográfica, hora del día, tipo de dispositivo utilizado.',
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
              Seguridad en las Cuentas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Autenticación multifactor (MFA)',
                  description: 'Añade una capa extra de seguridad.',
                },
                {
                  text: 'Rotación de contraseñas',
                  description: 'Cambiar las contraseñas periódicamente.',
                },
                {
                  text: 'Control de acceso mínimo necesario',
                  description: 'Proporcionar a los usuarios solo los permisos que necesitan para realizar sus tareas.',
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
              Seguridad en los Datos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Cifrado',
                  description: 'Protege los datos almacenados en discos y bases de datos, y asegura los datos que se transfieren a través de redes.',
                },
                {
                  text: 'Copias de seguridad y recuperación',
                  description: 'Permiten restaurar los datos en caso de pérdida o ataque.',
                },
                {
                  text: 'Control de acceso basado en roles',
                  description: 'Define qué usuarios pueden acceder a qué datos.',
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
              Seguridad en las Comunicaciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Uso de protocolos seguros',
                  description: 'Protocolos como HTTPS, TLS y IPsec aseguran la comunicación entre clientes y servidores.',
                },
                {
                  text: 'Seguridad en APIs',
                  description: 'Las APIs deben estar protegidas mediante autenticación y cifrado.',
                },
                {
                  text: 'Monitoreo y detección',
                  description: 'Implementar sistemas que detecten actividades inusuales o intentos de intrusión.',
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
              Cifrado para los Datos y las Comunicaciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: 'Criptografía simétrica',
                  description: 'Utiliza una misma clave para cifrar y descifrar un mensaje. Es rápido y eficiente, ideal para procesar grandes cantidades de datos.',
                },
                {
                  text: 'Criptografía asimétrica',
                  description: 'Utiliza un par de claves: una clave pública y una clave privada. La clave pública se utiliza para cifrar el mensaje, mientras que solo la clave privada puede descifrarlo.',
                },
                {
                  text: 'Criptografía híbrida',
                  description: 'Combina las ventajas de la criptografía simétrica y asimétrica para maximizar la seguridad y eficiencia.',
                },
                {
                  text: 'Funciones hash',
                  description: 'Utilizadas para verificar la integridad de los datos y en la generación de firmas digitales.',
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
