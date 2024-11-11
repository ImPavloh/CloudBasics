import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaDesktop } from 'react-icons/fa'

export default function ServiciosDeComputacion() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center">
          <FaDesktop className="mr-2" />
          Servicios de Computación
        </CardTitle>
        <CardDescription>Casos de uso de servicios de computación en nube</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Servicios de Computación en la Nube</h3>
          <p className="mb-4">
            Los servicios de computación en la nube ofrecen una amplia gama de recursos y capacidades para 
            procesar, almacenar y gestionar datos y aplicaciones. Estos servicios se adaptan a diversas 
            necesidades y casos de uso.
          </p>
          
          <h4 className="text-lg font-semibold mb-2">Tipos principales de servicios de computación:</h4>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2"><strong>Máquinas Virtuales (VMs):</strong> Instancias de servidores virtuales.</li>
            <li className="mb-2"><strong>Contenedores:</strong> Entornos ligeros y portátiles para aplicaciones.</li>
            <li className="mb-2"><strong>Serverless Computing:</strong> Ejecución de código sin gestionar servidores.</li>
            <li className="mb-2"><strong>Servicios de Orquestación:</strong> Gestión y coordinación de contenedores.</li>
            <li className="mb-2"><strong>Servicios de Cómputo de Alto Rendimiento (HPC):</strong> Para cargas de trabajo intensivas.</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Casos de uso comunes:</h4>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Desarrollo y pruebas:</strong> Entornos flexibles para desarrollo de software.</li>
            <li><strong>Hospedaje web:</strong> Alojamiento de sitios y aplicaciones web.</li>
            <li><strong>Análisis de big data:</strong> Procesamiento de grandes volúmenes de datos.</li>
            <li><strong>Machine Learning e IA:</strong> Entrenamiento y despliegue de modelos.</li>
            <li><strong>IoT:</strong> Procesamiento de datos de dispositivos conectados.</li>
            <li><strong>Recuperación ante desastres:</strong> Replicación y respaldo de sistemas críticos.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Beneficios de los servicios de computación en la nube:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Escalabilidad bajo demanda</li>
            <li>Reducción de costos de infraestructura</li>
            <li>Flexibilidad en la elección de recursos</li>
            <li>Acceso global y alta disponibilidad</li>
            <li>Actualizaciones y mantenimiento simplificados</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Consideraciones al elegir servicios de computación:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Requisitos de rendimiento y escalabilidad</li>
            <li>Compatibilidad con aplicaciones existentes</li>
            <li>Necesidades de seguridad y cumplimiento normativo</li>
            <li>Costos y modelos de precios</li>
            <li>Facilidad de gestión y monitoreo</li>
          </ul>

          <p className="mb-4">
            Los servicios de computación en la nube proporcionan la potencia y flexibilidad necesarias para 
            impulsar una amplia gama de aplicaciones y cargas de trabajo. Al comprender los diferentes tipos 
            de servicios y sus casos de uso, las organizaciones pueden aprovechar al máximo estos recursos 
            para innovar y crecer en la era digital.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}