import { Module } from '@nestjs/common';
import { PisoController } from './application/controller/piso.controller';
import { PisoRepository } from './infrastructure/adapter/persistence/typeorm/repository/piso.repository';
import { NroPisoNoRegistradoConstraint } from './domain/validation-rules/nro-piso-no-registrado.rule';
import { PisoExisteConstraint } from './domain/validation-rules/piso-existe.rule';
import { CreateService } from './application/service/create/create.service';
import { RemoveService } from './application/service/remove/remove.service';
import { UpdateEstadoService } from './application/service/update-estado/update-estado.service';
import { ExistsNroPisoService } from './domain/service/exists-nro-piso/exists-nro-piso.service';
import { ExistsPisoService } from './domain/service/exists-piso/exists-piso.service';
import { FindService } from './application/service/find/find.service';
import { FindOneService } from './application/service/find-one/find-one.service';

@Module({
  controllers: [PisoController],
  providers: [
    RemoveService,
    CreateService,
    UpdateEstadoService,
    FindService,
    FindOneService,

    // Validaciones
    ExistsNroPisoService,
    ExistsPisoService,
    NroPisoNoRegistradoConstraint,
    PisoExisteConstraint,

    PisoRepository,
  ],
})
export class PisoModule {}
