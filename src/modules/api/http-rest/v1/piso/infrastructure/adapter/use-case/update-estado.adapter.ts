import { BadRequestException } from '@nestjs/common';
import { Expose, plainToClass } from 'class-transformer';
import { EstadoEnum } from '@api/v1/piso/domain/enum/estado.enum';
import { UpdateEstadoPort } from '@api/v1/piso/domain/port/update-estado.port';
import { PisoExiste } from '@api/v1/piso/domain/validation-rules/piso-existe.rule';
import { UseCaseValidatableAdapter } from '@shared/adapter/usecase/UseCaseValidatableAdapter';
import { UseCaseErrResponseFmt } from '@shared/adapter/usecase/UseCaseErrResponseFmt';

export class UpdateEstadoAdapter
  extends UseCaseValidatableAdapter
  implements UpdateEstadoPort
{
  @Expose()
  @PisoExiste()
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
