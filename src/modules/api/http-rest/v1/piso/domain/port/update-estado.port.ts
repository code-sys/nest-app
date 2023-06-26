import { EstadoEnum } from '@api/v1/piso/domain/enum/estado.enum';

export interface UpdateEstadoPort {
  pk_id: number;
  estado: EstadoEnum;
}
