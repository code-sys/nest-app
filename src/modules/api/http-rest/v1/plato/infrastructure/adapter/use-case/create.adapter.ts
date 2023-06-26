import { BadRequestException } from '@nestjs/common';
import { Expose, plainToClass } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { CreatePort } from '@api/v1/plato/domain/port/create.port';
import { DisponibleEnum } from '@shared/enum/disponible.enum';
import { UseCaseValidatableAdapter } from '@shared/adapter/usecase/UseCaseValidatableAdapter';
import { UseCaseErrResponseFmt } from '@shared/adapter/usecase/UseCaseErrResponseFmt';

export class CreateAdapter
  extends UseCaseValidatableAdapter
  implements CreatePort
{
  @Expose()
  //
  fk_grupo_comida: number;

  @Expose()
  //
  nombre: string;

  @Expose()
  @IsOptional()
  img?: string;

  @Expose()
  precio_venta: number;

  @Expose()
  @IsOptional()
  precio_produccion?: number;

  @Expose()
  disponible: DisponibleEnum;

  public static async new(payload: CreatePort): Promise<CreateAdapter> {
    const adapter: CreateAdapter = plainToClass(CreateAdapter, payload);

    try {
      await adapter.validate();
    } catch (error: any) {
      const objException = UseCaseErrResponseFmt.format(error);
      throw new BadRequestException(objException);
    }

    return adapter;
  }
}
