import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiaService } from './dia.service';
import { DiaController } from './dia.controller';
import { Dia } from './entities/dia.entity';



@Module({
  imports: [
    TypeOrmModule.forFeature([Dia]), 
  ],
  controllers: [DiaController],
  providers: [DiaService],
  exports: [DiaService],
})
export class DiaModule {}