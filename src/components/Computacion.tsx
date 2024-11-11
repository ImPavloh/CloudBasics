import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaCloud } from 'react-icons/fa'

export default function ComputacionEnLaNube() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center">
          <FaCloud className="mr-2" />
          Computación en la Nube
        </CardTitle>
        <CardDescription>Definición y modelos de computación en la nube</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">¿Qué es la Computación en la Nube?</h3>
          <p className="mb-4">
            La computación en la nube es un modelo de entrega de servicios de computación a través de Internet. 
            Estos servicios incluyen servidores, almacenamiento, bases de datos, redes, software, análisis e inteligencia.
          </p>
          
          <h4 className="text-lg font-semibold mb-2">Características principales:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Autoservicio bajo demanda</li>
            <li>Amplio acceso a la red</li>
            <li>Agrupación de recursos</li>
            <li>Rápida elasticidad</li>
            <li>Servicio medido</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Modelos de servicio:</h4>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2"><strong>IaaS (Infraestructura como Servicio):</strong> Proporciona recursos de computación virtualizados a través de Internet.</li>
            <li className="mb-2"><strong>PaaS (Plataforma como Servicio):</strong> Ofrece plataformas para desarrollar, ejecutar y gestionar aplicaciones.</li>
            <li className="mb-2"><strong>SaaS (Software como Servicio):</strong> Entrega aplicaciones de software a través de Internet.</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Modelos de implementación:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Nube pública</li>
            <li>Nube privada</li>
            <li>Nube híbrida</li>
            <li>Nube comunitaria</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Ventajas de la computación en la nube:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Reducción de costos</li>
            <li>Escalabilidad y flexibilidad</li>
            <li>Accesibilidad y movilidad</li>
            <li>Recuperación ante desastres</li>
            <li>Actualizaciones automáticas</li>
          </ul>

          <p className="mb-4">
            La computación en la nube ha revolucionado la forma en que las empresas y los individuos acceden y utilizan 
            los recursos de TI, permitiendo una mayor agilidad, eficiencia y innovación en diversos sectores.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}