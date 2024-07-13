// plan.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@ApiTags('plan')
@ApiBearerAuth()
@Controller('plan')
@UseGuards(AuthGuard)
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Plan' })
  @ApiResponse({ status: 201, description: 'The Plan has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiBody({ type: CreatePlanDto })
  create(@Body() createPlanDto: CreatePlanDto, @ActiveUser() user: UserActiveInterface) {
    return this.planService.create(createPlanDto);
  }

  @Get()
  findAll() {
    return this.planService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.planService.update(id, updatePlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planService.remove(id);
  }
}
