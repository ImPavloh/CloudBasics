import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaNetworkWired } from 'react-icons/fa'

export default function RedesEnLaNube() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center">
          <FaNetworkWired className="mr-2" />
          Redes en la Nube
        </CardTitle>
        <CardDescription>Creación de una nube privada virtual</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Redes en la Nube y Nubes Privadas Virtuales</h3>
          <p className="mb-4">
            Las redes en la nube son un componente fundamental de la infraestructura en la nube, permitiendo la 
            conectividad y comunicación entre recursos. Una Nube Privada Virtual (VPC) es un servicio que permite 
            crear una red aislada lógicamente dentro de la nube pública.
          </p>
          
          <h4 className="text-lg font-semibold mb-2">Conceptos clave de redes en la nube:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Redes virtuales</li>
            <li>Subredes</li>
            <li>Tablas de enrutamiento</li>
            <li>Gateways de Internet</li>
            <li>Grupos de seguridad</li>
            <li>Listas de control de acceso (ACLs)</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Creación de una Nube Privada Virtual (VPC):</h4>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">Definir el rango de direcciones IP para la VPC</li>
            <li className="mb-2">Crear subredes públicas y privadas</li>
            <li className="mb-2">Configurar tablas de enrutamiento</li>
            <li className="mb-2">Establecer un Internet Gateway para subredes públicas</li>
            <li className="mb-2">Configurar NAT Gateway para subredes privadas</li>
            <li className="mb-2">Implementar grupos de seguridad y ACLs</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Beneficios de usar VPCs:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Aislamiento de recursos</li>
            <li>Control granular sobre la configuración de red</li>
            <li>Mejora de la seguridad</li>
            <li>Flexibilidad en el diseño de arquitecturas</li>
            <li>Capacidad de conexión con redes on-premises</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Consideraciones de diseño:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Planificación cuidadosa del espacio de direcciones IP</li>
            <li>Segmentación adecuada de subredes</li>
            <li>Implementación de zonas de disponibilidad múltiples</li>
            <li>Configuración de conectividad híbrida (si es necesario)</li>
            <li>Monitoreo y optimización continua del tráfico de red</li>
          </ul>

          <p className="mb-4">
            Las redes en la nube y las VPCs son esenciales para crear entornos seguros y escalables en la nube. 
            Dominar estos conceptos permite a los profesionales de TI diseñar y implementar arquitecturas de nube 
            robustas y eficientes que satisfacen las necesidades específicas de sus organizaciones.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}