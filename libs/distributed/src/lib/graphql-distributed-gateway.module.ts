import { DynamicModule, Inject, Module, OnModuleInit, Optional } from '@nestjs/common';
import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server-express';
import { HttpAdapterHost } from '@nestjs/core';

import { DISTRIBUTED_GATEWAY_BUILD_SERVICE, DISTRIBUTED_GATEWAY_OPTIONS } from './tokens';
import { BuildService, DistributedGatewayOptions } from './interfaces';
import { removeTempField } from '@nestjs/graphql/dist/utils/remove-temp.util';

@Module({})
export class GraphqlDistributedGatewayModule implements OnModuleInit {
  private apolloServer: ApolloServer;

  constructor(
    @Optional()
    private readonly httpAdapterHost: HttpAdapterHost,
    @Optional() @Inject(DISTRIBUTED_GATEWAY_BUILD_SERVICE)
    private readonly buildService: BuildService,
    @Inject(DISTRIBUTED_GATEWAY_OPTIONS)
    private readonly options: DistributedGatewayOptions,
  ) {}

  static forRoot(options: DistributedGatewayOptions): DynamicModule {
    return {
      module: GraphqlDistributedGatewayModule,
      providers: [
        {
          provide: DISTRIBUTED_GATEWAY_OPTIONS,
          useValue: options,
        },
      ],
    };
  }

  async onModuleInit() {
    if (!this.httpAdapterHost) return;
    const { httpAdapter } = this.httpAdapterHost;

    if (!httpAdapter) return;

    const app = httpAdapter.getInstance();
    const {
      options: {
        __exposeQueryPlanExperimental,
        debug,
        serviceList,
        path,
        disableHealthCheck,
        onHealthCheck,
        cors,
        bodyParserConfig,
        installSubscriptionHandlers,
      },
      buildService,
    } = this;

    const gateway = new ApolloGateway({
      __exposeQueryPlanExperimental,
      debug,
      serviceList,
      buildService,
    });

    const { schema, executor } = await gateway.load();

    this.apolloServer = new ApolloServer({
      executor,
      schema,
    });

    this.apolloServer.applyMiddleware({
      app,
      path,
      disableHealthCheck,
      onHealthCheck,
      cors,
      bodyParserConfig,
    });

    if (installSubscriptionHandlers) {
      this.apolloServer.installSubscriptionHandlers(
        httpAdapter.getHttpServer(),
      );
    }
  }
}