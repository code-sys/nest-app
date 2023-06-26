import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Piso } from '@api/v1/piso/infrastructure/adapter/persistence/typeorm/entity/piso.entity';
import { UpdateEstadoDto } from '@api/v1/piso/domain/use-case/update-estado.dto';
import { UpdateEstadoAdapter } from '@api/v1/piso/infrastructure/adapter/use-case/update-estado.adapter';
import { CreateAdapter } from '@api/v1/piso/infrastructure/adapter/use-case/create.adapter';
import { CreateDto } from '@api/v1/piso/domain/use-case/create.dto';
import { CreateService } from '@api/v1/piso/application/service/create/create.service';
import { RemoveService } from '@api/v1/piso/application/service/remove/remove.service';
import { UpdateEstadoService } from '@api/v1/piso/application/service/update-estado/update-estado.service';

@Controller()
export class PisoController {
  constructor(
    private readonly createService: CreateService,
    private readonly removeService: RemoveService,
    private readonly updateEstadoService: UpdateEstadoService,
  ) {}

  // @Get()
  // listar(): Promise<Piso[]> {
  //   return this.pisoService.find();
  // }

  @Post()
  @HttpCode(201)
  async registrar(@Body() createDto: CreateDto): Promise<Piso> {
    const adapter: CreateAdapter = await CreateAdapter.new({
      nro: createDto.nro,
      estado: createDto.estado,
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
