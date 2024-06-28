import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEjercicioDto {
    
    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(25)
    @Transform(({value}) => value.trim() )
    nombre : string;

    @ApiProperty()
    @IsNumber()
    @MinLength(1)
    @MaxLength(25)
    @Transform(({value}) => value.trim() )
    kilos : number;

    @ApiProperty()
    @IsBoolean()
    @MinLength(1)
    @MaxLength(25)
    @Transform(({value}) => value.trim() )
    precargado : boolean;

    


}
