import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DiaRepeticion } from 'src/dia-repeticion/entities/dia-repeticion.entity';
import { v4 as uuidv4 } from 'uuid';
import { DiaRutina } from 'src/dia-rutina/entities/dia-rutina.entity';

@Entity()
export class Dia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  constructor() {
    this.id = uuidv4();
  }

  @Column()
  nombre: string;

  @OneToMany(() => DiaRepeticion, diaRepeticion => diaRepeticion.dia)
  diaRepeticiones: DiaRepeticion[];

  @OneToMany(() => DiaRutina, diaRutina => diaRutina.dia)
  diaRutinas: DiaRutina[];
}