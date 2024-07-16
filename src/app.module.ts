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
import { Ejercicio } from './ejercicio/entities/ejercicio.entity';
import { AccionModule } from './accion/accion.module';
import { RepeticionModule } from './repeticion/repeticion.module';
import { Accion } from './accion/entities/accion.entity';
import { Repeticion } from './repeticion/entities/repeticion.entity';


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
      entities: [User, Plan, Dia, Ejercicio, Accion, Repeticion],
      synchronize: true,
      ssl: { rejectUnauthorized: false },


    }),

    UsersModule,

    AuthModule,

    PlanModule,

    DiaModule,

    EjercicioModule,



    AccionModule,



    RepeticionModule,


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

