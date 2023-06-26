import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Mesa } from '../entity/mesa.entity';

@Injectable()
export class MesaRepository extends Repository<Mesa> {
  constructor(private dataSource: DataSource) {
    super(Mesa, dataSource.createEntityManager());
  }
}
