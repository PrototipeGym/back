import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccionService } from './accion.service';
import { AccionController } from './accion.controller';
import { Accion } from './entities/accion.entity'; 
import { Ejercicio } from 'src/ejercicio/entities/ejercicio.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Accion, Ejercicio]),
  ],
  controllers: [AccionController],
  providers: [AccionService],
})
export class AccionModule {}
