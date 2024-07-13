import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiaService } from './dia.service';
import { DiaController } from './dia.controller';
import { Dia } from './entities/dia.entity';
import { Circuito } from 'src/circuito/entities/circuito.entity';
import { PlanDia } from 'src/plan-dia/entities/plan-dia.entity';
import { DiaCircuito } from 'src/dia-circuito/entities/dia-circuito.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Dia, Circuito, PlanDia, DiaCircuito]), 
  ],
  controllers: [DiaController],
  providers: [DiaService],
  exports: [DiaService],
})
export class DiaModule {}