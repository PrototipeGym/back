
import { Dia } from "src/dia/entities/dia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Plan {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    constructor(){
        this.id = uuidv4();
    }

    @Column()
    nombre : string;

    @Column()
    descripcion: string;

    @Column({ default: true })
    delete: boolean;

    @OneToMany(() => Dia, dia => dia.plan, { eager: true }) 
    dias: Dia[];


}



