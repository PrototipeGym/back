import { Module } from '@nestjs/common';
import { EjercicioService } from './ejercicio.service';
import { EjercicioController } from './ejercicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ejercicio } from './entities/ejercicio.entity'; 


@Module({
  imports: [
    TypeOrmModule.forFeature([Ejercicio]), 
  ],
  controllers: [EjercicioController],
  providers: [EjercicioService],
})
export class EjercicioModule {}
