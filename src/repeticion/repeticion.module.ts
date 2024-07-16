
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepeticionService } from './repeticion.service';
import { RepeticionController } from './repeticion.controller';
import { Repeticion } from './entities/repeticion.entity';
import { Accion } from 'src/accion/entities/accion.entity';
import { RepeticionAccion } from 'src/repeticion-accion/entities/repeticion-accion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Repeticion, Accion, RepeticionAccion]),
  ],
  controllers: [RepeticionController],
  providers: [RepeticionService],
})
export class RepeticionModule {}

