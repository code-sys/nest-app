import { EstadoEnum } from '../enum/estado.enum';

export interface UpdateEstadoPort {
  pk_id: number;
  estado: EstadoEnum;
}
