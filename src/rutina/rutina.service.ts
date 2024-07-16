// rutina.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRutinaDto } from './dto/create-rutina.dto';
import { UpdateRutinaDto } from './dto/update-rutina.dto';
import { Rutina } from './entities/rutina.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DiaRutina } from 'src/dia-rutina/entities/dia-rutina.entity';
import { Dia } from '../dia/entities/dia.entity';

@Injectable()
export class RutinaService {
  constructor(
    @InjectRepository(Rutina)
    private rutinaRepository: Repository<Rutina>,

    @InjectRepository(Dia)
    private diaRepository: Repository<Dia>,

    @InjectRepository(DiaRutina)
    private diaRutinaRepository: Repository<DiaRutina>,
  ) {}

  async create(createRutinaDto: CreateRutinaDto) {
    return await this.rutinaRepository.save(createRutinaDto);
  }

  async findAll() {
    return await this.rutinaRepository.find({ relations: ['diaRutinas'] });
  }

  async findOne(id: string) {
    return await this.rutinaRepository.findOne({ where: { id }, relations: ['diaRutinas'] });
  }

  async update(id: string, updateRutinaDto: UpdateRutinaDto) {
    const { nombre, idDia } = updateRutinaDto;

    const rutina = await this.rutinaRepository.findOne({ where: { id } });
    if (!rutina) {
      throw new NotFoundException(`Rutina con id ${id} no encontrada`);
    }

    if (nombre) {
      rutina.nombre = nombre;
    }

    if (idDia) {
      const dia = await this.diaRepository.findOne({ where: { id: idDia } });
      if (!dia) {
        throw new NotFoundException(`Dia con id ${idDia} no encontrado`);
      }

      let diaRutina = await this.diaRutinaRepository.findOne({
        where: { rutina: { id: rutina.id }, dia: { id: dia.id } },
      });

      if (!diaRutina) {
        diaRutina = new DiaRutina();
        diaRutina.rutina = rutina;
        diaRutina.dia = dia;
        await this.diaRutinaRepository.save(diaRutina);
      }
    }

    return await this.rutinaRepository.save(rutina);
  }

  async remove(id: string) {
    const result = await this.rutinaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Rutina con id ${id} no encontrada`);
    }
    return result;
  }
}
