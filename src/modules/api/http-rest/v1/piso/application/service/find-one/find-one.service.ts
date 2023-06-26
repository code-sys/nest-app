import { Injectable } from '@nestjs/common';
import { PisoRepository } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/repository/piso.repository';
import { Piso } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/entity/piso.entity';

@Injectable()
export class FindOneService {
  constructor(private readonly pisoRepository: PisoRepository) {}

  find(id: number): Promise<Piso | null> {
    return this.pisoRepository.findOneBy({ pk_id: id });
  }
}
