import { Injectable } from '@nestjs/common';
import { PisoRepository } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/repository/piso.repository';

@Injectable()
export class RemoveService {
  constructor(private readonly pisoRepository: PisoRepository) {}

  async remove(id: number): Promise<void> {
    await this.pisoRepository.delete(id);
  }
}
