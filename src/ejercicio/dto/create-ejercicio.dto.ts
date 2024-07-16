import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateEjercicioDto {
  @ApiProperty()
  @IsString()
  @Transform(({value}) => value.trim())
  nombre: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(250)
  @Transform(({value}) => value.trim())
  descripcion: string;

}