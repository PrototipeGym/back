import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateDiaDto {

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    @Transform(({value}) => value.trim())
    nombre : string;

}
