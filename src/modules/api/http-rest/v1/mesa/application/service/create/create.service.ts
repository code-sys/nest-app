import { Injectable } from '@nestjs/common';
import { MesaRepository } from '../../../infrastructure/adapter/persistence/typeorm/repository/mesa.repository';
import { Mesa } from '../../../infrastructure/adapter/persistence/typeorm/entity/mesa.entity';
import { CreateAdapter } from '../../../infrastructure/adapter/use-case/create.adapter';
import { PisoRepository } from '../../../../piso/infrastructure/adapter/persistence/typeorm/repository/piso.repository';
import { Piso } from '../../../../piso/infrastructure/adapter/persistence/typeorm/entity/piso.entity';

@Injectable()
export class CreateService {
  constructor(
    private readonly mesaRepository: MesaRepository,
    private readonly pisoRepository: PisoRepository,
  ) {}

  create(adapter: CreateAdapter): Promise<Mesa> {
    const piso: Piso = this.pisoRepository.create({
      pk_id: adapter.fk_piso,
    });

    const mesa: Mesa = this.mesaRepository.create({
      nro: adapter.nro,
      piso,
      estado: adapter.estado,
    });

    return this.mesaRepository.save(mesa);
  }
}
