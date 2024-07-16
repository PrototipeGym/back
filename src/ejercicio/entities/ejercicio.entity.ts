// ejercicio.entity.ts
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Accion } from "src/accion/entities/accion.entity";

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
    descripcion: string;

    @OneToMany(() => Accion, accion => accion.ejercicio)
    acciones: Accion[];
}


// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// import { v4 as uuidv4 } from 'uuid';

// @Entity()
// export class Ejercicio {

//     @PrimaryGeneratedColumn('uuid')
//     id:string;

//     constructor(){
//         this.id = uuidv4()
//     }

//     @Column()
//     nombre: string;

//     @Column()
//     descripcion: string;

// }
