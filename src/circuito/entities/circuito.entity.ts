import { Dia } from "src/dia/entities/dia.entity";
import { Plan } from "src/plan/entities/plan.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Circuito {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    static dia: any;

    constructor(){
        this.id = uuidv4();
    }

    @Column()
    nombre : string

    @Column()
    series : string

    // @ManyToOne(() => Dia, dia => dia.circuitos) 
    // dia: Dia;

    @ManyToOne(() => Dia, dia => dia.circuitos)
    @JoinColumn({ name: 'diaID', referencedColumnName: 'id' })
    dia: Dia;

    @Column()
    diaID: number;

}
