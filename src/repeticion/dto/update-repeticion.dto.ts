import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateRepeticionDto {

  @ApiProperty({ default: "" }) 
  @IsString()
  nombre: string;

  @ApiPropertyOptional({ default: "" }) 
  @IsOptional() 
  @IsString()
  accionId?: string; 
}
