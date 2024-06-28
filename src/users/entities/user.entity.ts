
import { Plan } from 'src/plan/entities/plan.entity';
import { Role } from '../../common/enums/role.enum';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
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

  @Column({select: false})
  contrasena: string;

  @Column({type:'enum', default: Role.USER, enum: Role})
  role: string;

  // @Column()
  // id_PlanServicio: string;
  

  @Column({ default: true })
  isActive: boolean;


  // @ManyToMany(() => Plan, (plan) => plan.users)
  // plans: Plan[];


}
