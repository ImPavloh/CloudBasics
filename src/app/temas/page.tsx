'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCloud, FaMoneyBillWave, FaServer, FaShieldAlt, FaNetworkWired, FaDesktop, FaDatabase, FaArchway, FaBalanceScale, FaSearch } from 'react-icons/fa'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

import ComputacionEnLaNube from '../../components/Computacion'
import PreciosEnLaNube from '../../components/Precios'
import InfraestructuraEnLaNube from '../../components/Infraestructura'
import SeguridadEnLaNube from '../../components/Seguridad'
import RedesEnLaNube from '../../components/Redes'
import ServiciosDeComputacion from '../../components/ServiciosDeComputacion'
import AlmacenamientoEnLaNube from '../../components/Almacenamiento'
import BasesDeDatosEnLaNube from '../../components/BasesDeDatos'
import PrincipiosArquitectonicosNube from '../../components/PrincipiosArquitectonicos'
import ArquitecturasElasticas from '../../components/ArquitecturasElasticas'

interface Topic {
  id: number
  titulo: string
  icono: React.ComponentType
  descripcion: string
  componente: React.ComponentType
}

const temas: Topic[] = [
  { id: 1, titulo: 'Computación en la Nube', icono: FaCloud, descripcion: 'Definición y modelos de computación en la nube', componente: ComputacionEnLaNube },
  { id: 2, titulo: 'Precios en la Nube', icono: FaMoneyBillWave, descripcion: 'Filosofía de precios y factores de costo', componente: PreciosEnLaNube },
  { id: 3, titulo: 'Infraestructura en la Nube', icono: FaServer, descripcion: 'Componentes de la infraestructura en la nube', componente: InfraestructuraEnLaNube },
  { id: 4, titulo: 'Seguridad en la Nube', icono: FaShieldAlt, descripcion: 'Medidas de seguridad y conformidad', componente: SeguridadEnLaNube },
  { id: 5, titulo: 'Redes en la Nube', icono: FaNetworkWired, descripcion: 'Creación de una nube privada virtual', componente: RedesEnLaNube },
  { id: 6, titulo: 'Servicios de Cómputo', icono: FaDesktop, descripcion: 'Casos de uso de servicios de computación en nube', componente: ServiciosDeComputacion },
  { id: 7, titulo: 'Almacenamiento en la Nube', icono: FaDatabase, descripcion: 'Servicios de almacenamiento en la nube', componente: AlmacenamientoEnLaNube },
  { id: 8, titulo: 'Bases de Datos en la Nube', icono: FaDatabase, descripcion: 'Bases de datos administradas en la nube', componente: BasesDeDatosEnLaNube },
  { id: 9, titulo: 'Arquitectura en la Nube', icono: FaArchway, descripcion: 'Principios arquitectónicos en la nube', componente: PrincipiosArquitectonicosNube },
  { id: 10, titulo: 'Escalabilidad y Monitoreo', icono: FaBalanceScale, descripcion: 'Balanceo de carga, autoescalado y monitorización', componente: ArquitecturasElasticas },
]

export default function PlataformaAprendizaje() {
  const [temaSeleccionado, setTemaSeleccionado] = useState<Topic>(temas[0])
  const [busqueda, setBusqueda] = useState('')

  const temasFiltrados = temas.filter(tema =>
    tema.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    tema.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="min-h-screen mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Cloud Basics</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Card className="w-full md:w-1/3 lg:w-1/4">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Temas</CardTitle>
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar temas..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Tabs
              orientation="vertical"
              value={temaSeleccionado.id.toString()}
              onValueChange={(valor) => setTemaSeleccionado(temas.find(t => t.id.toString() === valor) || temas[0])}
            >
              <TabsList className="flex flex-col justify-start w-full gap-2">
                {temasFiltrados.map((tema) => (
                  <TabsTrigger
                    key={tema.id}
                    value={tema.id.toString()}
                     className="justify-start w-full"
                  >
                    <tema.icono className="mr-2" aria-hidden="true" />
                    <span>{tema.titulo}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="w-full md:w-2/3 lg:w-3/4">
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={temaSeleccionado.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {temaSeleccionado.componente && <temaSeleccionado.componente />}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}