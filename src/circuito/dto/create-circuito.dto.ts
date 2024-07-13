
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCircuitoDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  @Transform(({ value }) => value.trim())
  nombre: string;

  @ApiProperty()
  @IsNumber()
  series: number;
}

