import { Injectable } from '@nestjs/common';
import { MesaRepository } from '../../../infrastructure/adapter/persistence/typeorm/repository/mesa.repository';

@Injectable()
export class ExistsMesaService {
  constructor(private readonly mesaRepository: MesaRepository) {}

  async validar(id: number): Promise<boolean> {
    const mesa = await this.mesaRepository.findOneBy({ pk_id: id });
    return mesa !== null;
  }
}
