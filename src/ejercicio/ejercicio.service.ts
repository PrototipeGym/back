import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.ejercicioRepository.find();
  }

  async findOne(id: string) {
    const ejercicio = await this.ejercicioRepository.findOneBy({ id });
    if (!ejercicio) {
      throw new NotFoundException(`Ejercicio con ID ${id} no encontrado`);
    }
    return ejercicio;
  }

  async update(id: string, updateEjercicioDto: UpdateEjercicioDto) {
    await this.ejercicioRepository.update(id, updateEjercicioDto);
    const updatedEjercicio = await this.ejercicioRepository.findOneBy({ id });
    if (!updatedEjercicio) {
      throw new NotFoundException(`Ejercicio con ID ${id} no encontrado`);
    }
    return updatedEjercicio;
  }

  async remove(id: string) {
    const ejercicio = await this.ejercicioRepository.findOneBy({ id });
    if (!ejercicio) {
      throw new NotFoundException(`Ejercicio con ID ${id} no encontrado`);
    }
    await this.ejercicioRepository.remove(ejercicio);
    return { message: `Ejercicio con ID ${id} eliminado` };
  }
}

