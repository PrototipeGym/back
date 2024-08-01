import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRutinaDto } from './dto/create-rutina.dto';
import { UpdateRutinaDto } from './dto/update-rutina.dto';
import { CreateUserRutinaDto } from 'src/user-rutina/create-user-rutina.dto';
import { Rutina } from './entities/rutina.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DiaRutina } from 'src/dia-rutina/entities/dia-rutina.entity';
import { Dia } from '../dia/entities/dia.entity';
import { UserRutina } from 'src/user-rutina/entities/user-rutina.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class RutinaService {
  constructor(
    @InjectRepository(Rutina)
    private rutinaRepository: Repository<Rutina>,

    @InjectRepository(Dia)
    private diaRepository: Repository<Dia>,

    @InjectRepository(DiaRutina)
    private diaRutinaRepository: Repository<DiaRutina>,

    @InjectRepository(UserRutina)
    private userRutinaRepository: Repository<UserRutina>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createRutinaDto: CreateRutinaDto) {
    return await this.rutinaRepository.save(createRutinaDto);
  }

  async findAll() {
    return await this.rutinaRepository.find({ relations: ['diaRutinas'] });
  }

  async findAllByUser(userId: string) {
    const userRutinas = await this.userRutinaRepository.find({
      where: { user: { id: userId } },
      relations: ['rutina', 'rutina.diaRutinas']
    });

    const rutinas = userRutinas.map(userRutina => userRutina.rutina);
    return rutinas;
  }

  async findAllByRutina(id: string) {
    const rutina = await this.rutinaRepository.findOne({ where: { id }, relations: ['diaRutinas'] });
    if (!rutina) {
      throw new NotFoundException(`Rutina con id ${id} no encontrada`);
    }
    return rutina;
  }

  async findOne(id: string) {
    return await this.rutinaRepository.findOne({ where: { id }, relations: ['diaRutinas'] });
  }

  async update(id: string, updateRutinaDto: UpdateRutinaDto) {
    const { nombre, idDia } = updateRutinaDto;

    const rutina = await this.rutinaRepository.findOne({ where: { id } });
    if (!rutina) {
      throw new NotFoundException(`Rutina con id ${id} no encontrada`);
    }

    if (nombre) {
      rutina.nombre = nombre;
    }

    if (idDia) {
      const dia = await this.diaRepository.findOne({ where: { id: idDia } });
      if (!dia) {
        throw new NotFoundException(`Dia con id ${idDia} no encontrado`);
      }

      let diaRutina = await this.diaRutinaRepository.findOne({
        where: { rutina: { id: rutina.id }, dia: { id: dia.id } },
      });

      if (!diaRutina) {
        diaRutina = new DiaRutina();
        diaRutina.rutina = rutina;
        diaRutina.dia = dia;
        await this.diaRutinaRepository.save(diaRutina);
      }
    }

    return await this.rutinaRepository.save(rutina);
  }

  async remove(id: string) {
    const result = await this.rutinaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Rutina con id ${id} no encontrada`);
    }
    return result;
  }

  async addUserToRutina(createUserRutinaDto: CreateUserRutinaDto) {
    const { idRutina, idUser } = createUserRutinaDto;

    const rutina = await this.rutinaRepository.findOne({ where: { id: idRutina } });
    if (!rutina) {
      throw new NotFoundException(`Rutina con id ${idRutina} no encontrada`);
    }

    const user = await this.userRepository.findOne({ where: { id: idUser } });
    if (!user) {
      throw new NotFoundException(`Usuario con id ${idUser} no encontrado`);
    }

    const userRutina = new UserRutina();
    userRutina.rutina = rutina;
    userRutina.user = user;

    return await this.userRutinaRepository.save(userRutina);
  }



}
