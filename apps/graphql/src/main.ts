import { NestFactory } from '@nestjs/core';
import { GraphqlModule } from './graphql.module';

async function bootstrap() {
  const app = await NestFactory.create(GraphqlModule);
  await app.listen(8002);
  console.log(`GRAPHQL Application is running on: ${await app.getUrl()}`);
}
bootstrap();
