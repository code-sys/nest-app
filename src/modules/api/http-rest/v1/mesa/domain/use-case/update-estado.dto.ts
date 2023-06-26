import { IsEnum } from 'class-validator';
import { EstadoEnum } from '../enum/estado.enum';

export class UpdateEstadoDto {
  @IsEnum(EstadoEnum)
  estado: EstadoEnum;
}
