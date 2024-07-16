import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { Plan } from './entities/plan.entity';
import { Dia } from 'src/dia/entities/dia.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Plan, Dia]),
  ],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}