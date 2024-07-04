
import { Dia } from "src/dia/entities/dia.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({ default: false })
    blocked: boolean;

    @OneToMany(() => Dia, dia => dia.plan, { eager: true }) 
    dias: Dia[];

    @ManyToOne(() => User)
    @JoinColumn({name : 'userID', referencedColumnName: 'id',})
    user : User;
    
    @Column()
    userID: string;

}

