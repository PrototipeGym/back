import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('AC GYM')
    .setDescription('The gimnasio API description')
    .setVersion('1.0')
    .addTag('users', 'Endpoints de manejo de usuarios')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const theme = new SwaggerTheme();
  const options = {
    explorer: true,
    customCss: theme.getBuffer(SwaggerThemeNameEnum.ONE_DARK)
  };
  SwaggerModule.setup('api', app, document, options);
  
  await app.listen(3005);
}
bootstrap();


