import { Module } from '@nestjs/common';
import { DiaService } from './dia.service';
import { DiaController } from './dia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dia } from './entities/dia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dia])],
  controllers: [DiaController],
  providers: [DiaService],
  exports: [DiaService], 
})
export class DiaModule {}
