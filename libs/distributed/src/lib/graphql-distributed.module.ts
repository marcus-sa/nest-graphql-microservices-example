import { DynamicModule, Inject, Module, OnModuleInit, Optional, Provider } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { GRAPHQL_MODULE_ID, GRAPHQL_MODULE_OPTIONS } from '@nestjs/graphql/dist/graphql.constants';
import { ApolloServer } from 'apollo-server-express';
import { mergeDefaults } from '@nestjs/graphql/dist/utils/merge-defaults.util';
import { generateString } from '@nestjs/graphql/dist/utils/generate-token.util';
import { GraphQLSchemaBuilder } from '@nestjs/graphql/dist/graphql-schema-builder';
import { ScalarsExplorerService } from '@nestjs/graphql/dist/services/scalars-explorer.service';
import { DelegatesExplorerService } from '@nestjs/graphql/dist/services/delegates-explorer.service';
import { ResolversExplorerService } from '@nestjs/graphql/dist/services/resolvers-explorer.service';
import { MetadataScanner } from '@nestjs/core/metadata-scanner';
import { extend } from '@nestjs/graphql/dist/utils/extend.util';
import { printSchema } from '@apollo/federation';
import {
  GqlModuleAsyncOptions,
  GqlModuleOptions,
  GqlOptionsFactory,
  GraphQLAstExplorer,
  GraphQLFactory,
} from '@nestjs/graphql';

import { GraphqlDistributedFactory } from './graphql-distributed.factory';
import { ReferencesExplorerService } from './services';
import { GraphQLTypesLoader } from './graphql-types.loader';

@Module({
  providers: [
    GraphqlDistributedFactory,
    GraphQLFactory,
    MetadataScanner,
    ResolversExplorerService,
    DelegatesExplorerService,
    ScalarsExplorerService,
    ReferencesExplorerService,
    GraphQLAstExplorer,
    GraphQLTypesLoader,
    GraphQLSchemaBuilder,
  ],
  exports: [GraphQLTypesLoader, GraphQLAstExplorer],
})
export class GraphqlDistributedModule implements OnModuleInit {
  private apolloServer: ApolloServer;

  constructor(
    @Optional()
    private readonly httpAdapterHost: HttpAdapterHost,
    @Inject(GRAPHQL_MODULE_OPTIONS)
    private readonly options: GqlModuleOptions,
    private readonly graphqlFactory: GraphQLFactory,
    private readonly graphqlDistributedFactory: GraphqlDistributedFactory,
    private readonly graphqlTypesLoader: GraphQLTypesLoader,
  ) {}

  static forRoot(options: GqlModuleOptions = {}): DynamicModule {
    options = mergeDefaults(options);
    return {
      module: GraphqlDistributedModule,
      providers: [
        {
          provide: GRAPHQL_MODULE_OPTIONS,
          useValue: options,
        },
      ],
    };
  }

  static forRootAsync(options: GqlModuleAsyncOptions): DynamicModule {
    return {
      module: GraphqlDistributedModule,
      imports: options.imports,
      providers: [
        ...this.createAsyncProviders(options),
        {
          provide: GRAPHQL_MODULE_ID,
          useValue: generateString(),
        },
      ],
    };
  }

  private static createAsyncProviders(
    options: GqlModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }

    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: GqlModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: GRAPHQL_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    return {
      provide: GRAPHQL_MODULE_OPTIONS,
      useFactory: (optionsFactory: GqlOptionsFactory) => optionsFactory.createGqlOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }

  async onModuleInit() {
    if (!this.httpAdapterHost) return;
    const { httpAdapter } = this.httpAdapterHost;

    if (!httpAdapter) return;

    const {
      path,
      disableHealthCheck,
      onHealthCheck,
      cors,
      bodyParserConfig,
      typePaths,
    } = this.options;
    const app = httpAdapter.getInstance();

    const typeDefs = await this.graphqlTypesLoader.getTypesFromPaths(typePaths);

    const mergedTypeDefs = extend(typeDefs, this.options.typeDefs);
    const apolloOptions = await this.graphqlDistributedFactory.mergeOptions({
      ...this.options,
      typeDefs: mergedTypeDefs,
    });

    if (this.options.definitions && this.options.definitions.path) {
      await this.graphqlFactory.generateDefinitions(
        printSchema(apolloOptions.schema),
        this.options,
      );
    }

    this.apolloServer = new ApolloServer(apolloOptions as any);
    this.apolloServer.applyMiddleware({
      app,
      path,
      disableHealthCheck,
      onHealthCheck,
      cors,
      bodyParserConfig,
    });

    if (this.options.installSubscriptionHandlers) {
      // TL;DR <https://github.com/apollographql/apollo-server/issues/2776>
      throw new Error('No support for subscriptions yet');
      /*this.apolloServer.installSubscriptionHandlers(
        httpAdapter.getHttpServer(),
      );*/
    }
  }
}