import { Resolver, Query } from '@nestjs/graphql';
import { GraphqlService } from './graphql.service';

@Resolver('graphql')
export class GraphqlResolver {
  constructor(private readonly graphqlService: GraphqlService) {}
  @Query(() => String)
  getHello(): string {
    return this.graphqlService.getHello();
  }
}
