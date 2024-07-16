import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateRutinaDto {

  @ApiProperty({ default: "" })
  @IsString()
  nombre: string;

  @ApiProperty({ default: "" })
  @IsString()
  idDia: string; 
}

