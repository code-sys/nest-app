import { Injectable } from '@nestjs/common';
import { PisoRepository } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/repository/piso.repository';

@Injectable()
export class ExistsNroPisoService {
  constructor(private readonly pisoRepository: PisoRepository) {}

  async validar(nro: string): Promise<boolean> {
    const cantidad = await this.pisoRepository.countBy({ nro });
    return cantidad === 0;
  }
}
