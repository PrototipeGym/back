import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEjercicioDto {
  @ApiProperty()
  @IsString()
  nombre: string;


}