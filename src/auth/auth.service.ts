import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';


@Injectable()
export class AuthService {

    constructor(
        private readonly usersService : UsersService,
        private readonly jwtService: JwtService
    ){}

    async register ({
        usuario, 
        contrasena,
        nombre,
        apellido,
        dni,
        edad,
        peso,
        altura,
        genero,
        telefono,
        role
    }:RegisterDto){

        const user = await this.usersService.findOneByUsername(usuario);

        if (user) {
            throw new BadRequestException('Usuario ya existente')
        }

        await this.usersService.create({
            usuario, 
            contrasena: await bcryptjs.hash(contrasena, 10),
            nombre,
            apellido,
            dni,
            edad,
            peso,
            altura,
            genero,
            telefono,
            role
        });

        return {
            usuario,
            nombre,
            apellido
        };
    }

    async login({ usuario, contrasena }: LoginDto) {
        const user = await this.usersService.findByUsernameWithPassword(usuario);
    
        if (!user) {
          throw new UnauthorizedException("Invalid username");
        }
    
        const isPasswordValid = await bcryptjs.compare(contrasena, user.contrasena);
    
        if (!isPasswordValid) {
          throw new UnauthorizedException("Invalid password");
        }

        const payload = { id: user.id, usuario: user.usuario, role: user.role };

        const token = await this.jwtService.signAsync(payload, {
            secret: jwtConstants.secret,
          });

        console.log('Generated Token:', token);
        
        return {
            token: token,
            usuario: user.usuario,
        };
    }

    async profile({usuario, role}: {id: string, usuario: string; role: string}){
        return await this.usersService.findOneByUsername(usuario);
    }
}
