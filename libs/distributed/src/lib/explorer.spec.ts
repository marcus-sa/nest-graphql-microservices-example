import { Test, TestingModule } from '@nestjs/testing';
import { ResolversExplorerService } from '@nestjs/graphql/dist/services/resolvers-explorer.service';
import {
  GraphQLAstExplorer,
  GraphQLFactory,
  GraphQLTypesLoader,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { ModulesContainer, NestApplicationContext, NestFactory } from '@nestjs/core';
import { MetadataScanner } from '@nestjs/core/metadata-scanner';
import { ExternalContextCreator } from '@nestjs/core/helpers/external-context-creator';
import { GRAPHQL_MODULE_OPTIONS } from '@nestjs/graphql/dist/graphql.constants';
import { INestApplicationContext, Module } from '@nestjs/common';
import { DelegatesExplorerService } from '@nestjs/graphql/dist/services/delegates-explorer.service';
import { ScalarsExplorerService } from '@nestjs/graphql/dist/services/scalars-explorer.service';
import { GraphQLSchemaBuilder } from '@nestjs/graphql/dist/graphql-schema-builder';

@Resolver('User')
export class UsersResolver {
  @Query()
  posts() {}

  @Query()
  reviews() {}

  @ResolveProperty()
  id() {}
}

@Module({
  providers: [
    {
      provide: GRAPHQL_MODULE_OPTIONS,
      useValue: {},
    },
    UsersResolver,
    GraphQLFactory,
    MetadataScanner,
    ResolversExplorerService,
    DelegatesExplorerService,
    ScalarsExplorerService,
    GraphQLAstExplorer,
    GraphQLTypesLoader,
    GraphQLSchemaBuilder,
  ],
})
class AppModule {}

describe('explorers', () => {
  let resolversExplorer: ResolversExplorerService;
  let app: INestApplicationContext;

  beforeEach(async () => {
    app = await NestFactory.createApplicationContext(AppModule);

    resolversExplorer = app.get(ResolversExplorerService);
  });

  it('should return resolvers', () => {
    const flatMapSpy = jest.spyOn(resolversExplorer, 'flatMap');

    const resolvers = resolversExplorer.explore();

    console.log(resolvers);
    expect(flatMapSpy).toHaveBeenCalledWith({
      lol: ''
    });
  })
});