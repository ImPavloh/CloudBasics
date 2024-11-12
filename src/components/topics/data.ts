import * as Icons from 'lucide-react'

import ComputacionEnLaNube from '@/components/topics/Computacion'
import PreciosEnLaNube from '@/components/topics/Precios'
import InfraestructuraEnLaNube from '@/components/topics/Infraestructura'
import SeguridadEnLaNube from '@/components/topics/Seguridad'
import RedesEnLaNube from '@/components/topics/Redes'
import ServiciosDeComputacion from '@/components/topics/ServiciosDeComputacion'
import AlmacenamientoEnLaNube from '@/components/topics/Almacenamiento'
import BasesDeDatosEnLaNube from '@/components/topics/BasesDeDatos'
import PrincipiosArquitectonicosNube from '@/components/topics/PrincipiosArquitectonicos'
import ArquitecturasElasticas from '@/components/topics/ArquitecturasElasticas'

export interface Topic {
  id: string
  title: string
  icon: keyof typeof Icons
  description: string
  category: string
  component: React.ComponentType
  available: boolean
}

export const topics: Topic[] = [
  {
    id: 'cloud',
    title: 'Computación en la nube',
    icon: 'Cloud',
    description: 'Definición y modelos',
    category: 'Fundamentos',
    component: ComputacionEnLaNube,
    available: true,
  },
  {
    id: 'pricing',
    title: 'Economía y facturación',
    icon: 'DollarSign',
    description: 'Precios y costos',
    category: 'Negocios',
    component: PreciosEnLaNube,
    available: true,
  },
  {
    id: 'infra',
    title: 'Infraestructura de la nube',
    icon: 'Server',
    description: 'Componentes de infraestructura',
    category: 'Técnico',
    component: InfraestructuraEnLaNube,
    available: true,
  },
  {
    id: 'security',
    title: 'Seguridad en la Nube',
    icon: 'Shield',
    description: 'Seguridad y conformidad',
    category: 'Seguridad',
    component: SeguridadEnLaNube,
    available: false,
  },
  {
    id: 'networking',
    title: 'Redes en la Nube',
    icon: 'Network',
    description: 'Nube privada virtual',
    category: 'Técnico',
    component: RedesEnLaNube,
    available: false,
  },
  {
    id: 'compute',
    title: 'Servicios de Cómputo',
    icon: 'Monitor',
    description: 'Casos de uso',
    category: 'Servicios',
    component: ServiciosDeComputacion,
    available: false,
  },
  {
    id: 'storage',
    title: 'Almacenamiento en la Nube',
    icon: 'Database',
    description: 'Servicios de almacenamiento',
    category: 'Servicios',
    component: AlmacenamientoEnLaNube,
    available: false,
  },
  {
    id: 'databases',
    title: 'Bases de Datos en la Nube',
    icon: 'Database',
    description: 'Bases de datos administradas',
    category: 'Servicios',
    component: BasesDeDatosEnLaNube,
    available: false,
  },
  {
    id: 'architecture',
    title: 'Principios Arquitectónicos en la Nube',
    icon: 'LayoutGrid',
    description: 'Principios arquitectónicos',
    category: 'Diseño',
    component: PrincipiosArquitectonicosNube,
    available: false,
  },
  {
    id: 'elastic',
    title: 'Arquitecturas Elásticas',
    icon: 'Scale',
    description: 'Escalado y monitorización',
    category: 'Operaciones',
    component: ArquitecturasElasticas,
    available: false,
  },
]

export const categories = ['Todos', ...new Set(topics.map((topic) => topic.category))]