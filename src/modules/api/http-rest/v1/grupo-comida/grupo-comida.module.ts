import { Module } from '@nestjs/common';
import { GrupoComidaRepository } from './infrastructure/adapter/persistence/typeorm/repository/grupo-comida.repository';
import { CreateService } from './application/service/create/create.service';
import { UpdateDisponibleService } from './application/service/update-disponible/update-disponible.service';
import { GrupoComidaController } from './application/controller/grupo-comida.controller';
import { NombreNoExisteConstraint } from './domain/validation-rules/nombre-no-existe.rule';
import { ExistsNombreService } from './domain/service/exists-nombre/exists-nombre.service';
import { GrupoComidaExisteConstraint } from './domain/validation-rules/grupo-comida-existe.rule';
import { ExistsGrupoComidaService } from './domain/service/exists-grupo-comida/exists-grupo-comida.service';

@Module({
  controllers: [GrupoComidaController],
  providers: [
    CreateService,
    UpdateDisponibleService,

    // Validaciones
    ExistsNombreService,
    ExistsGrupoComidaService,
    NombreNoExisteConstraint,
    GrupoComidaExisteConstraint,

    GrupoComidaRepository,
  ],
})
export class GrupoComidaModule {}
