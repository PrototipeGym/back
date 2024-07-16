import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RepeticionService } from './repeticion.service';
import { CreateRepeticionDto } from './dto/create-repeticion.dto';
import { UpdateRepeticionDto } from './dto/update-repeticion.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('repeticion')
@ApiBearerAuth()
@Controller('repeticion')
export class RepeticionController {
  constructor(private readonly repeticionService: RepeticionService) {}

  @Post()
  create(@Body() createRepeticionDto: CreateRepeticionDto) {
    return this.repeticionService.create(createRepeticionDto);
  }

  @Get()
  findAll() {
    return this.repeticionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repeticionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepeticionDto: UpdateRepeticionDto) { 
    return this.repeticionService.update(id, updateRepeticionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repeticionService.remove(id);
  }
}
