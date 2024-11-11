import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaArchway } from 'react-icons/fa'

export default function PrincipiosArquitectonicosNube() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center">
          <FaArchway className="mr-2" />
          Principios Arquitectónicos en la Nube
        </CardTitle>
        <CardDescription>Fundamentos para diseñar arquitecturas efectivas en la nube</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Principios de Arquitectura en la Nube</h3>
          <p className="mb-4">
            Los principios arquitectónicos en la nube son fundamentales para diseñar sistemas escalables, 
            resilientes y eficientes. Estos principios guían el desarrollo de soluciones que aprovechan 
            al máximo las capacidades de la computación en la nube.
          </p>
          
          <h4 className="text-lg font-semibold mb-2">Pilares fundamentales de la arquitectura en la nube:</h4>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2"><strong>Excelencia operativa:</strong> Ejecutar y monitorear sistemas para entregar valor empresarial y mejorar continuamente los procesos y procedimientos.</li>
            <li className="mb-2"><strong>Seguridad:</strong> Proteger la información, sistemas y activos mientras se entrega valor empresarial a través de evaluaciones de riesgo y estrategias de mitigación.</li>
            <li className="mb-2"><strong>Fiabilidad:</strong> Asegurar que un sistema funcione correctamente y de manera consistente bajo las condiciones esperadas.</li>
            <li className="mb-2"><strong>Eficiencia de rendimiento:</strong> Usar recursos de computación de manera eficiente para cumplir con los requisitos del sistema y mantener esa eficiencia a medida que la demanda cambia y las tecnologías evolucionan.</li>
            <li className="mb-2"><strong>Optimización de costos:</strong> Evitar gastos innecesarios y mejorar la visibilidad de los gastos.</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Principios de diseño clave:</h4>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Diseño para fallos:</strong> Planificar y diseñar pensando en que los fallos ocurrirán.</li>
            <li><strong>Desacoplamiento de componentes:</strong> Reducir las interdependencias entre componentes.</li>
            <li><strong>Implementación de elasticidad:</strong> Escalar recursos automáticamente según la demanda.</li>
            <li><strong>Paralelización:</strong> Distribuir cargas de trabajo para mejorar el rendimiento.</li>
            <li><strong>Diseño serverless:</strong> Utilizar servicios gestionados y arquitecturas sin servidor cuando sea posible.</li>
            <li><strong>Automatización:</strong> Automatizar procesos para reducir errores y aumentar la eficiencia.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Patrones arquitectónicos comunes en la nube:</h4>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Microservicios:</strong> Descomponer aplicaciones en servicios pequeños e independientes.</li>
            <li><strong>Arquitectura sin servidor:</strong> Utilizar servicios gestionados y funciones como servicio (FaaS).</li>
            <li><strong>Arquitectura de eventos:</strong> Diseñar sistemas basados en la producción, detección y reacción a eventos.</li>
            <li><strong>CQRS (Command Query Responsibility Segregation):</strong> Separar las operaciones de lectura y escritura para optimizar el rendimiento.</li>
            <li><strong>Patrón de estrangulamiento:</strong> Migrar gradualmente sistemas heredados a la nube.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Mejores prácticas para implementar principios arquitectónicos:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Adoptar una mentalidad de "infraestructura como código"</li>
            <li>Implementar monitoreo y logging exhaustivos</li>
            <li>Utilizar control de versiones para configuraciones y código</li>
            <li>Practicar la integración y entrega continuas (CI/CD)</li>
            <li>Realizar revisiones de arquitectura periódicas</li>
            <li>Fomentar una cultura de experimentación y aprendizaje</li>
          </ul>

          <p className="mb-4">
            La aplicación de estos principios arquitectónicos en la nube permite a las organizaciones 
            crear sistemas más robustos, escalables y eficientes. Al adoptar estas prácticas, los 
            arquitectos de nube pueden diseñar soluciones que no solo satisfacen las necesidades 
            actuales, sino que también están preparadas para los desafíos futuros y la evolución 
            tecnológica continua.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}