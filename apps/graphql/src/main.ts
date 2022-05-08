import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { GraphqlModule } from './graphql.module';

async function bootstrap() {
  const app = await NestFactory.create(GraphqlModule);
  //cors
  app.enableCors();
  // config
  const config = app.get<any>(ConfigService);

  await app.listen(config.get('graphql.port'));
  console.log(
    `${config.get('graphql.app')} is running on: ${await app.getUrl()}`,
  );
}
bootstrap();
