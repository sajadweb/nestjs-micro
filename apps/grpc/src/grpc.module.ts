import { Configuration } from '@libs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GrpcController } from './grpc.controller';
import { GrpcService } from './grpc.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Configuration],
    }),
  ],
  controllers: [GrpcController],
  providers: [GrpcService],
})
export class GrpcModule {}
