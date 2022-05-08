import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  await app.listen(8001);
  console.log(`API Application is running on: ${await app.getUrl()}`);
}
bootstrap();
