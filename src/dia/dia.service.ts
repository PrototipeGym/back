
import { Injectable } from '@nestjs/common';
import { CreateDiaDto } from './dto/create-dia.dto';
import { UpdateDiaDto } from './dto/update-dia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dia } from './entities/dia.entity';
import { Repository } from 'typeorm';


@Injectable()
export class DiaService {
  constructor(
    @InjectRepository(Dia)
    private diaRepository: Repository<Dia>,

  ){}

  async create(createDiaDto: CreateDiaDto) {
    return await this.diaRepository.save(createDiaDto);
  }

  findAll() {
    return this.diaRepository.find({ relations: ['diaCircuitos', 'diaCircuitos.circuito'] });
  }

  findOne(id: string) {
    return this.diaRepository.findOne({ where: { id }, relations: ['diaCircuitos', 'diaCircuitos.circuito'] });
  }

  update(id: string, updateDiaDto: UpdateDiaDto) {
    return `This action updates a #${id} dia`;
  }

  remove(id: string) {
    return this.diaRepository.delete(id);
  }
}
