import { BadRequestException } from '@nestjs/common';
import { Expose, plainToClass } from 'class-transformer';
import { UseCaseValidatableAdapter } from 'src/shared/adapter/usecase/UseCaseValidatableAdapter';
import { CreatePort } from '../../../domain/port/create.port';
import { DisponibleEnum } from 'src/shared/enum/disponible.enum';
import { UseCaseErrResponseFmt } from 'src/shared/adapter/usecase/UseCaseErrResponseFmt';
import { NombreNoExiste } from '../../../domain/validation-rules/nombre-no-existe.rule';

export class CreateAdapter
  extends UseCaseValidatableAdapter
  implements CreatePort
{
  @Expose()
  @NombreNoExiste()
  nombre: string;

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
