import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiaService } from './dia.service';
import { DiaController } from './dia.controller';
import { Dia } from './entities/dia.entity';
import { DiaRepeticion } from 'src/dia-repeticion/entities/dia-repeticion.entity';
import { Repeticion } from '../repeticion/entities/repeticion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dia, DiaRepeticion, Repeticion]),
  ],
  controllers: [DiaController],
  providers: [DiaService],
  exports: [DiaService],
})
export class DiaModule {}
