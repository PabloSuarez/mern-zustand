import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('SERVER_PORT');
  const cors = configService.get<string>('CORS_ORIGIN');

  if (!cors || !port) {
    throw new Error('CORS_ORIGIN and SERVER_PORT must be set on the .env file');
  }

  app.enableCors({
    credentials: true,
    origin: cors,
  });

  await app.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`);
  });
}

bootstrap();
