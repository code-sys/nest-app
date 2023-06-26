import { DisponibleEnum } from '@shared/enum/disponible.enum';

export interface CreatePort {
  fk_grupo_comida: number;
  nombre: string;
  img?: string;
  precio_venta: number;
  precio_produccion?: number;
  disponible: DisponibleEnum;
}
