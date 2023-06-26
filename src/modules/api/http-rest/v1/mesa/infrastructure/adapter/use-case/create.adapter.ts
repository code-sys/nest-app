import { BadRequestException } from '@nestjs/common';
import { Expose, plainToClass } from 'class-transformer';
import { UseCaseValidatableAdapter } from 'src/shared/adapter/usecase/UseCaseValidatableAdapter';
import { CreatePort } from '../../../domain/port/create.port';
import { EstadoEnum } from '../../../domain/enum/estado.enum';
import { PisoExiste } from '../../../../piso/domain/validation-rules/piso-existe.rule';
import { UseCaseErrResponseFmt } from 'src/shared/adapter/usecase/UseCaseErrResponseFmt';
import { NroMesaNoRegistradoEnPiso } from '../../../domain/validation-rules/nro-mesa-no-registrado-en-piso.rule';

export class CreateAdapter
  extends UseCaseValidatableAdapter
  implements CreatePort
{
  @Expose()
  @PisoExiste()
  fk_piso: number;

  @Expose()
  @NroMesaNoRegistradoEnPiso()
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
