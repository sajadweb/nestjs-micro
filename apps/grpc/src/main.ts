import { NestFactory } from '@nestjs/core';
import { GrpcModule } from './grpc.module';

async function bootstrap() {
  const app = await NestFactory.create(GrpcModule);
  await app.listen(8003);
  console.log(`gRPC Application is running on: ${await app.getUrl()}`);
}
bootstrap();
