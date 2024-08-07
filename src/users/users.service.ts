import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find({ where:{"isActive" : true}});
  }
  


  async findOne(usuario: string): Promise<User | undefined> {
    const users = await this.userRepository.find({ where: { usuario: usuario } });
    return users.length > 0 ? users[0] : undefined;
  }


  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const users = await this.userRepository.find({ where: { id: id } });
  
    if (users.length === 0) {
      throw new NotFoundException(`User #${id} not found`);
    }
  
    const user = users[0];
    user.nombre = updateUserDto.nombre;
    user.apellido = updateUserDto.apellido;
    user.dni=updateUserDto.dni;
    user.edad=updateUserDto.edad;
    user.peso=updateUserDto.peso;
    user.genero=updateUserDto.genero;
    user.altura=updateUserDto.altura;
    user.telefono=updateUserDto.telefono;
    user.usuario=updateUserDto.usuario;
    user.contrasena=updateUserDto.contrasena;

  
    return await this.userRepository.save(user);
  }
  


  async remove(id: string): Promise<User> {
    const users = await this.userRepository.find({ where: { id: id } });

    if (users.length === 0) {
      throw new NotFoundException(`User #${id} not found`);
    }
    
    const user = users[0];
    user.isActive = false;
    return await this.userRepository.save(user);
  }
  

  
  //Metodos utilizado para el Login
  async findOneByUsername(usuario: string): Promise<User | undefined> {
    const users = await this.userRepository.find({ where: { usuario: usuario } });
    return users.length > 0 ? users[0] : undefined;
  }

  
  async findByUsernameWithPassword(usuario: string){
    return this.userRepository.findOne({
      where: {usuario},
      select:['id', 'usuario', 'contrasena', 'role'],
    });
  }
  
}
