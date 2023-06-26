import { Injectable } from '@nestjs/common';
import { Not } from 'typeorm';
import { MesaRepository } from '../../../infrastructure/adapter/persistence/typeorm/repository/mesa.repository';

@Injectable()
export class ExistsNroMesaEnPisoService {
  constructor(private readonly mesaRepository: MesaRepository) {}

  async validar(nro: string, idPiso): Promise<boolean> {
    const cantidad = await this.mesaRepository.count({
      relations: {
        piso: true,
      },
      where: {
        nro,
        piso: {
          pk_id: idPiso,
        },
      },
    });

    return cantidad > 0;
  }
}
