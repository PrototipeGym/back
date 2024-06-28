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
    return `This action returns all dia`;
  }

  findOne(id: string) {
    return `This action returns a #${id} dia`;
  }

  update(id: string, updateDiaDto: UpdateDiaDto) {
    return `This action updates a #${id} dia`;
  }

  remove(id: string) {
    return `This action removes a #${id} dia`;
  }
}
