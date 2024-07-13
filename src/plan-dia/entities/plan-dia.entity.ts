
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plan } from 'src/plan/entities/plan.entity';
import { Dia } from 'src/dia/entities/dia.entity';

@Entity()
export class PlanDia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Plan, plan => plan.planDias, { onDelete: 'CASCADE' })
  plan: Plan;

  @ManyToOne(() => Dia, dia => dia.planDias, { onDelete: 'CASCADE' })
  dia: Dia;
}
