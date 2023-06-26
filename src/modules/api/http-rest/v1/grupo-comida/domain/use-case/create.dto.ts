import { IsEnum, IsString } from 'class-validator';
import { DisponibleEnum } from 'src/shared/enum/disponible.enum';

export class CreateDto {
  @IsString()
  nombre: string;

  @IsEnum(DisponibleEnum)
  disponible: DisponibleEnum;
}
