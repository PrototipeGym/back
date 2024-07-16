import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiaService } from './dia.service';
import { CreateDiaDto } from './dto/create-dia.dto';
import { UpdateDiaDto } from './dto/update-dia.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Dia')
@ApiBearerAuth()
@Controller('dia')
export class DiaController {
  constructor(private readonly diaService: DiaService) {}

  @Post()
  @ApiBody({ type : CreateDiaDto})
  create(@Body() createDiaDto: CreateDiaDto) {
    return this.diaService.create(createDiaDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiaDto: UpdateDiaDto) {
    return this.diaService.update(id, updateDiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diaService.remove(id);
  }
}
