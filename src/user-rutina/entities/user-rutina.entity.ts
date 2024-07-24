import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Rutina } from 'src/rutina/entities/rutina.entity';

@Entity()
export class UserRutina {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, user => user.userRutinas)
    user: User;

    @ManyToOne(() => Rutina, rutina => rutina.userRutinas)
    rutina: Rutina;
}
