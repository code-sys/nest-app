import { Injectable } from '@nestjs/common';
import { MesaRepository } from '../../../infrastructure/adapter/persistence/typeorm/repository/mesa.repository';
import { UpdateEstadoAdapter } from '../../../infrastructure/adapter/use-case/update-estado.adapter';
import { UpdateResult } from 'typeorm';

@Injectable()
export class UpdateEstadoService {
  constructor(private readonly mesaRepository: MesaRepository) {}

  update(adapter: UpdateEstadoAdapter): Promise<UpdateResult> {
    return this.mesaRepository.update(
      { pk_id: adapter.pk_id },
      { estado: adapter.estado },
    );
  }
}
