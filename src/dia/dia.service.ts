// dia.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDiaDto } from './dto/create-dia.dto';
import { UpdateDiaDto } from './dto/update-dia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dia } from './entities/dia.entity';
import { Repository } from 'typeorm';
import { Repeticion } from '../repeticion/entities/repeticion.entity';
import { DiaRepeticion } from 'src/dia-repeticion/entities/dia-repeticion.entity';

@Injectable()
export class DiaService {
  constructor(
    @InjectRepository(Dia)
    private diaRepository: Repository<Dia>,
    @InjectRepository(DiaRepeticion)
    private diaRepeticionRepository: Repository<DiaRepeticion>,
    @InjectRepository(Repeticion)
    private repeticionRepository: Repository<Repeticion>,
  ) {}

  async create(createDiaDto: CreateDiaDto) {
    return await this.diaRepository.save(createDiaDto);
  }

  find() {
    return this.diaRepository.find();
  }

  findOne(id: string) {
    return this.diaRepository.findOne({ where: { id } });
  }

  async update(id: string, updateDiaDto: UpdateDiaDto) {
    const { nombre, repeticionId } = updateDiaDto;

    if (!nombre && !repeticionId) {
      throw new NotFoundException('No hay campos para actualizar');
    }

    const dia = await this.diaRepository.findOneBy({ id });
    if (!dia) {
      throw new NotFoundException(`Día con id ${id} no encontrado`);
    }

    if (nombre) {
      dia.nombre = nombre;
    }

    if (repeticionId) {
      const repeticion = await this.repeticionRepository.findOneBy({ id: repeticionId });
      if (!repeticion) {
        throw new NotFoundException(`Repetición con id ${repeticionId} no encontrada`);
      }

      let diaRepeticion = await this.diaRepeticionRepository.findOne({
        where: { dia: { id: dia.id }, repeticion: { id: repeticion.id } },
      });

      if (!diaRepeticion) {
        diaRepeticion = new DiaRepeticion();
        diaRepeticion.dia = dia;
        diaRepeticion.repeticion = repeticion;
        await this.diaRepeticionRepository.save(diaRepeticion);
      }
    }

    return await this.diaRepository.save(dia);
  }

  async remove(id: string) {
    const result = await this.diaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Día con id ${id} no encontrado`);
    }
    return result;
  }
}
