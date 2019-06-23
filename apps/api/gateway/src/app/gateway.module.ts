import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { environment } from '../environments/environment';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot(environment.gateway),
  ],
})
export class GatewayModule {}
