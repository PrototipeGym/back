
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccionDto } from './dto/create-accion.dto';
import { UpdateAccionDto } from './dto/update-accion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Accion } from './entities/accion.entity';
import { Ejercicio } from 'src/ejercicio/entities/ejercicio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccionService {
  constructor(
    @InjectRepository(Accion)
    private accionRepository: Repository<Accion>,
    @InjectRepository(Ejercicio)
    private ejercicioRepository: Repository<Ejercicio>,
  ) {}
  
  async create(createAccionDto: CreateAccionDto) {
    const ejercicio = await this.ejercicioRepository.findOneBy({ id: createAccionDto.ejercicioId });
    if (!ejercicio) {
      throw new NotFoundException(`Ejercicio with id ${createAccionDto.ejercicioId} not found`);
    }
    const accion = this.accionRepository.create(createAccionDto);
    accion.ejercicio = ejercicio;
    return await this.accionRepository.save(accion);
  }

  async findAll() {
    return this.accionRepository.find({ relations: ['ejercicio'] });
  }

  async findOne(id: string) {
    return this.accionRepository.findOne({ where: { id }, relations: ['ejercicio'] });
  }

  async update(id: string, updateAccionDto: UpdateAccionDto) {
    const result = await this.accionRepository.update(id, updateAccionDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Accion with id ${id} not found`);
    }
    return this.findOne(id);
  }

  async remove(id: string) {
    const result = await this.accionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Accion with id ${id} not found`);
    }
    return result;
  }
}


