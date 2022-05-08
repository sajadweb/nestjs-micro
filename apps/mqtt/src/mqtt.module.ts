import { Configuration } from '@libs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MqttController } from './mqtt.controller';
import { MqttService } from './mqtt.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Configuration],
    }),
  ],
  controllers: [MqttController],
  providers: [MqttService],
})
export class MqttModule {}
