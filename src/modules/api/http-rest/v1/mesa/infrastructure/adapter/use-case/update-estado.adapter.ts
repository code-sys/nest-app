import { BadRequestException } from '@nestjs/common';
import { Expose, plainToClass } from 'class-transformer';
import { UseCaseValidatableAdapter } from 'src/shared/adapter/usecase/UseCaseValidatableAdapter';
import { EstadoEnum } from '../../../domain/enum/estado.enum';
import { UseCaseErrResponseFmt } from 'src/shared/adapter/usecase/UseCaseErrResponseFmt';
import { UpdateEstadoPort } from '../../../domain/port/update-estado.port';
import { MesaExiste } from '../../../domain/validation-rules/mesa-existe.rule';

export class UpdateEstadoAdapter
  extends UseCaseValidatableAdapter
  implements UpdateEstadoPort
{
  @Expose()
  @MesaExiste()
  pk_id: number;

  @Expose()
  estado: EstadoEnum;

  public static async new(
    payload: UpdateEstadoPort,
  ): Promise<UpdateEstadoAdapter> {
    const adapter: UpdateEstadoAdapter = plainToClass(
      UpdateEstadoAdapter,
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
