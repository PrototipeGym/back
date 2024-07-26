import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { RepeticionAccion } from 'src/repeticion-accion/entities/repeticion-accion.entity';
import { DiaRepeticion } from 'src/dia-repeticion/entities/dia-repeticion.entity';

@Entity()
export class Repeticion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  constructor() {
    this.id = uuidv4();
  }

  @Column()
  nombre: string;

  @OneToMany(() => RepeticionAccion, repeticionAccion => repeticionAccion.repeticion)
  repeticionAcciones: RepeticionAccion[];

  @OneToMany(() => DiaRepeticion, diaRepeticion => diaRepeticion.repeticion)
  diaRepeticiones: DiaRepeticion[];
}
