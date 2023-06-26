import { Injectable } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { UpdateDisponibleAdapter } from '../../../infrastructure/adapter/use-case/update-disponible.adapter';
import { GrupoComidaRepository } from '../../../infrastructure/adapter/persistence/typeorm/repository/grupo-comida.repository';
import { GrupoComida } from '../../../infrastructure/adapter/persistence/typeorm/entity/grupo-comida.entity';

@Injectable()
export class UpdateDisponibleService {
  constructor(private readonly repository: GrupoComidaRepository) {}

  update(adapter: UpdateDisponibleAdapter): Promise<UpdateResult> {
    const grupoComida: GrupoComida = this.repository.create({
      disponible: adapter.disponible,
    });

    return this.repository.update({ pk_id: adapter.pk_id }, grupoComida);
  }
}
