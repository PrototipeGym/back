
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Accion } from 'src/accion/entities/accion.entity';
import { Repeticion } from 'src/repeticion/entities/repeticion.entity';

@Entity()
export class RepeticionAccion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Repeticion, repeticion => repeticion.repeticionAcciones)
  repeticion: Repeticion;

  @ManyToOne(() => Accion, accion => accion.repeticionAcciones)
  accion: Accion;
}
