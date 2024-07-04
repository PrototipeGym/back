import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { Repository } from 'typeorm';
import { Dia } from 'src/dia/entities/dia.entity';
import { Circuito } from 'src/circuito/entities/circuito.entity';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan)
    private planRepository: Repository<Plan>,

    @InjectRepository(Dia)
    private diaRepository: Repository<Dia>,

    @InjectRepository(Circuito)
    private circuitoRepository: Repository<Circuito>,
  ) {}

  async create(createPlanDto: CreatePlanDto, user: UserActiveInterface) {
    const { dias, ...planDetails } = createPlanDto;

    const plan = this.planRepository.create({ ...planDetails, userID: user.id });
    const savedPlan = await this.planRepository.save(plan);

    for (const diaDto of dias) {
      const { circuitos, ...diaDetails } = diaDto;
      const dia = this.diaRepository.create({ ...diaDetails, plan: savedPlan });
      const savedDia = await this.diaRepository.save(dia);

      const circuitosToSave = circuitos.map(circuitoDto => {
        return this.circuitoRepository.create({ ...circuitoDto, dia: savedDia });
      });
      await this.circuitoRepository.save(circuitosToSave);
    }

    return await this.planRepository.findOne({ where: { id: savedPlan.id }, relations: ['dias', 'dias.circuitos'] });
  }

  async findAll() {
    return await this.planRepository.find({ relations: ['dias', 'dias.circuitos'] });
  }

  async findOne(id: string): Promise<Plan | undefined> {
    return await this.planRepository.findOne({ where: { id }, relations: ['dias', 'dias.circuitos'] });
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

