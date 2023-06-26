import { Module } from '@nestjs/common';
import { PlatoRepository } from './infrastructure/adapter/persistence/typeorm/repository/plato.repository';

@Module({
  providers: [PlatoRepository],
})
export class PlatoModule {}
