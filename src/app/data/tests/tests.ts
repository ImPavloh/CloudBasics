import { Question } from './types'
import { seguridad_old } from './contents/seguridad_old'
import { redes } from './contents/redes'
import { servicios_old } from './contents/servicios_old'
import { seguridad } from './contents/seguridad'
import { servicios } from './contents/servicios'
import { almacenamiento } from './contents/almacenamiento'
import { bases_de_datos } from './contents/bases_de_datos'
import { arquitectura } from './contents/arquitectura'

export const tests: Record<string, Question[]> = {
  seguridad_old,
  redes,
  servicios_old,
  seguridad,
  servicios,
  almacenamiento,
  bases_de_datos,
  arquitectura,
}
