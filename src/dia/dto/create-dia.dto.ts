
import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsArray, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { CreateCircuitoDto } from "src/circuito/dto/create-circuito.dto";

export class CreateDiaDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  @Transform(({ value }) => value.trim())
  nombre : string;

  @ApiProperty({ type: [CreateCircuitoDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCircuitoDto)
  circuitos: CreateCircuitoDto[];
}
