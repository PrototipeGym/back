import { DiaRutina } from "src/dia-rutina/entities/dia-rutina.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';


@Entity()
export class Rutina {

    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    constructor(){
      this.id = uuidv4();
    }
  
    @Column()
    nombre : string;

    @OneToMany(() => DiaRutina, diaRutina => diaRutina.rutina)
    diaRutinas: DiaRutina[];

}
