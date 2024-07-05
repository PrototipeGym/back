import { Injectable } from '@nestjs/common';
import { CreateEjercicioDto } from './dto/create-ejercicio.dto';
import { UpdateEjercicioDto } from './dto/update-ejercicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ejercicio } from './entities/ejercicio.entity';
import { Repository } from 'typeorm';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';

@Injectable()
export class EjercicioService {
  constructor(
    @InjectRepository(Ejercicio)
    private ejercicioRepository: Repository<Ejercicio>,
  ) {}

  async create(createEjercicioDto: CreateEjercicioDto, user: UserActiveInterface) {
    const newEjercicio = this.ejercicioRepository.create({ ...createEjercicioDto, userID: user.id });
    return await this.ejercicioRepository.save(newEjercicio);
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
