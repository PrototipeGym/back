import { Circuito } from "src/circuito/entities/circuito.entity";
import { Plan } from "src/plan/entities/plan.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Dia {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    circuito: any;

    constructor(){
        this.id = uuidv4();
    }

    @Column()
    nombre : string

    
    @ManyToOne(() => Plan, plan => plan.dias) 
    plan: Plan;


    @OneToMany(() => Circuito, circuito => circuito.dia, { eager: true })
    circuitos: Circuito[];


}


