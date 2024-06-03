import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cp7464o21fec73dfikqg-a.oregon-postgres.render.com',
      port: 5432,
      username: 'dbacgim_user',
      password: 'XIon5lt4Bd9zcGo8BMKqzhmeAMFINDaD',
      database: 'dbacgim',
      entities: [User],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),

    UsersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

