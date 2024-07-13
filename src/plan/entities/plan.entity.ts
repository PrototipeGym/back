
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlanDia } from 'src/plan-dia/entities/plan-dia.entity';
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

  @OneToMany(() => PlanDia, planDia => planDia.plan)
  planDias: PlanDia[];
}
