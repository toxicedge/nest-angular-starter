import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Shared } from './shared/shared.model';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  console.log(`${Shared.appName}: Starting server on port ${port}...`);
  await app.listen(port);
}
bootstrap();
