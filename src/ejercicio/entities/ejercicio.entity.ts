import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(() => User)
    @JoinColumn({name : 'userID', referencedColumnName: 'id',})
    user : User;
    
    @Column()
    userID: string;

}
