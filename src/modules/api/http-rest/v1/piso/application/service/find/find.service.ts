import { Injectable } from '@nestjs/common';
import { PisoRepository } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/repository/piso.repository';
import { Piso } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/entity/piso.entity';

@Injectable()
export class FindService {
  constructor(private readonly pisoRepository: PisoRepository) {}

  find(): Promise<Piso[]> {
    return this.pisoRepository.find();
  }
}
