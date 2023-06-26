import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DisponibleEnum } from '@shared/enum/disponible.enum';
import { DteLclStr } from '@shared/util/date/DteLclStr';

@Entity('grupo_comida')
export class GrupoComida {
  @PrimaryGeneratedColumn({ type: 'integer', unsigned: true })
  public pk_id: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  public nombre: string;

  @Column({ type: 'enum', enum: DisponibleEnum, default: DisponibleEnum.S })
  public disponible: DisponibleEnum;

  @CreateDateColumn({
    type: 'timestamp without time zone',
    transformer: {
      to: () => new Date(),
      from: (dte: Date) => DteLclStr.toEsPe(dte),
    },
  })
  public fecha_creacion: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public fecha_modificacion: string;
}
