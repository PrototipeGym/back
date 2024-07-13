import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { Plan } from './entities/plan.entity';
import { PlanDia } from 'src/plan-dia/entities/plan-dia.entity';
import { Dia } from 'src/dia/entities/dia.entity';
import { DiaCircuito } from 'src/dia-circuito/entities/dia-circuito.entity';
import { Circuito } from 'src/circuito/entities/circuito.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Plan, PlanDia, Dia, DiaCircuito, Circuito]),
  ],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}