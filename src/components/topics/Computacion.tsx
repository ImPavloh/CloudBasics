'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Cloud,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  ArrowRight,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

export default function FundamentosComputacionNube() {
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
          Introducción a la computación en la nube
        </h1>
        <p className="mt-3 mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl">
          Descubre los conceptos esenciales, modelos y estrategias en la
          computación en la nube moderna.
        </p>
      </motion.div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-8"
      >
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-4">
          <TabsTrigger value="introduccion">Introducción</TabsTrigger>
          <TabsTrigger value="modelos">Modelos de servicio</TabsTrigger>
          <TabsTrigger value="implementacion">
            Modelos de implementación
          </TabsTrigger>
          <TabsTrigger value="migracion">Migración a la nube</TabsTrigger>
          <TabsTrigger value="adopcion">Adopción de la nube</TabsTrigger>
        </TabsList>

        <TabsContent value="introduccion">
          <IntroduccionComputacionNube />
        </TabsContent>

        <TabsContent value="modelos">
          <ModelosServicioNube />
        </TabsContent>

        <TabsContent value="implementacion">
          <ModelosImplementacionNube />
        </TabsContent>

        <TabsContent value="migracion">
          <MigracionNube />
        </TabsContent>

        <TabsContent value="adopcion">
          <AdopcionNube />
        </TabsContent>
      </Tabs>
    </main>
  )
}

function IntroduccionComputacionNube() {
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
              <Cloud className="mr-2 h-6 w-6" />
              ¿Qué es la computación en la nube?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              La computación en la nube es un modelo de entrega de servicios de
              TI a través de internet. En lugar de mantener servidores físicos e
              infraestructura, las empresas pueden acceder a recursos
              informáticos bajo demanda de proveedores en la nube. Esto incluye
              servidores, almacenamiento, bases de datos, redes, software y más.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Características clave
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Zap,
                  text: 'Autoservicio bajo demanda',
                  description:
                    'Los usuarios pueden aprovisionar capacidades informáticas según sea necesario sin requerir interacción humana con el proveedor de servicios.',
                },
                {
                  icon: Globe,
                  text: 'Amplio acceso a la red',
                  description:
                    'Los servicios están disponibles en la red y se accede a través de mecanismos estándar que promueven el uso por plataformas de clientes heterogéneas.',
                },
                {
                  icon: Server,
                  text: 'Agrupación de recursos',
                  description:
                    'Los recursos informáticos del proveedor se agrupan para servir a múltiples consumidores utilizando un modelo multi-inquilino.',
                },
                {
                  icon: Cloud,
                  text: 'Rápida elasticidad',
                  description:
                    'Las capacidades pueden aprovisionarse y liberarse elásticamente para escalar rápidamente hacia fuera y hacia dentro según la demanda.',
                },
                {
                  icon: Database,
                  text: 'Servicio medido',
                  description:
                    'Los sistemas en la nube controlan y optimizan automáticamente el uso de recursos aprovechando una capacidad de medición.',
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                >
                  <item.icon className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>{item.text}:</strong> {item.description}
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
              On-premise vs Nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">On-premise</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Control total sobre hardware y software</li>
                  <li>Costos iniciales más altos</li>
                  <li>Requiere experiencia en TI interna</li>
                  <li>Escalabilidad limitada</li>
                  <li>Responsable de la seguridad y el mantenimiento</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Nube</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Modelo de pago por uso</li>
                  <li>Escalable y flexible</li>
                  <li>Mantenimiento de TI reducido</li>
                  <li>Acceso desde cualquier lugar</li>
                  <li>Actualizaciones y parches de seguridad automáticos</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function ModelosServicioNube() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {[
        {
          title: 'Infraestructura como Servicio (IaaS)',
          icon: Server,
          description:
            'IaaS proporciona recursos informáticos virtualizados a través de internet. Es el modelo de computación en la nube más flexible, ofreciendo control total sobre la infraestructura.',
          examples: [
            'Amazon EC2',
            'Microsoft Azure VMs',
            'Google Compute Engine',
          ],
          use_cases: [
            'Sitios web y aplicaciones web',
            'Computación de alto rendimiento',
            'Análisis de big data',
          ],
        },
        {
          title: 'Plataforma como Servicio (PaaS)',
          icon: Database,
          description:
            'PaaS proporciona una plataforma que permite a los clientes desarrollar, ejecutar y gestionar aplicaciones sin la complejidad de mantener la infraestructura.',
          examples: [
            'Heroku',
            'Google App Engine',
            'Microsoft Azure App Service',
          ],
          use_cases: [
            'Aplicaciones web y móviles',
            'Desarrollo de APIs',
            'Análisis de negocios',
          ],
        },
        {
          title: 'Software como Servicio (SaaS)',
          icon: Cloud,
          description:
            'SaaS entrega aplicaciones de software a través de internet, bajo demanda y típicamente en base a suscripción. Los usuarios pueden acceder a las aplicaciones SaaS a través de navegadores web.',
          examples: ['Google Workspace', 'Microsoft 365', 'Salesforce'],
          use_cases: [
            'Gestión de relaciones con clientes',
            'Planificación de recursos empresariales',
            'Herramientas de colaboración',
          ],
        },
      ].map((model, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400">
                <model.icon className="mr-2 h-6 w-6" />
                {model.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {model.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Ejemplos:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {model.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Casos de Uso:</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {model.use_cases.map((use_case, i) => (
                      <li key={i}>{use_case}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

function ModelosImplementacionNube() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {[
        {
          title: 'Nube pública',
          icon: Globe,
          description:
            'Los servicios se proporcionan en un entorno virtualizado, construido utilizando recursos físicos compartidos y accesibles a través de una red pública como internet.',
          pros: ['Rentable', 'Altamente escalable', 'Fiabilidad'],
          cons: [
            'Menos control',
            'Posibles preocupaciones de seguridad',
            'Problemas de cumplimiento para algunas industrias',
          ],
        },
        {
          title: 'Nube privada',
          icon: Shield,
          description:
            'La infraestructura en la nube se aprovisiona para uso exclusivo de una sola organización que comprende múltiples consumidores. Puede ser propiedad, gestionada y operada por la organización, un tercero o alguna combinación de ellos.',
          pros: [
            'Mayor seguridad y privacidad',
            'Mayor control',
            'Personalización',
          ],
          cons: [
            'Costos más altos',
            'Escalabilidad limitada',
            'Requiere experiencia interna',
          ],
        },
        {
          title: 'Nube híbrida',
          icon: Cloud,
          description:
            'Una composición de dos o más infraestructuras en la nube distintas (privada, comunitaria o pública) que siguen siendo entidades únicas, pero están unidas por tecnología estandarizada o propietaria.',
          pros: ['Flexibilidad', 'Rentabilidad', 'Seguridad mejorada'],
          cons: [
            'Complejidad en la gestión',
            'Posibles desafíos de integración',
            'Requiere una planificación cuidadosa',
          ],
        },
      ].map((model, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400">
                <model.icon className="mr-2 h-6 w-6" />
                {model.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {model.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
                    Ventajas:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {model.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">
                    Desventajas:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {model.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

function MigracionNube() {
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
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Proceso de migración a la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Evaluación y planificación:</strong> Evaluar la
                infraestructura, aplicaciones y datos actuales. Determinar qué
                cargas de trabajo migrar y en qué orden.
              </li>
              <li>
                <strong>Elección de un proveedor de nube:</strong> Seleccionar
                un proveedor de nube que mejor se adapte a sus necesidades (por
                ejemplo, AWS, Azure, Google Cloud).
              </li>
              <li>
                <strong>Preparación del entorno de destino:</strong> Configurar
                el entorno en la nube, incluyendo redes, seguridad y controles
                de acceso.
              </li>
              <li>
                <strong>Migración de datos:</strong> Transferir datos a la nube,
                asegurando la integridad y seguridad durante todo el proceso.
              </li>
              <li>
                <strong>Migración de aplicaciones:</strong> Mover aplicaciones a
                la nube, potencialmente refactorizándolas para aprovechar las
                características nativas de la nube.
              </li>
              <li>
                <strong>Pruebas y validación:</strong> Probar exhaustivamente
                las aplicaciones y datos migrados para asegurar que todo
                funcione como se espera.
              </li>
              <li>
                <strong>Cambio y puesta en marcha:</strong> Cambiar de la
                infraestructura local a la infraestructura en la nube, a menudo
                realizado en fases para minimizar la interrupción.
              </li>
              <li>
                <strong>Optimización:</strong> Monitorear y optimizar
                continuamente los recursos en la nube para el rendimiento y la
                eficiencia de costos.
              </li>
            </ol>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Estrategias de Migración
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="rehost">
                <AccordionTrigger>Realojar (Lift and Shift)</AccordionTrigger>
                <AccordionContent>
                  Mover aplicaciones a la nube sin hacer cambios. Este es el
                  método más rápido pero no aprovecha al máximo las capacidades
                  de la nube.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="refactor">
                <AccordionTrigger>
                  Refactorizar (Lift, Tinker, and Shift)
                </AccordionTrigger>
                <AccordionContent>
                  Realizar algunas optimizaciones para aprovechar las
                  capacidades de la nube, pero manteniendo la arquitectura
                  central igual.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="revise">
                <AccordionTrigger>Revisar</AccordionTrigger>
                <AccordionContent>
                  Modificar o extender la base de código existente para soportar
                  los requisitos de modernización heredados, luego usar las
                  opciones de realojar o refactorizar para implementar en la
                  nube.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="rebuild">
                <AccordionTrigger>Reconstruir</AccordionTrigger>
                <AccordionContent>
                  Rediseñar la aplicación desde cero utilizando características
                  nativas de la nube. Este es el método más largo pero permite
                  el mejor uso de las capacidades nativas de la nube.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="replace">
                <AccordionTrigger>Reemplazar</AccordionTrigger>
                <AccordionContent>
                  Descartar la aplicación antigua por completo y cambiar a una
                  oferta SaaS ya construida que proporcione una funcionalidad
                  similar.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function AdopcionNube() {
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
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Marco de Adopción de la Nube (CAF)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              El Marco de Adopción de la Nube proporciona mejores prácticas,
              documentación y herramientas que los arquitectos de nube,
              profesionales de TI y tomadores de decisiones empresariales
              necesitan para lograr sus objetivos a corto y largo plazo con
              éxito.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Componentes Clave:</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Estrategia y Plan</li>
                  <li>Preparación</li>
                  <li>Adopción</li>
                  <li>Gobernanza</li>
                  <li>Gestión</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
                  Beneficios:
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Acelera la adopción de la nube</li>
                  <li>Alinea los objetivos de negocio y TI</li>
                  <li>Proporciona una metodología consistente</li>
                  <li>Mejora la excelencia operativa</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Mejores prácticas para la adopción de la nube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                <span>
                  <strong>Comenzar en pequeño:</strong> Empezar con cargas de
                  trabajo no críticas para ganar experiencia y confianza.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                <span>
                  <strong>Invertir en formación:</strong> Asegurar que su equipo
                  tenga las habilidades necesarias para gestionar entornos en la
                  nube.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                <span>
                  <strong>Implementar medidas de seguridad Sólidas:</strong>{' '}
                  Utilizar encriptación, controles de acceso y auditorías de
                  seguridad regulares.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                <span>
                  <strong>Monitorear costos:</strong> Implementar herramientas
                  de gestión de costos para evitar gastos inesperados.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                <span>
                  <strong>Automatizar donde sea posible:</strong> Utilizar
                  infraestructura como código y pipelines de despliegue
                  automatizados.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                <span>
                  <strong>
                    Planificar para la recuperación ante desastres:
                  </strong>{' '}
                  Implementar estrategias robustas de respaldo y recuperación.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
