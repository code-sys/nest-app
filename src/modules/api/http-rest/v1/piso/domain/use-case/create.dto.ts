import { IsString, IsEnum, Matches } from 'class-validator';
import { EstadoEnum } from '@api/v1/piso/domain/enum/estado.enum';

export class CreateDto {
  @IsString()
  @Matches(/^[1-9]$/, {
    message: 'El nro. del piso debe estar entre 1 y 9.',
  })
  nro: string;

  @IsEnum(EstadoEnum)
  estado: EstadoEnum;
}
