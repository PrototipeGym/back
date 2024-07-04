import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { Dia } from 'src/dia/entities/dia.entity';
import { DiaModule } from 'src/dia/dia.module';
import { CircuitoModule } from 'src/circuito/circuito.module';
import { Circuito } from 'src/circuito/entities/circuito.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Plan, Dia, Circuito]),
    DiaModule,
    CircuitoModule,
  ],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}
