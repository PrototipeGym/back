import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";
import { Transform } from "class-transformer";

export class CreateRutinaDto {

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    @Transform(({value}) => value.trim())
    nombre: string;


}
