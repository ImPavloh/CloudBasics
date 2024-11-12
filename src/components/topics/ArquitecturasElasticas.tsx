import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Database } from 'lucide-react'

export default function ArquitecturasElasticas() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center">
          <Database className="mr-2" />
          Arquitecturas Elásticas
        </CardTitle>
        <CardDescription>
          Balanceo de carga, autoescalado y monitorización para diseños
          flexibles
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Diseño de Arquitecturas Elásticas en la Nube
          </h3>
          <p className="mb-4">
            Las arquitecturas elásticas en la nube permiten a los sistemas
            adaptarse dinámicamente a las cargas de trabajo cambiantes,
            optimizando el rendimiento y los costos. El balanceo de carga, el
            autoescalado y la monitorización son componentes clave para lograr
            esta elasticidad.
          </p>

          <h4 className="text-lg font-semibold mb-2">Balanceo de Carga:</h4>
          <p className="mb-4">
            El balanceo de carga distribuye el tráfico entrante entre múltiples
            instancias o servidores para mejorar la disponibilidad y el
            rendimiento de las aplicaciones.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Tipos de balanceadores de carga:</strong> Capa de
              aplicación (HTTP/HTTPS), capa de transporte (TCP/UDP), y capa de
              red (IP).
            </li>
            <li>
              <strong>Algoritmos comunes:</strong> Round Robin, Least
              Connections, IP Hash.
            </li>
            <li>
              <strong>Beneficios:</strong> Alta disponibilidad, mejor
              rendimiento, flexibilidad en el mantenimiento.
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Autoescalado:</h4>
          <p className="mb-4">
            El autoescalado ajusta automáticamente el número de recursos
            (generalmente instancias de computación) en respuesta a la demanda
            fluctuante.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Escalado horizontal:</strong> Agregar o quitar instancias.
            </li>
            <li>
              <strong>Escalado vertical:</strong> Aumentar o disminuir los
              recursos de una instancia existente.
            </li>
            <li>
              <strong>Políticas de escalado:</strong> Basadas en métricas (CPU,
              memoria, tráfico de red) o programadas.
            </li>
            <li>
              <strong>Beneficios:</strong> Optimización de costos, mejor
              rendimiento, manejo eficiente de picos de tráfico.
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Monitorización:</h4>
          <p className="mb-4">
            La monitorización proporciona visibilidad sobre el rendimiento y el
            estado de los sistemas, permitiendo tomar decisiones informadas y
            automatizar respuestas.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Métricas clave:</strong> Utilización de CPU, uso de
              memoria, latencia, tasas de error.
            </li>
            <li>
              <strong>Logs:</strong> Recopilación y análisis de logs para
              diagnóstico y auditoría.
            </li>
            <li>
              <strong>Alertas:</strong> Notificaciones basadas en umbrales
              predefinidos.
            </li>
            <li>
              <strong>Dashboards:</strong> Visualizaciones en tiempo real del
              estado del sistema.
            </li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">
            Implementación de una Arquitectura Elástica:
          </h4>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">
              Diseñar la arquitectura con componentes desacoplados y stateless.
            </li>
            <li className="mb-2">
              Implementar balanceadores de carga para distribuir el tráfico.
            </li>
            <li className="mb-2">
              Configurar grupos de autoescalado con políticas basadas en
              métricas.
            </li>
            <li className="mb-2">
              Establecer un sistema de monitorización exhaustivo.
            </li>
            <li className="mb-2">
              Definir alertas y acciones automáticas basadas en umbrales.
            </li>
            <li className="mb-2">
              Utilizar servicios de caché y bases de datos escalables.
            </li>
            <li className="mb-2">
              Implementar una estrategia de despliegue continuo (CD) para
              actualizaciones sin tiempo de inactividad.
            </li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Mejores Prácticas:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>
              Realizar pruebas de carga para validar la elasticidad del sistema.
            </li>
            <li>
              Implementar circuit breakers para manejar fallos en servicios
              dependientes.
            </li>
            <li>
              Utilizar múltiples zonas de disponibilidad para mayor resiliencia.
            </li>
            <li>
              Optimizar imágenes de instancias para un arranque rápido durante
              el escalado.
            </li>
            <li>
              Implementar rate limiting para proteger contra picos de tráfico
              inesperados.
            </li>
            <li>
              Revisar y ajustar regularmente las políticas de escalado y los
              umbrales de alerta.
            </li>
          </ul>

          <p className="mb-4">
            El diseño de arquitecturas elásticas en la nube permite crear
            sistemas que se adaptan eficientemente a las demandas cambiantes,
            optimizando tanto el rendimiento como los costos. Al combinar
            balanceo de carga, autoescalado y monitorización, las organizaciones
            pueden construir aplicaciones robustas y altamente disponibles que
            ofrecen una experiencia de usuario consistente incluso bajo cargas
            variables.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}
