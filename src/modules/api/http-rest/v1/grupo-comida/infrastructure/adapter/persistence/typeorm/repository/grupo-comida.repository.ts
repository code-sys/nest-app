import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { GrupoComida } from '../entity/grupo-comida.entity';

@Injectable()
export class GrupoComidaRepository extends Repository<GrupoComida> {
  constructor(private dataSource: DataSource) {
    super(GrupoComida, dataSource.createEntityManager());
  }
}
