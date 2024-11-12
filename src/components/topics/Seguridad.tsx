import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Shield } from 'lucide-react'

export default function SeguridadEnLaNube() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center">
          <Shield className="mr-2" />
          Seguridad en la Nube
        </CardTitle>
        <CardDescription>
          Medidas de seguridad y conformidad en la nube
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Seguridad y Conformidad en la Nube
          </h3>
          <p className="mb-4">
            La seguridad y la conformidad son aspectos críticos en la
            computación en la nube. Los proveedores de servicios en la nube y
            los clientes comparten la responsabilidad de garantizar la
            protección de los datos y el cumplimiento de las regulaciones.
          </p>

          <h4 className="text-lg font-semibold mb-2">
            Modelo de Responsabilidad Compartida:
          </h4>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Proveedor de la nube:</strong> Responsable de la seguridad
              &quot;de&quot; la nube (infraestructura física, red,
              hipervisores).
            </li>
            <li>
              <strong>Cliente:</strong> Responsable de la seguridad
              &quot;en&quot; la nube (configuración de servicios, gestión de
              accesos, protección de datos).
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">
            Medidas de Seguridad Clave:
          </h4>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              <strong>Encriptación:</strong> De datos en reposo y en tránsito.
            </li>
            <li className="mb-2">
              <strong>Autenticación y Autorización:</strong> Control de acceso
              basado en roles (RBAC), autenticación multifactor (MFA).
            </li>
            <li className="mb-2">
              <strong>Seguridad de Red:</strong> Firewalls, segmentación de red,
              VPNs.
            </li>
            <li className="mb-2">
              <strong>Monitoreo y Logging:</strong> Detección de amenazas,
              análisis de logs.
            </li>
            <li className="mb-2">
              <strong>Gestión de Vulnerabilidades:</strong> Escaneos regulares,
              parches de seguridad.
            </li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">
            Conformidad y Regulaciones:
          </h4>
          <ul className="list-disc list-inside mb-4">
            <li>GDPR (Reglamento General de Protección de Datos)</li>
            <li>
              HIPAA (Ley de Portabilidad y Responsabilidad del Seguro Médico)
            </li>
            <li>
              PCI DSS (Estándar de Seguridad de Datos para la Industria de
              Tarjetas de Pago)
            </li>
            <li>SOC 2 (Controles de Organización de Servicios)</li>
            <li>ISO 27001 (Gestión de Seguridad de la Información)</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">
            Mejores Prácticas de Seguridad:
          </h4>
          <ul className="list-disc list-inside mb-4">
            <li>Implementar el principio de menor privilegio</li>
            <li>Utilizar la autenticación multifactor</li>
            <li>
              Mantener copias de seguridad regulares y probar la recuperación
            </li>
            <li>Cifrar datos sensibles</li>
            <li>Realizar auditorías de seguridad periódicas</li>
            <li>Capacitar al personal en seguridad de la información</li>
          </ul>

          <p className="mb-4">
            La seguridad en la nube es un proceso continuo que requiere
            vigilancia constante y adaptación a las nuevas amenazas y
            regulaciones. Al implementar estas medidas y seguir las mejores
            prácticas, las organizaciones pueden aprovechar los beneficios de la
            nube mientras mantienen sus datos y sistemas seguros y en
            cumplimiento.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}
