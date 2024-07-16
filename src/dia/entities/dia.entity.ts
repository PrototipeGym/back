import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Dia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  constructor(){
    this.id = uuidv4();
  }

  @Column()
  nombre : string;


}

