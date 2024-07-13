import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { Repository } from 'typeorm';
import { PlanDia } from 'src/plan-dia/entities/plan-dia.entity';
import { Dia } from 'src/dia/entities/dia.entity';
import { DiaCircuito } from 'src/dia-circuito/entities/dia-circuito.entity';
import { Circuito } from 'src/circuito/entities/circuito.entity'; 

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan)
    private planRepository: Repository<Plan>,
    @InjectRepository(PlanDia)
    private planDiaRepository: Repository<PlanDia>,
    @InjectRepository(Dia)
    private diaRepository: Repository<Dia>,
    @InjectRepository(DiaCircuito)
    private diaCircuitoRepository: Repository<DiaCircuito>,
    @InjectRepository(Circuito) 
    private circuitoRepository: Repository<Circuito>,
  ) {}

  async create(createPlanDto: CreatePlanDto) {
    const { dias, ...planData } = createPlanDto;
    const plan = this.planRepository.create(planData);
    await this.planRepository.save(plan);

    if (dias && dias.length > 0) {
      for (const diaDto of dias) {
        const { circuitos, ...diaData } = diaDto;
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

        const planDia = this.planDiaRepository.create({
          plan,
          dia,
        });
        await this.planDiaRepository.save(planDia);
      }
    }

    return plan;
  }

  async findAll() {
    return this.planRepository.find({ relations: ['planDias', 'planDias.dia', 'planDias.dia.diaCircuitos', 'planDias.dia.diaCircuitos.circuito'] });
  }

  async findOne(id: string): Promise<Plan | undefined> {
    return this.planRepository.findOne({ where: { id }, relations: ['planDias', 'planDias.dia', 'planDias.dia.diaCircuitos', 'planDias.dia.diaCircuitos.circuito'] });
  }

  async update(id: string, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  async remove(id: string): Promise<Plan> {
    const plan = await this.planRepository.findOne({ where: { id } });

    if (!plan) {
      throw new NotFoundException(`Plan #${id} not found`);
    }

    plan.delete = false;
    return this.planRepository.save(plan);
  }
}