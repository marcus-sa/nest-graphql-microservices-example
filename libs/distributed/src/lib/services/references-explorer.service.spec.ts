import { INestApplicationContext, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Resolver } from '@nestjs/graphql';
import { ReferencesExplorerService } from './references-explorer.service';
import { ResolveReference } from '../decorators';
import { MetadataScanner } from '@nestjs/core/metadata-scanner';
import { GRAPHQL_MODULE_OPTIONS } from '@nestjs/graphql/dist/graphql.constants';

@Resolver()
class AccountsResolver {
  @Resolver('User')
  @ResolveReference()
  user() {}
}

@Module({
  providers: [
    {
      provide: GRAPHQL_MODULE_OPTIONS,
      useValue: {},
    },
    AccountsResolver,
    MetadataScanner,
    ReferencesExplorerService,
  ],
})
class AppModule {}

describe('ReferencesExplorerService', () => {
  let app: INestApplicationContext;
  let referencesExplorer: ReferencesExplorerService;

  beforeEach(async () => {
    app = await NestFactory.createApplicationContext(AppModule);
    referencesExplorer = app.get(ReferencesExplorerService);
  });

  describe('explore', () => {
    it('should return User with __resolveReference', () => {
      const resolvers = referencesExplorer.explore();

      expect(resolvers).toEqual({
        User: {
          __resolveReference: expect.any(Function),
        }
      });
      expect(resolvers).toMatchSnapshot();
    });
  });
});