import { DisponibleEnum } from '../../../../../../../shared/enum/disponible.enum';

export interface UpdateDisponiblePort {
  pk_id: number;
  disponible: DisponibleEnum;
}
