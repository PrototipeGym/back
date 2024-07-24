import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { RutinaService } from './rutina.service';
import { CreateRutinaDto } from './dto/create-rutina.dto';
import { UpdateRutinaDto } from './dto/update-rutina.dto';
import { CreateUserRutinaDto } from 'src/user-rutina/create-user-rutina.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@ApiTags('Rutina')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('rutina')
export class RutinaController {
  constructor(private readonly rutinaService: RutinaService) {}

  @Post()
  @ApiBody({ type: CreateRutinaDto })
  create(@Body() createRutinaDto: CreateRutinaDto) {
    return this.rutinaService.create(createRutinaDto);
  }

  @Get()
  findAll() {
    return this.rutinaService.findAll();
  }

  @Get('user')
  findAllByUser(@ActiveUser() user: UserActiveInterface) {
    return this.rutinaService.findAllByUser(user.id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateRutinaDto })
  update(@Param('id') id: string, @Body() updateRutinaDto: UpdateRutinaDto) {
    return this.rutinaService.update(id, updateRutinaDto);
  }

  @Put('add-user')
  @ApiBody({ type: CreateUserRutinaDto })
  addUserToRutina(@Body() createUserRutinaDto: CreateUserRutinaDto) {
    return this.rutinaService.addUserToRutina(createUserRutinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rutinaService.remove(id);
  }
}


