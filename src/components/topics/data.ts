import { LucideIcon, Cloud, DollarSign, Server, Shield, Network, Monitor, Database, LayoutGrid, Scale } from 'lucide-react'

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
  icon: LucideIcon
  description: string
  category: string
  component: React.ComponentType
  available: boolean
}

export const topics: Topic[] = [
  {
    id: 'cloud',
    title: 'Computación en la nube',
    icon: Cloud,
    description: 'Definición y modelos',
    category: 'Fundamentos',
    component: ComputacionEnLaNube,
    available: true,
  },
  {
    id: 'pricing',
    title: 'Economía y facturación',
    icon: DollarSign,
    description: 'Precios y costos',
    category: 'Negocios',
    component: PreciosEnLaNube,
    available: true,
  },
  {
    id: 'infra',
    title: 'Infraestructura de la nube',
    icon: Server,
    description: 'Componentes de infraestructura',
    category: 'Técnico',
    component: InfraestructuraEnLaNube,
    available: true,
  },
  {
    id: 'security',
    title: 'Seguridad',
    icon: Shield,
    description: 'Seguridad y conformidad',
    category: 'Seguridad',
    component: SeguridadEnLaNube,
    available: true,
  },
  {
    id: 'networking',
    title: 'Redes',
    icon: Network,
    description: 'Nube privada virtual',
    category: 'Técnico',
    component: RedesEnLaNube,
    available: true,
  },
  {
    id: 'compute',
    title: 'Servicios de cómputo',
    icon: Monitor,
    description: 'Casos de uso',
    category: 'Servicios',
    component: ServiciosDeComputacion,
    available: true,
  },
  {
    id: 'storage',
    title: 'Almacenamiento',
    icon: Database,
    description: 'Servicios de almacenamiento',
    category: 'Servicios',
    component: AlmacenamientoEnLaNube,
    available: true,
  },
  {
    id: 'databases',
    title: 'Bases de datos',
    icon: Database,
    description: 'Bases de datos administradas',
    category: 'Servicios',
    component: BasesDeDatosEnLaNube,
    available: true,
  },
  {
    id: 'architecture',
    title: 'Principios arquitectónicos',
    icon: LayoutGrid,
    description: 'Principios arquitectónicos',
    category: 'Diseño',
    component: PrincipiosArquitectonicosNube,
    available: true,
  },
  {
    id: 'elastic',
    title: 'Arquitecturas elásticas',
    icon: Scale,
    description: 'Escalado y monitorización',
    category: 'Operaciones',
    component: ArquitecturasElasticas,
    available: false,
  },
]

export const categories = ['Todos', ...Array.from(new Set(topics.map((topic) => topic.category)))]