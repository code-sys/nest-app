import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EstadoEnum } from '@api/v1/piso/domain/enum/estado.enum';
import { Mesa } from 'src/modules/api/http-rest/v1/mesa/infrastructure/adapter/persistence/typeorm/entity/mesa.entity';

@Entity('piso')
export class Piso {
  @PrimaryGeneratedColumn({ type: 'integer', unsigned: true })
  public pk_id: number;

  @Column({ type: 'char', length: 1, unique: true })
  public nro: string;

  @Column({ type: 'enum', enum: EstadoEnum, default: EstadoEnum.Disponible })
  public estado: EstadoEnum;

  // @OneToMany(() => Mesa, (mesa) => mesa.pk_id)
  @OneToMany(() => Mesa, (mesa) => mesa.piso)
  public mesas: Mesa[];
}
