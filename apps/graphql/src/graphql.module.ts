import { Configuration } from '@libs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphqlResolver } from './graphql.resolver';
import { GraphqlService } from './graphql.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Configuration],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // playground: false,
      autoSchemaFile: 'schema.gql',
      // installSubscriptionHandlers: true,
    }),
  ],
  providers: [GraphqlResolver, GraphqlService],
})
export class GraphqlModule {}
