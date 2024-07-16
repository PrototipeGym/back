// create-accion.dto.ts
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, IsUUID } from "class-validator";

export class CreateAccionDto {

    @ApiProperty()
    @IsString()
    @Transform(({value}) => value.trim())
    series: number;

    @ApiProperty()
    @IsString()
    @Transform(({value}) => value.trim())
    kg: number;

    @ApiProperty()
    @IsUUID()
    ejercicioId: string;
}

