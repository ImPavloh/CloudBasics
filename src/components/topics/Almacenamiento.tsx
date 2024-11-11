import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaDatabase } from 'react-icons/fa'

export default function AlmacenamientoEnLaNube() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center">
          <FaDatabase className="mr-2" />
          Almacenamiento en la Nube
        </CardTitle>
        <CardDescription>Servicios de almacenamiento en la nube y sus diferencias</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Servicios de Almacenamiento en la Nube</h3>
          <p className="mb-4">
            El almacenamiento en la nube ofrece soluciones escalables y flexibles para guardar y acceder a datos. 
            Existen varios tipos de servicios de almacenamiento, cada uno diseñado para diferentes casos de uso.
          </p>
          
          <h4 className="text-lg font-semibold mb-2">Tipos principales de almacenamiento en la nube:</h4>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2"><strong>Almacenamiento de objetos:</strong> Para datos no estructurados como archivos, imágenes y backups.</li>
            <li className="mb-2"><strong>Almacenamiento de bloques:</strong> Para aplicaciones que requieren acceso a nivel de bloque, como bases de datos.</li>
            <li className="mb-2"><strong>Almacenamiento de archivos:</strong> Para compartir archivos y colaboración, similar a un sistema de archivos tradicional.</li>
            <li className="mb-2"><strong>Almacenamiento en caché:</strong> Para mejorar el rendimiento de aplicaciones con acceso frecuente a datos.</li>
            <li className="mb-2"><strong>Almacenamiento de archivos fríos:</strong> Para datos de acceso poco frecuente y a largo plazo.</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Características y diferencias:</h4>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Almacenamiento de objetos:</strong> Altamente escalable, acceso vía HTTP/S, metadatos personalizables.</li>
            <li><strong>Almacenamiento de bloques:</strong> Baja latencia, ideal para bases de datos y aplicaciones de alto rendimiento.</li>
            <li><strong>Almacenamiento de archivos:</strong> Interfaz de sistema de archivos, ideal para compartir datos entre múltiples instancias.</li>
            <li><strong>Almacenamiento en caché:</strong> Baja latencia, almacenamiento en memoria para acceso rápido.</li>
            <li><strong>Almacenamiento de archivos fríos:</strong> Bajo costo, mayor tiempo de recuperación, ideal para archivos y backups.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Casos de uso comunes:</h4>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Almacenamiento de objetos:</strong> Hosting de contenido web, backups, archivos multimedia.</li>
            <li><strong>Almacenamiento de bloques:</strong> Bases de datos, máquinas virtuales, aplicaciones de alto rendimiento.</li>
            <li><strong>Almacenamiento de archivos:</strong> Compartir archivos en equipos, almacenamiento para aplicaciones heredadas.</li>
            <li><strong>Almacenamiento en caché:</strong> Aceleración de bases de datos, almacenamiento de sesiones web.</li>
            <li><strong>Almacenamiento de archivos fríos:</strong> Cumplimiento normativo, archivado a largo plazo, backups.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Consideraciones al elegir servicios de almacenamiento:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Rendimiento requerido (IOPS, latencia, throughput)</li>
            <li>Escalabilidad y capacidad</li>
            <li>Durabilidad y redundancia de datos</li>
            <li>Costos (almacenamiento, transferencia, operaciones)</li>
            <li>Compatibilidad con aplicaciones existentes</li>
            <li>Requisitos de seguridad y cumplimiento normativo</li>
            <li>Facilidad de gestión y monitoreo</li>
          </ul>

          <p className="mb-4">
            Los servicios de almacenamiento en la nube ofrecen soluciones flexibles y escalables para una amplia 
            gama de necesidades de almacenamiento. Al comprender las diferencias entre los tipos de almacenamiento 
            y sus casos de uso específicos, las organizaciones pueden seleccionar la solución más adecuada para 
            sus necesidades, optimizando el rendimiento y los costos.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}