import { Injectable } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { PisoRepository } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/repository/piso.repository';
import { Piso } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/entity/piso.entity';
import { UpdateEstadoAdapter } from '@api/v1/piso/infrastructure/adapter/use-case/update-estado.adapter';

@Injectable()
export class UpdateEstadoService {
  constructor(private readonly pisoRepository: PisoRepository) {}

  update(adapter: UpdateEstadoAdapter): Promise<UpdateResult> {
    const piso: Piso = this.pisoRepository.create({
      estado: adapter.estado,
    });

    return this.pisoRepository.update({ pk_id: adapter.pk_id }, piso);
  }
}
