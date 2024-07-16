import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan)
    private planRepository: Repository<Plan>,

  ) {}

  async create(createPlanDto: CreatePlanDto) {
    return await this.planRepository.save(createPlanDto);
  }

  async findAll() {
    return this.planRepository.find();
  }

  async findOne(id: string): Promise<Plan | undefined> {
    return this.planRepository.findOne({ where: { id }});
  }

  async update(id: string, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  async remove(id: string): Promise<Plan> {
    const plan = await this.planRepository.findOne({ where: { id } });

    if (!plan) {
      throw new NotFoundException(`Plan #${id} not found`);
    }

    plan.status = true;
    return this.planRepository.save(plan);
  }
}