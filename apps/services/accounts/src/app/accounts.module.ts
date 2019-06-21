import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlDistributedModule } from '@ngme/distributed';

import { GqlAccountsConfigService } from './graphql-accounts-config.service';
import { AccountsResolver } from './accounts.resolver';
import { join } from 'path';

@Module({
  imports: [
    /*GraphQLModule.forRootAsync({
      useClass: GqlAccountsConfigService,
    }),*/
    GraphqlDistributedModule.forRoot({
      typePaths: [join(__dirname, '**/*.graphql')]
    }),
  ],
  providers: [AccountsResolver],
})
export class AccountsModule {}
