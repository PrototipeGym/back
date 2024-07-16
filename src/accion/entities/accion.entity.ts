
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Ejercicio } from "src/ejercicio/entities/ejercicio.entity";
import { RepeticionAccion } from "src/repeticion-accion/entities/repeticion-accion.entity";

@Entity()
export class Accion {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    constructor(){
        this.id = uuidv4()
    }

    @Column()
    series: number;

    @Column()
    kg: number;

    @ManyToOne(() => Ejercicio, ejercicio => ejercicio.acciones)
    ejercicio: Ejercicio;

    @Column()
    ejercicioId: string;

    @OneToMany(() => RepeticionAccion, repeticionAccion => repeticionAccion.accion)
    repeticionAcciones: RepeticionAccion[];
}
