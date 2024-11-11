import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaServer } from 'react-icons/fa'

export default function InfraestructuraEnLaNube() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center">
          <FaServer className="mr-2" />
          Infraestructura en la Nube
        </CardTitle>
        <CardDescription>Componentes de la infraestructura en la nube</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Componentes de la Infraestructura en la Nube</h3>
          <p className="mb-4">
            La infraestructura en la nube se compone de varios elementos clave que trabajan juntos para proporcionar 
            servicios de computación escalables y flexibles.
          </p>
          
          <h4 className="text-lg font-semibold mb-2">Componentes principales:</h4>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2"><strong>Centros de datos:</strong> Instalaciones físicas que albergan los recursos de computación.</li>
            <li className="mb-2"><strong>Servidores:</strong> Máquinas físicas o virtuales que procesan y almacenan datos.</li>
            <li className="mb-2"><strong>Redes:</strong> Infraestructura que conecta los componentes y permite la comunicación.</li>
            <li className="mb-2"><strong>Almacenamiento:</strong> Sistemas para guardar y recuperar datos.</li>
            <li className="mb-2"><strong>Virtualización:</strong> Tecnología que permite crear múltiples instancias virtuales en un solo servidor físico.</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Elementos adicionales:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Balanceadores de carga</li>
            <li>Firewalls y sistemas de seguridad</li>
            <li>Sistemas de monitoreo y gestión</li>
            <li>Plataformas de orquestación</li>
            <li>APIs y servicios web</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Modelos de implementación:</h4>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Nube pública:</strong> Recursos compartidos disponibles para el público en general.</li>
            <li><strong>Nube privada:</strong> Infraestructura dedicada a una sola organización.</li>
            <li><strong>Nube híbrida:</strong> Combinación de nubes públicas y privadas.</li>
            <li><strong>Nube multicloud:</strong> Uso de servicios de múltiples proveedores de nube.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Conceptos clave:</h4>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Regiones:</strong> Áreas geográficas que contienen múltiples centros de datos.</li>
            <li><strong>Zonas de disponibilidad:</strong> Centros de datos aislados dentro de una región.</li>
            <li><strong>Edge locations:</strong> Puntos de presencia para servicios de entrega de contenido.</li>
          </ul>

          <p className="mb-4">
            Comprender estos componentes es fundamental para diseñar, implementar y gestionar eficazmente 
            soluciones en la nube. La infraestructura en la nube proporciona la base sobre la cual se construyen 
            y entregan los servicios de computación en la nube.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}