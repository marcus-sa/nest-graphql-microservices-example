import { Injectable } from '@nestjs/common';
import { ResolversExplorerService } from '@nestjs/graphql/dist/services/resolvers-explorer.service';
import { DelegatesExplorerService } from '@nestjs/graphql/dist/services/delegates-explorer.service';
import { GqlModuleOptions, GraphQLAstExplorer } from '@nestjs/graphql';
import { ScalarsExplorerService } from '@nestjs/graphql/dist/services/scalars-explorer.service';
import { GraphQLSchemaBuilder } from '@nestjs/graphql/dist/graphql-schema-builder';
import { extend } from '@nestjs/graphql/dist/utils/extend.util';
import { GraphQLSchema } from 'graphql';
import { gql, mergeSchemas, makeExecutableSchema } from 'apollo-server-express';
import { buildFederatedSchema, printSchema } from '@apollo/federation';
import { ReferencesExplorerService } from './services';
import { removeTempField } from '@nestjs/graphql/dist/utils/remove-temp.util';

@Injectable()
export class GraphqlDistributedFactory {
  constructor(
    private readonly resolversExplorerService: ResolversExplorerService,
    private readonly delegatesExplorerService: DelegatesExplorerService,
    private readonly scalarsExplorerService: ScalarsExplorerService,
    private readonly referencesExplorerService: ReferencesExplorerService,
    private readonly graphqlAstExplorer: GraphQLAstExplorer,
    private readonly gqlSchemaBuilder: GraphQLSchemaBuilder,
  ) {}

  private extendResolvers(resolvers: any[]) {
    return resolvers.reduce((prev, curr) => extend(prev, curr), {});
  }

  async mergeOptions(options: GqlModuleOptions = {}): Promise<GqlModuleOptions> {
    const resolvers = this.extendResolvers([
      this.resolversExplorerService.explore(),
      this.scalarsExplorerService.explore(),
      this.referencesExplorerService.explore(),
    ]);

    const federatedSchema = buildFederatedSchema([
      {
        typeDefs: gql`${options.typeDefs}`,
        resolvers,
      }
    ]);

    removeTempField(federatedSchema);
    return {
      ...options,
      typeDefs: undefined,
      schema: federatedSchema,
    };
  }
}
