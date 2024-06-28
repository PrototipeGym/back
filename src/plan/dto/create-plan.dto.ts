import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsArray, IsOptional, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { CreateDiaDto } from "src/dia/dto/create-dia.dto";


export class CreatePlanDto {

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    @Transform(({value}) => value.trim())
    nombre : string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(250)
    @Transform(({value}) => value.trim())
    descripcion : string;

    @ApiProperty({ type: [CreateDiaDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateDiaDto)
    dias: CreateDiaDto[];


}
