import {
  ManyToOne,
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DisponibleEnum } from '@shared/enum/disponible.enum';

@Entity('plato')
export class Plato {
  @PrimaryGeneratedColumn({ type: 'integer', unsigned: true })
  public pk_id: number;

  // @JoinColumn({ name: 'fk_grupo_comida' })
  // @ManyToOne(() => Piso, (piso) => piso.mesas)
  // public piso: Piso;

  @Column({ type: 'varchar', length: 80, unique: true })
  public nombre: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  public img: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  public precioVta: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  public precioProduccion: number;

  @Column({ type: 'enum', enum: DisponibleEnum, default: DisponibleEnum.S })
  public disponible: DisponibleEnum;
}
