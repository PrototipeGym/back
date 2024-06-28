import { Transform } from "class-transformer";
import { IsString, MaxLength, MinLength } from "class-validator";

export class LoginDto {

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

}