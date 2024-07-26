import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRepeticionDto } from './dto/create-repeticion.dto';
import { UpdateRepeticionDto } from './dto/update-repeticion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repeticion } from './entities/repeticion.entity';
import { RepeticionAccion } from 'src/repeticion-accion/entities/repeticion-accion.entity';
import { Accion } from 'src/accion/entities/accion.entity';

@Injectable()
export class RepeticionService {
  constructor(
    @InjectRepository(Repeticion)
    private repeticionRepository: Repository<Repeticion>,
    @InjectRepository(RepeticionAccion)
    private repeticionAccionRepository: Repository<RepeticionAccion>,
    @InjectRepository(Accion)
    private accionRepository: Repository<Accion>,
  ) {}

  async create(createRepeticionDto: CreateRepeticionDto) {
    return await this.repeticionRepository.save(createRepeticionDto);
  }

  findAll() {
    return this.repeticionRepository.find();
  }

  async findOne(id: string) {
    const repeticion = await this.repeticionRepository.findOne({
      where: { id },
      relations: ['repeticionAcciones', 'repeticionAcciones.accion'],
    });
    if (!repeticion) {
      throw new NotFoundException(`Repetición con id ${id} no encontrada`);
    }
    return repeticion;
  }

  async update(id: string, updateRepeticionDto: UpdateRepeticionDto) {
    const { nombre, accionId } = updateRepeticionDto;

    const repeticion = await this.repeticionRepository.findOne({ where: { id } });
    if (!repeticion) {
      throw new NotFoundException(`Repetición con id ${id} no encontrada`);
    }

    if (nombre) {
      repeticion.nombre = nombre;
    }

    if (accionId) {
      const accion = await this.accionRepository.findOne({ where: { id: accionId } });
      if (!accion) {
        throw new NotFoundException(`Acción con id ${accionId} no encontrada`);
      }

      const repeticionAccion = new RepeticionAccion();
      repeticionAccion.repeticion = repeticion;
      repeticionAccion.accion = accion;

      await this.repeticionAccionRepository.save(repeticionAccion);
    }

    return await this.repeticionRepository.save(repeticion);
  }

  async remove(id: string) {
    const result = await this.repeticionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Repetición con id ${id} no encontrada`);
    }
    return result;
  }

  async getAllRepeticionesWithAcciones(): Promise<Repeticion[]> {
    return this.repeticionRepository.find({
      relations: ['repeticionAcciones', 'repeticionAcciones.accion'],
    });
  }
}
