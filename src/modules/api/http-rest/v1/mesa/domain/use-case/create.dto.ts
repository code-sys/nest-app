import { IsEnum, IsNumber, IsString, Matches } from 'class-validator';
import { EstadoEnum } from '../enum/estado.enum';

export class CreateDto {
  @IsNumber()
  idPiso: number;

  @IsString()
  @Matches(/^[1-9]\d?$/, {
    message: 'El nro. de mesa debe estar entre 1 y 99',
  })
  nro: string;

  @IsEnum(EstadoEnum)
  estado: EstadoEnum;
}
