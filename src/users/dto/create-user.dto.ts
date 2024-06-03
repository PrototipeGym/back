import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, MaxLength, MinLength } from "class-validator";



export class CreateUserDto {

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    firstName : string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    @Transform(({value})=>value.trim())
    lastName : string;

}

