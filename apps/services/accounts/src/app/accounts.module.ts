import { Module } from '@nestjs/common';
import { GraphqlDistributedModule } from '@ngme/distributed';

import { AccountsResolver } from './accounts.resolver';
import { join } from 'path';

@Module({
  imports: [
    GraphqlDistributedModule.forRoot({
      typePaths: [join(__dirname, '**/*.graphql')]
    }),
  ],
  providers: [AccountsResolver],
})
export class AccountsModule {}
