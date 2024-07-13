
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DiaCircuito } from 'src/dia-circuito/entities/dia-circuito.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Circuito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  constructor(){
    this.id = uuidv4();
  }

  @Column()
  nombre : string;

  @OneToMany(() => DiaCircuito, diaCircuito => diaCircuito.circuito)
  diaCircuitos: DiaCircuito[];
}
