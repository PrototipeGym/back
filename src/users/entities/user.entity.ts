
import { Role } from '../../common/enums/role.enum';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { UserRutina } from 'src/user-rutina/entities/user-rutina.entity';

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
  genero: string;

  @Column()
  telefono: string;

  @Column()
  usuario: string;

  @Column({select: false})
  contrasena: string;

  @Column({type:'enum', default: Role.USER, enum: Role})
  role: string;
  
  // @Column()
  // fecha_registro: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => UserRutina, userRutina => userRutina.user)
  userRutinas: UserRutina[];


}
