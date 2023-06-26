import { Body, Controller, Post, Patch, HttpCode, Param } from '@nestjs/common';
import { CreateDto } from '../../domain/use-case/create.dto';
import { CreateAdapter } from '../../infrastructure/adapter/use-case/create.adapter';
import { UpdateDisponibleAdapter } from '../../infrastructure/adapter/use-case/update-disponible.adapter';
import { CreateService } from '../service/create/create.service';
import { UpdateDisponibleService } from '../service/update-disponible/update-disponible.service';
import { UpdateDisponibleDto } from '../../domain/use-case/update-disponible.dto';
import { GrupoComida } from '../../infrastructure/adapter/persistence/typeorm/entity/grupo-comida.entity';

@Controller()
export class GrupoComidaController {
  constructor(
    private readonly createService: CreateService,
    private readonly updateDisponibleService: UpdateDisponibleService,
  ) {}

  @Post()
  @HttpCode(201)
  async registrar(@Body() dto: CreateDto): Promise<GrupoComida> {
    const adapter = await CreateAdapter.new({
      nombre: dto.nombre,
      disponible: dto.disponible,
    });

    return this.createService.create(adapter);
  }

  @Patch(':id/disponible')
  @HttpCode(204)
  async actualizarDisponible(
    @Param('id') id: number,
    @Body() updateDisponibleDto: UpdateDisponibleDto,
  ): Promise<void> {
    const adapter: UpdateDisponibleAdapter = await UpdateDisponibleAdapter.new({
      pk_id: id,
      disponible: updateDisponibleDto.disponible,
    });

    await this.updateDisponibleService.update(adapter);
  }
}
