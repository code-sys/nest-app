import { Routes } from '@nestjs/core';
import { PisoModule } from './piso/piso.module';
import { ApiRestModule } from './api-rest.module';
import { MesaModule } from './mesa/mesa.module';
import { PlatoModule } from './plato/plato.module';
import { GrupoComidaModule } from './grupo-comida/grupo-comida.module';

export const apiRoutesV1: Routes = [
  {
    path: 'api/v1',
    module: ApiRestModule,
    children: [
      {
        path: 'pisos',
        module: PisoModule,
      },
      {
        path: 'mesas',
        module: MesaModule,
      },
      {
        path: 'platos',
        module: PlatoModule,
      },
      {
        path: 'grupo-comida',
        module: GrupoComidaModule,
      },
    ],
  },
];
