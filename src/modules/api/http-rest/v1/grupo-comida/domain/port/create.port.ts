import { DisponibleEnum } from '../../../../../../../shared/enum/disponible.enum';

export interface CreatePort {
  nombre: string;
  disponible: DisponibleEnum;
}
