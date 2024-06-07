
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
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  dni: string;

  @Column()
  edad: string;

  @Column()
  peso: string;

  @Column()
  altura: string;

  @Column()
  telefono: string;

  @Column()
  usuario: string;

  @Column()
  contrasena: string;

  // @Column()
  // id_Rol: string;

  // @Column()
  // id_PlanServicio: string;
  

  @Column({ default: true })
  isActive: boolean;



}
