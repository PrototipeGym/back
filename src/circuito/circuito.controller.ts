import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CircuitoService } from './circuito.service';
import { CreateCircuitoDto } from './dto/create-circuito.dto';
import { UpdateCircuitoDto } from './dto/update-circuito.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Circuito')
@ApiBearerAuth()
@Controller('circuito')
export class CircuitoController {
  constructor(private readonly circuitoService: CircuitoService) {}

  @Post()
  create(@Body() createCircuitoDto: CreateCircuitoDto) {
    return this.circuitoService.create(createCircuitoDto);
  }

  @Get()
  findAll() {
    return this.circuitoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.circuitoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCircuitoDto: UpdateCircuitoDto) {
    return this.circuitoService.update(id, updateCircuitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.circuitoService.remove(id);
  }
}
