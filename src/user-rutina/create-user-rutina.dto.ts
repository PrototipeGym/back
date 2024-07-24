import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreateUserRutinaDto {
    @ApiProperty()
    @IsUUID()
    idRutina: string;

    @ApiProperty()
    @IsUUID()
    idUser: string;
}
