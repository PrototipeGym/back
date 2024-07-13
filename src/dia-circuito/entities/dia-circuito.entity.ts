
import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Dia } from 'src/dia/entities/dia.entity';
import { Circuito } from 'src/circuito/entities/circuito.entity';

@Entity()
export class DiaCircuito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Dia, dia => dia.diaCircuitos)
  dia: Dia;

  @ManyToOne(() => Circuito, circuito => circuito.diaCircuitos)
  circuito: Circuito;

  @Column()
  series: number;
}