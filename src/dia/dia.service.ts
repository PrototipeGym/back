
import { Injectable } from '@nestjs/common';
import { CreateDiaDto } from './dto/create-dia.dto';
import { UpdateDiaDto } from './dto/update-dia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dia } from './entities/dia.entity';
import { Repository } from 'typeorm';
import { Circuito } from 'src/circuito/entities/circuito.entity';
import { DiaCircuito } from 'src/dia-circuito/entities/dia-circuito.entity';

@Injectable()
export class DiaService {
  constructor(
    @InjectRepository(Dia)
    private diaRepository: Repository<Dia>,
    @InjectRepository(Circuito)
    private circuitoRepository: Repository<Circuito>,
    @InjectRepository(DiaCircuito)
    private diaCircuitoRepository: Repository<DiaCircuito>,
  ){}

  async create(createDiaDto: CreateDiaDto) {
    const { circuitos, ...diaData } = createDiaDto;
    const dia = this.diaRepository.create(diaData);
    await this.diaRepository.save(dia);

    if (circuitos && circuitos.length > 0) {
      for (const circuitoDto of circuitos) {
        const { series, ...circuitoData } = circuitoDto;
        const circuito = this.circuitoRepository.create(circuitoData);
        await this.circuitoRepository.save(circuito);

        const diaCircuito = this.diaCircuitoRepository.create({
          dia,
          circuito,
          series,
        });
        await this.diaCircuitoRepository.save(diaCircuito);
      }
    }

    return dia;
  }

  findAll() {
    return this.diaRepository.find({ relations: ['diaCircuitos', 'diaCircuitos.circuito'] });
  }

  findOne(id: string) {
    return this.diaRepository.findOne({ where: { id }, relations: ['diaCircuitos', 'diaCircuitos.circuito'] });
  }

  update(id: string, updateDiaDto: UpdateDiaDto) {
    return `This action updates a #${id} dia`;
  }

  remove(id: string) {
    return this.diaRepository.delete(id);
  }
}
