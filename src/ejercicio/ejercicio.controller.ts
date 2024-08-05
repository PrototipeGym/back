import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EjercicioService } from './ejercicio.service';
import { CreateEjercicioDto } from './dto/create-ejercicio.dto';
import { UpdateEjercicioDto } from './dto/update-ejercicio.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@ApiTags('Ejercicio')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('ejercicio')
export class EjercicioController {
  constructor(private readonly ejercicioService: EjercicioService) {}

  @Post()
  @ApiBody({ type: CreateEjercicioDto })
  create(@Body() createEjercicioDto: CreateEjercicioDto, @ActiveUser() user: UserActiveInterface) {
    return this.ejercicioService.create(createEjercicioDto);
  }

  @Get()
  findAll() {
    return this.ejercicioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejercicioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEjercicioDto: UpdateEjercicioDto) {
    return this.ejercicioService.update(id, updateEjercicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejercicioService.remove(id);
  }
}
