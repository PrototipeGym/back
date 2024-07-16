import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRepeticionDto } from './dto/create-repeticion.dto';
import { UpdateRepeticionDto } from './dto/update-repeticion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repeticion } from './entities/repeticion.entity';
import { Accion } from 'src/accion/entities/accion.entity';
import { RepeticionAccion } from 'src/repeticion-accion/entities/repeticion-accion.entity';

@Injectable()
export class RepeticionService {

  constructor(
    @InjectRepository(Repeticion)
    private repeticionRepository: Repository<Repeticion>,
    @InjectRepository(Accion)
    private accionRepository: Repository<Accion>,
    @InjectRepository(RepeticionAccion)
    private repeticionAccionRepository: Repository<RepeticionAccion>,
  ) {}

  async create(createRepeticionDto: CreateRepeticionDto) {
    return await this.repeticionRepository.save(createRepeticionDto);
  }

  findAll() {
    return this.repeticionRepository.find({ relations: ['repeticionAcciones'] });
  }

  findOne(id: string) {
    return this.repeticionRepository.findOne({ where: { id }, relations: ['repeticionAcciones'] });
  }

  async update(id: string, updateRepeticionDto: UpdateRepeticionDto) {
    const { nombre, accionId } = updateRepeticionDto;

    if (!nombre && !accionId) {
      throw new NotFoundException('No hay campos para actualizar');
    }

    const repeticion = await this.repeticionRepository.findOneBy({ id });
    if (!repeticion) {
      throw new NotFoundException(`Repeticion con id ${id} no encontrada`);
    }

    if (nombre) {
      repeticion.nombre = nombre;
    }

    if (accionId) {
      const accion = await this.accionRepository.findOneBy({ id: accionId });
      if (!accion) {
        throw new NotFoundException(`Accion con id ${accionId} no encontrada`);
      }

      let repeticionAccion = await this.repeticionAccionRepository.findOne({
        where: { repeticion: { id: repeticion.id }, accion: { id: accion.id } },
      });

      if (!repeticionAccion) {
        repeticionAccion = new RepeticionAccion();
        repeticionAccion.repeticion = repeticion;
        repeticionAccion.accion = accion;
        await this.repeticionAccionRepository.save(repeticionAccion);
      }
    }

    return await this.repeticionRepository.save(repeticion);
  }

  async remove(id: string) {
    const result = await this.repeticionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Repeticion con id ${id} no encontrada`);
    }
    return result;
  }
}
