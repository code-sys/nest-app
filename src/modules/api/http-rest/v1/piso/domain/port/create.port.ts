import { EstadoEnum } from '@api/v1/piso/domain/enum/estado.enum';

export interface CreatePort {
  nro: string;
  estado: EstadoEnum;
}
