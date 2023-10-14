import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('SERVER_PORT') || 8080;
  const cors =
    configService.get<number>('CORS_ORIGIN') || 'http://localhost:3000';

  console.log('cors and port', cors, port);

  // app.enableCors({
  //   // credentials: true,
  //   origin: process.env.ORIGINS,
  // });

  await app.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`);
  });
}

bootstrap();
