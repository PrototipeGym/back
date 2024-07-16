// dia-rutina.entity.ts
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Dia } from 'src/dia/entities/dia.entity';
import { Rutina } from '../../rutina/entities/rutina.entity';

@Entity()
export class DiaRutina {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Dia, dia => dia.diaRutinas)
  dia: Dia;

  @ManyToOne(() => Rutina, rutina => rutina.diaRutinas)
  rutina: Rutina;
}
