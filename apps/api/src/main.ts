import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  //cors
  app.enableCors();
  // config
  const config = app.get<any>(ConfigService);

  await app.listen(config.get('api.port'));
  console.log(`${config.get('api.app')} is running on: ${await app.getUrl()}`);
}
bootstrap();
