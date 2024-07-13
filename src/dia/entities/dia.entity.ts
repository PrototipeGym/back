import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlanDia } from 'src/plan-dia/entities/plan-dia.entity';
import { DiaCircuito } from 'src/dia-circuito/entities/dia-circuito.entity';
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

  @OneToMany(() => PlanDia, planDia => planDia.dia)
  planDias: PlanDia[];

  @OneToMany(() => DiaCircuito, diaCircuito => diaCircuito.dia)
  diaCircuitos: DiaCircuito[];
}

