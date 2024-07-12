import { Module } from '@nestjs/common';
import { CircuitoService } from './circuito.service';
import { CircuitoController } from './circuito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Circuito } from './entities/circuito.entity';
import { Ejercicio } from 'src/ejercicio/entities/ejercicio.entity';
import { EjercicioModule } from 'src/ejercicio/ejercicio.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Circuito, Ejercicio]), 
    EjercicioModule, 
  ],
  controllers: [CircuitoController],
  providers: [CircuitoService],
  exports: [CircuitoService], 
})
export class CircuitoModule {}


// import { Module } from '@nestjs/common';
// import { CircuitoService } from './circuito.service';
// import { CircuitoController } from './circuito.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Circuito } from './entities/circuito.entity';


// @Module({
// imports: [
//   TypeOrmModule.forFeature([Circuito]),
// ],
// controllers: [CircuitoController],
// providers: [CircuitoService],
// exports: [CircuitoService], 
// })
// export class CircuitoModule {}

