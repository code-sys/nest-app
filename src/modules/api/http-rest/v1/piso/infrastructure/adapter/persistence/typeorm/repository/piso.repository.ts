import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Piso } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/entity/piso.entity';

@Injectable()
export class PisoRepository extends Repository<Piso> {
  constructor(private dataSource: DataSource) {
    super(Piso, dataSource.createEntityManager());
  }
}
