import { Module } from '@nestjs/common';
import { DiaService } from './dia.service';
import { DiaController } from './dia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dia } from './entities/dia.entity';
import { Circuito } from 'src/circuito/entities/circuito.entity';
import { CircuitoModule } from 'src/circuito/circuito.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dia, Circuito]),
    CircuitoModule,
  ],
  controllers: [DiaController],
  providers: [DiaService],
  exports: [DiaService], 
})
export class DiaModule {}
