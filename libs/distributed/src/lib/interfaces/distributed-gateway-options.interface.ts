import { GqlModuleOptions } from '@nestjs/graphql';
import { Omit } from '@nestjs/graphql/dist/interfaces/gql-module-options.interface';
import { GatewayConfig, ServiceEndpointDefinition } from '@apollo/gateway';
import { GraphQLDataSource } from '@apollo/gateway/src/datasources/types';

export interface DistributedGatewayOptions extends Pick<GqlModuleOptions, 'path' | 'disableHealthCheck' | 'onHealthCheck' | 'cors' | 'bodyParserConfig' | 'installSubscriptionHandlers'>, Omit<GatewayConfig, 'buildService'> {}

export type BuildService = (definition: ServiceEndpointDefinition) => GraphQLDataSource;
