
import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsArray, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";


export class CreateDiaDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  @Transform(({ value }) => value.trim())
  nombre : string;


}
