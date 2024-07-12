
import { Injectable } from '@nestjs/common';
import { CreateCircuitoDto } from './dto/create-circuito.dto';
import { UpdateCircuitoDto } from './dto/update-circuito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Circuito } from './entities/circuito.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CircuitoService {


  constructor(
    @InjectRepository(Circuito)
    private circuitoRepository: Repository<Circuito>,
  ){}

  async create(createCircuitoDto: CreateCircuitoDto) {
    return await this.circuitoRepository.save(createCircuitoDto);
  }

  findAll() {
    return `This action returns all circuito`;
  }

  findOne(id: string) {
    return `This action returns a #${id} circuito`;
  }

  update(id: string, updateCircuitoDto: UpdateCircuitoDto) {
    return `This action updates a #${id} circuito`;
  }

  remove(id: string) {
    return `This action removes a #${id} circuito`;
  }
}
