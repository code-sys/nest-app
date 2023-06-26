import { Injectable } from '@nestjs/common';
import { GrupoComidaRepository } from '../../../infrastructure/adapter/persistence/typeorm/repository/grupo-comida.repository';
import { CreateAdapter } from '../../../infrastructure/adapter/use-case/create.adapter';
import { GrupoComida } from '../../../infrastructure/adapter/persistence/typeorm/entity/grupo-comida.entity';

@Injectable()
export class CreateService {
  constructor(private readonly grupoComidaRepository: GrupoComidaRepository) {}

  create(adapter: CreateAdapter): Promise<GrupoComida> {
    const grupoComida: GrupoComida = this.grupoComidaRepository.create({
      nombre: adapter.nombre,
      disponible: adapter.disponible,
    });

    return this.grupoComidaRepository.save(grupoComida);
  }
}
