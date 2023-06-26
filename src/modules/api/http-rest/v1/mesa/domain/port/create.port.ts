import { EstadoEnum } from '../enum/estado.enum';

export interface CreatePort {
  fk_piso: number;
  nro: string;
  estado: EstadoEnum;
}
