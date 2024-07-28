import { Transform } from "class-transformer";
import { IsString, MaxLength, MinLength } from "class-validator";


export class RegisterDto{

    @IsString()
    @MinLength(1)
    @MaxLength(50)
    @Transform(({value})=>value.trim())
    nombre : string;

    @IsString()
    @MinLength(1)
    @MaxLength(50)
    @Transform(({value})=>value.trim())
    apellido : string;

    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    dni : string;


    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    edad : string;

    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    peso : string;

    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    altura : string;

    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    telefono : string;

    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    usuario : string;

    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    contrasena : string;

    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    role : string;


}