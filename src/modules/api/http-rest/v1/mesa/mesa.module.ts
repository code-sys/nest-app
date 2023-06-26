import { Module } from '@nestjs/common';
import { MesaController } from './application/controller/mesa.controller';
import { PisoExisteConstraint } from '../piso/domain/validation-rules/piso-existe.rule';
import { NroMesaNoRegistradoEnPisoConstraint } from './domain/validation-rules/nro-mesa-no-registrado-en-piso.rule';
import { PisoRepository } from '../piso/infrastructure/adapter/persistence/typeorm/repository/piso.repository';
import { MesaRepository } from './infrastructure/adapter/persistence/typeorm/repository/mesa.repository';
import { ExistsNroMesaEnPisoService } from './domain/service/exists-nro-mesa/exists-nro-mesa.service';
import { ExistsPisoService } from '../piso/domain/service/exists-piso/exists-piso.service';
import { CreateService } from './application/service/create/create.service';
import { ExistsMesaService } from './domain/service/exists-piso/exists-mesa.service';
import { MesaExisteConstraint } from './domain/validation-rules/mesa-existe.rule';
import { UpdateEstadoService } from './application/service/update-estado/update-estado.service';

@Module({
  controllers: [MesaController],
  providers: [
    CreateService,
    UpdateEstadoService,

    // Validaciones
    ExistsNroMesaEnPisoService,
    ExistsMesaService,
    ExistsPisoService,
    NroMesaNoRegistradoEnPisoConstraint,
    MesaExisteConstraint,
    PisoExisteConstraint,

    MesaRepository,
    PisoRepository,
  ],
})
export class MesaModule {}
