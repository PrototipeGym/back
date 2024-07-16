
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column({ default: false })
  status: boolean;

  @Column({ default: false })
  blocked: boolean;


}
