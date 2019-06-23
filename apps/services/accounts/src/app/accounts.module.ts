import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { join } from 'path';

import { AccountsResolver } from './accounts.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: [join(__dirname, '**/*.graphql')]
    }),
  ],
  providers: [AccountsResolver],
})
export class AccountsModule {}
