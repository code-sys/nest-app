import { Injectable } from '@nestjs/common';
import { PisoRepository } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/repository/piso.repository';

@Injectable()
export class ExistsPisoService {
  constructor(private readonly pisoRepository: PisoRepository) {}

  async validar(id: number): Promise<boolean> {
    const piso = await this.pisoRepository.findOneBy({ pk_id: id });
    return piso !== null;
  }
}
