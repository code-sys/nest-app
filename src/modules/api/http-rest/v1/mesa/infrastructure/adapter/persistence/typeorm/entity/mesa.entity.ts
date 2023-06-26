import {
  ManyToOne,
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EstadoEnum } from '../../../../../domain/enum/estado.enum';
import { Piso } from 'src/modules/api/http-rest/v1/piso/infrastructure/adapter/persistence/typeorm/entity/piso.entity';

@Entity('mesa')
export class Mesa {
  @PrimaryGeneratedColumn({ type: 'integer', unsigned: true })
  public pk_id: number;

  @JoinColumn({ name: 'fk_piso' })
  @ManyToOne(() => Piso, (piso) => piso.mesas)
  public piso: Piso;

  @Column({ type: 'char', length: 1, unique: true })
  public nro: string;

  @Column({ type: 'enum', enum: EstadoEnum, default: EstadoEnum.Libre })
  public estado: EstadoEnum;
}
