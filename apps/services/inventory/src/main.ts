import { NestFactory } from '@nestjs/core';

import { InventoryModule } from './app/inventory.module';

(async () => {
  const app = await NestFactory.create(InventoryModule);
  await app.listen(4000);
})();
