import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaDatabase } from 'react-icons/fa'

export default function BasesDeDatosEnLaNube() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center">
          <FaDatabase className="mr-2" />
          Bases de Datos en la Nube
        </CardTitle>
        <CardDescription>Descripción, diferenciación y despliegue de bases de datos administradas en la nube</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Bases de Datos Administradas en la Nube</h3>
          <p className="mb-4">
            Las bases de datos administradas en la nube ofrecen soluciones escalables y de alto rendimiento para 
            almacenar, gestionar y analizar datos, sin la necesidad de administrar la infraestructura subyacente.
          </p>
          
          <h4 className="text-lg font-semibold mb-2">Tipos principales de bases de datos en la nube:</h4>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2"><strong>Bases de datos relacionales:</strong> SQL Server, MySQL, PostgreSQL, Oracle</li>
            <li className="mb-2"><strong>Bases de datos NoSQL:</strong> MongoDB, Cassandra, Redis, DynamoDB</li>
            <li className="mb-2"><strong>Bases de datos en memoria:</strong> Redis, Memcached</li>
            <li className="mb-2"><strong>Bases de datos de series temporales:</strong> InfluxDB, TimescaleDB</li>
            <li className="mb-2"><strong>Bases de datos de grafos:</strong> Neo4j, Amazon Neptune</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Características y diferencias:</h4>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Relacionales:</strong> ACID compliant, ideal para datos estructurados y transacciones complejas.</li>
            <li><strong>NoSQL:</strong> Alta escalabilidad, flexibilidad en el esquema, ideal para datos no estructurados o semiestructurados.</li>
            <li><strong>En memoria:</strong> Rendimiento extremadamente alto, ideal para cachés y datos volátiles.</li>
            <li><strong>Series temporales:</strong> Optimizadas para datos con marca de tiempo, ideal para métricas y análisis de tendencias.</li>
            <li><strong>Grafos:</strong> Eficientes para datos altamente conectados, ideal para redes sociales y sistemas de recomendación.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Ventajas de las bases de datos administradas en la nube:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Escalabilidad automática</li>
            <li>Alta disponibilidad y replicación</li>
            <li>Backups y recuperación ante desastres</li>
            <li>Parches y actualizaciones automáticas</li>
            <li>Monitoreo y alertas integrados</li>
            <li>Seguridad mejorada</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Pasos para desplegar una base de datos administrada:</h4>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">Seleccionar el tipo de base de datos adecuado para su caso de uso</li>
            <li className="mb-2">Elegir el proveedor de nube y el servicio específico</li>
            <li className="mb-2">Configurar las opciones de instancia (tamaño, región, versión)</li>
            <li className="mb-2">Establecer la configuración de red y seguridad</li>
            <li className="mb-2">Crear la instancia de la base de datos</li>
            <li className="mb-2">Configurar la conexión y los usuarios</li>
            <li className="mb-2">Importar datos (si es necesario)</li>
            <li className="mb-2">Configurar backups y monitoreo</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Consideraciones al elegir una base de datos en la nube:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Modelo de datos y requisitos de consulta</li>
            <li>Escalabilidad y rendimiento necesarios</li>
            <li>Consistencia vs disponibilidad (teorema CAP)</li>
            <li>Costos (instancia, almacenamiento, transferencia de datos)</li>
            <li>Compatibilidad con aplicaciones existentes</li>
            <li>Requisitos de seguridad y cumplimiento normativo</li>
            <li>Herramientas de gestión y monitoreo disponibles</li>
          </ul>

          <p className="mb-4">
            Las bases de datos administradas en la nube ofrecen una solución poderosa y flexible para las necesidades 
            de almacenamiento y gestión de datos de las organizaciones modernas. Al comprender los diferentes tipos 
            de bases de datos, sus características y el proceso de despliegue, los profesionales de TI pueden 
            seleccionar e implementar la solución más adecuada para sus aplicaciones y casos de uso específicos.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}