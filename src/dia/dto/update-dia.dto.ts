
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateDiaDto {
  @ApiProperty({ default: "" })
  @IsString()
  nombre: string;

  @ApiPropertyOptional({ default: "" })
  @IsOptional()
  @IsString()
  repeticionId?: string;
}
