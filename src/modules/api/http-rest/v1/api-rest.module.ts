import { Module } from '@nestjs/common';
import { PisoModule } from './piso/piso.module';
import { MesaModule } from './mesa/mesa.module';
import { PlatoModule } from './plato/plato.module';
import { GrupoComidaModule } from './grupo-comida/grupo-comida.module';

@Module({
  imports: [PisoModule, MesaModule, PlatoModule, GrupoComidaModule],
})
export class ApiRestModule {}
