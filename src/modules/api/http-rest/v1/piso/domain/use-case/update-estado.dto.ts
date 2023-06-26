import { IsEnum } from 'class-validator';
import { EstadoEnum } from '@api/v1/piso/domain/enum/estado.enum';

export class UpdateEstadoDto {
  @IsEnum(EstadoEnum)
  estado: EstadoEnum;
}
