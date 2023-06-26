import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Plato } from '../entity/plato.entity';

@Injectable()
export class PlatoRepository extends Repository<Plato> {
  constructor(private dataSource: DataSource) {
    super(Plato, dataSource.createEntityManager());
  }
}
