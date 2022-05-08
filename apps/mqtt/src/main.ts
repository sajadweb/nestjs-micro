import { NestFactory } from '@nestjs/core';
import { MqttModule } from './mqtt.module';

async function bootstrap() {
  const app = await NestFactory.create(MqttModule);
  await app.listen(8004);
  console.log(`MQTT Application is running on: ${await app.getUrl()}`);
}
bootstrap();
