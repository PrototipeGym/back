import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Dia } from 'src/dia/entities/dia.entity';
import { Repeticion } from 'src/repeticion/entities/repeticion.entity';

@Entity()
export class DiaRepeticion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Dia, dia => dia.diaRepeticiones)
  dia: Dia;

  @ManyToOne(() => Repeticion, repeticion => repeticion.diaRepeticiones)
  repeticion: Repeticion;
}
