import { Body, Controller, Post, Patch, HttpCode, Param } from '@nestjs/common';
import { Mesa } from '../../infrastructure/adapter/persistence/typeorm/entity/mesa.entity';
import { CreateDto } from '../../domain/use-case/create.dto';
import { CreateAdapter } from '../../infrastructure/adapter/use-case/create.adapter';
import { UpdateEstadoAdapter } from '../../infrastructure/adapter/use-case/update-estado.adapter';
import { CreateService } from '../service/create/create.service';
import { UpdateEstadoService } from '../service/update-estado/update-estado.service';
import { UpdateEstadoDto } from '../../domain/use-case/update-estado.dto';

@Controller()
export class MesaController {
  constructor(
    private readonly createService: CreateService,
    private readonly updateEstadoService: UpdateEstadoService,
  ) {}

  @Post()
  @HttpCode(201)
  async registrar(@Body() mesaDto: CreateDto): Promise<Mesa> {
    const adapter = await CreateAdapter.new({
      fk_piso: mesaDto.idPiso,
      nro: mesaDto.nro,
      estado: mesaDto.estado,
    });

    return this.createService.create(adapter);
  }

  @Patch(':id/estado')
  @HttpCode(204)
  async actualizarEstado(
    @Param('id') id: number,
    @Body() updateEstadoDto: UpdateEstadoDto,
  ): Promise<void> {
    const adapter: UpdateEstadoAdapter = await UpdateEstadoAdapter.new({
      pk_id: id,
      estado: updateEstadoDto.estado,
    });

    await this.updateEstadoService.update(adapter);
  }
}
