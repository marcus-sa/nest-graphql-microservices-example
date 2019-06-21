import { NestFactory } from '@nestjs/core';

import { AccountsModule } from './app/accounts.module';

(async () => {
  const app = await NestFactory.create(AccountsModule);
  await app.listen(4001);
})();
