import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiRestModule } from './modules/api/http-rest/v1/api-rest.module';
import { Piso } from './modules/api/http-rest/v1/piso/infrastructure/adapter/persistence/typeorm/entity/piso.entity';
import { apiRoutesV1 } from './modules/api/http-rest/v1/api-rest.routing';
import { ThrottlerModule } from '@nestjs/throttler';
import { Mesa } from './modules/api/http-rest/v1/mesa/infrastructure/adapter/persistence/typeorm/entity/mesa.entity';
import { GrupoComida } from './modules/api/http-rest/v1/grupo-comida/infrastructure/adapter/persistence/typeorm/entity/grupo-comida.entity';

@Module({
  imports: [
    ApiRestModule,
    RouterModule.register([...apiRoutesV1]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'campomar',
      entities: [Piso, Mesa, GrupoComida],
      synchronize: false,
      logging: true, // TODO sólo desarrollo
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'campomar',
    //   entities: [Piso, Mesa, GrupoComida],
    //   synchronize: false,
    // }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 1,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
