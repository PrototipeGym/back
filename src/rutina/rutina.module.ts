import { Module } from '@nestjs/common';
import { RutinaService } from './rutina.service';
import { RutinaController } from './rutina.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rutina } from './entities/rutina.entity';
import { DiaRutina } from 'src/dia-rutina/entities/dia-rutina.entity';
import { Dia } from '../dia/entities/dia.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Rutina, DiaRutina, Dia]),

  ],
  controllers: [RutinaController],
  providers: [RutinaService],
})
export class RutinaModule {}
