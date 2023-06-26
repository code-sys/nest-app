import { Injectable } from '@nestjs/common';
import { GrupoComidaRepository } from '../../../infrastructure/adapter/persistence/typeorm/repository/grupo-comida.repository';

@Injectable()
export class ExistsGrupoComidaService {
  constructor(private readonly grupoComidaRepository: GrupoComidaRepository) {}

  async validar(id: number): Promise<boolean> {
    const grupoComida = await this.grupoComidaRepository.findOneBy({
      pk_id: id,
    });

    return grupoComida !== null;
  }
}
