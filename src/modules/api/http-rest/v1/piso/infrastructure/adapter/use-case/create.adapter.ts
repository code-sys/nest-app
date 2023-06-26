import { BadRequestException } from '@nestjs/common';
import { Expose, plainToClass } from 'class-transformer';
import { EstadoEnum } from '@api/v1/piso/domain/enum/estado.enum';
import { CreatePort } from '@api/v1/piso/domain/port/create.port';
import { NroPisoNoRegistrado } from '@api/v1/piso/domain/validation-rules/nro-piso-no-registrado.rule';
import { UseCaseValidatableAdapter } from '@shared/adapter/usecase/UseCaseValidatableAdapter';
import { UseCaseErrResponseFmt } from '@shared/adapter/usecase/UseCaseErrResponseFmt';

export class CreateAdapter
  extends UseCaseValidatableAdapter
  implements CreatePort
{
  @Expose()
  @NroPisoNoRegistrado()
  nro: string;

  @Expose()
  estado: EstadoEnum;

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
