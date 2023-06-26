import { Injectable } from '@nestjs/common';
import { GrupoComidaRepository } from '../../../infrastructure/adapter/persistence/typeorm/repository/grupo-comida.repository';

@Injectable()
export class ExistsNombreService {
  constructor(private readonly repository: GrupoComidaRepository) {}

  async validar(nombre: string): Promise<boolean> {
    const grupoComida = await this.repository.findOneBy({ nombre });
    return grupoComida !== null;
  }
}
