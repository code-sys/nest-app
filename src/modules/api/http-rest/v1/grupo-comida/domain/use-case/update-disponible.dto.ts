import { IsEnum } from 'class-validator';
import { DisponibleEnum } from 'src/shared/enum/disponible.enum';

export class UpdateDisponibleDto {
  @IsEnum(DisponibleEnum)
  disponible: DisponibleEnum;
}
