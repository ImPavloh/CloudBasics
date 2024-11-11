import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaMoneyBillWave } from 'react-icons/fa'

export default function PreciosEnLaNube() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold flex items-center">
          <FaMoneyBillWave className="mr-2" />
          Precios en la Nube
        </CardTitle>
        <CardDescription>Filosofía de precios y factores de costo</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Filosofía de Precios en la Nube</h3>
          <p className="mb-4">
            La filosofía de precios en la nube se basa en el modelo de "pago por uso", donde los clientes solo pagan 
            por los recursos que consumen. Este enfoque permite una mayor flexibilidad y eficiencia en costos.
          </p>
          
          <h4 className="text-lg font-semibold mb-2">Características principales de los precios en la nube:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Modelo de pago por uso</li>
            <li>Escalabilidad de costos</li>
            <li>Transparencia en la facturación</li>
            <li>Opciones de precios flexibles</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Factores que influyen en el costo:</h4>
          <ol className="list-decimal list-inside mb-4">
            <li className="mb-2"><strong>Tipo de servicio:</strong> IaaS, PaaS, SaaS tienen diferentes estructuras de precios.</li>
            <li className="mb-2"><strong>Uso de recursos:</strong> CPU, memoria, almacenamiento, ancho de banda.</li>
            <li className="mb-2"><strong>Duración del uso:</strong> Por segundo, hora, mes, o compromisos a largo plazo.</li>
            <li className="mb-2"><strong>Ubicación geográfica:</strong> Los precios pueden variar según la región del centro de datos.</li>
            <li className="mb-2"><strong>Nivel de soporte:</strong> Diferentes niveles de soporte técnico tienen diferentes costos.</li>
          </ol>

          <h4 className="text-lg font-semibold mb-2">Estrategias de optimización de costos:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Uso de instancias reservadas para cargas de trabajo predecibles</li>
            <li>Aprovechamiento de instancias spot para cargas de trabajo flexibles</li>
            <li>Implementación de políticas de apagado automático</li>
            <li>Monitoreo y ajuste continuo del uso de recursos</li>
            <li>Uso de herramientas de gestión de costos proporcionadas por los proveedores de nube</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Costo Total de Propiedad (TCO):</h4>
          <p className="mb-4">
            Al evaluar los costos de la nube, es importante considerar el TCO, que incluye no solo los costos directos 
            de los servicios en la nube, sino también los ahorros en infraestructura física, personal de TI, 
            mantenimiento y actualizaciones.
          </p>

          <p className="mb-4">
            Comprender la filosofía de precios en la nube y los factores que influyen en los costos es esencial para 
            optimizar el gasto en TI y aprovechar al máximo los beneficios de la computación en la nube.
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}