import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Ejercicio {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    constructor(){
        this.id = uuidv4()
    }

    @Column()
    nombre: string;

    @Column()
    kilos: number;

    @Column({default: true})
    precargado: boolean;

}
