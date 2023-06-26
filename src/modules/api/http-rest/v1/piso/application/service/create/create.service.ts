import { Injectable } from '@nestjs/common';
import { PisoRepository } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/repository/piso.repository';
import { Piso } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/entity/piso.entity';
import { CreateAdapter } from '@api/v1/piso/infrastructure/adapter/use-case/create.adapter';

@Injectable()
export class CreateService {
  constructor(private readonly pisoRepository: PisoRepository) {}

  create(adapter: CreateAdapter): Promise<Piso> {
    const piso: Piso = this.pisoRepository.create({
      nro: adapter.nro,
      estado: adapter.estado,
    });

    return this.pisoRepository.save(piso);
  }
}
