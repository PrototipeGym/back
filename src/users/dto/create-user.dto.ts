import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, MaxLength, MinLength } from "class-validator";



export class CreateUserDto {

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    @Transform(({value})=>value.trim())
    nombre : string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    @Transform(({value})=>value.trim())
    apellido : string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    dni : string;


    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    edad : string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    peso : string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    altura : string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    genero : string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    telefono : string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    usuario : string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    contrasena : string;

    
    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @Transform(({value})=>value.trim())
    role : string;

    // @ApiProperty()
    // @IsString()
    // @MinLength(1)
    // @MaxLength(50)
    // @Transform(({value})=>value.trim())
    // fecha_registro : string;

}

