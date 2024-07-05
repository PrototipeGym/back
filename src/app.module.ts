import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import { PlanModule } from './plan/plan.module';
import { Plan } from './plan/entities/plan.entity';
import { DiaModule } from './dia/dia.module';
import { Dia } from './dia/entities/dia.entity';
import { EjercicioModule } from './ejercicio/ejercicio.module';
import { CircuitoModule } from './circuito/circuito.module';
import { Circuito } from './circuito/entities/circuito.entity';
import { Ejercicio } from './ejercicio/entities/ejercicio.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      entities: [User, Plan, Dia, Circuito, Ejercicio],
      synchronize: true,
      ssl: { rejectUnauthorized: false },


    }),

    UsersModule,

    AuthModule,

    PlanModule,

    DiaModule,

    EjercicioModule,

    CircuitoModule,


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

