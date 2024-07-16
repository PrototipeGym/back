import { Injectable } from '@nestjs/common';
import { CreateEjercicioDto } from './dto/create-ejercicio.dto';
import { UpdateEjercicioDto } from './dto/update-ejercicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ejercicio } from './entities/ejercicio.entity';
import { Repository } from 'typeorm';


@Injectable()
export class EjercicioService {
  constructor(
    @InjectRepository(Ejercicio)
    private ejercicioRepository: Repository<Ejercicio>,
  ) {}

  async create(createEjercicioDto: CreateEjercicioDto) {
    return await this.ejercicioRepository.save(createEjercicioDto);
  }

  async findAll() {
    return `This action returns all ejercicio`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} ejercicio`;
  }

  async update(id: number, updateEjercicioDto: UpdateEjercicioDto) {
    return `This action updates a #${id} ejercicio`;
  }

  async remove(id: number) {
    return `This action removes a #${id} ejercicio`;
  }
}

