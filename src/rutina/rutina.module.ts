import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutinaService } from './rutina.service';
import { RutinaController } from './rutina.controller';
import { Rutina } from './entities/rutina.entity';
import { DiaRutina } from 'src/dia-rutina/entities/dia-rutina.entity';
import { Dia } from '../dia/entities/dia.entity'; 
import { UserRutina } from 'src/user-rutina/entities/user-rutina.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rutina, DiaRutina, Dia, UserRutina, User]),
  ],
  controllers: [RutinaController],
  providers: [RutinaService],
})
export class RutinaModule {}
