import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { Repository } from 'typeorm';
import { Dia } from 'src/dia/entities/dia.entity';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan)
    private planRepository: Repository<Plan>,

    @InjectRepository(Dia)
    private diaRepository: Repository<Dia>,
  ) {}

  async create(createPlanDto: CreatePlanDto) {
    const { dias, ...planDetails } = createPlanDto;

    const plan = this.planRepository.create(planDetails);
    const savedPlan = await this.planRepository.save(plan);

    const diasToSave = dias.map(dia => {
      return this.diaRepository.create({ ...dia, plan: savedPlan });
    });

    await this.diaRepository.save(diasToSave);

    return await this.planRepository.findOne({ where: { id: savedPlan.id }, relations: ['dias'] });
  }

  async findAll() {
    return await this.planRepository.find({ relations: ['dias'] });
  }

  async findOne(id: string): Promise<Plan | undefined> {
    return await this.planRepository.findOne({ where: { id }, relations: ['dias'] });
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
    return await this.planRepository.save(plan);
  }
}
