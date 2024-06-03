
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  constructor() {
    this.id = uuidv4();
  }

  @Column()
  firstName: string;

  @Column()
  lastName: string;


  
  @Column({ default: true })
  isActive: boolean;



}
