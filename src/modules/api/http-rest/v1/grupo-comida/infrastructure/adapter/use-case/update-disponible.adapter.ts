import { BadRequestException } from '@nestjs/common';
import { Expose, plainToClass } from 'class-transformer';
import { UseCaseValidatableAdapter } from 'src/shared/adapter/usecase/UseCaseValidatableAdapter';
import { UpdateDisponiblePort } from '../../../domain/port/update-disponible.port';
import { DisponibleEnum } from 'src/shared/enum/disponible.enum';
import { UseCaseErrResponseFmt } from 'src/shared/adapter/usecase/UseCaseErrResponseFmt';
import { GrupoComidaExiste } from '../../../domain/validation-rules/grupo-comida-existe.rule';

export class UpdateDisponibleAdapter
  extends UseCaseValidatableAdapter
  implements UpdateDisponiblePort
{
  @Expose()
  @GrupoComidaExiste()
  pk_id: number;

  @Expose()
  disponible: DisponibleEnum;

  public static async new(
    payload: UpdateDisponiblePort,
  ): Promise<UpdateDisponibleAdapter> {
    const adapter: UpdateDisponibleAdapter = plainToClass(
      UpdateDisponibleAdapter,
      payload,
    );

    try {
      await adapter.validate();
    } catch (error: any) {
      const objException = UseCaseErrResponseFmt.format(error);
      throw new BadRequestException(objException);
    }

    return adapter;
  }
}
