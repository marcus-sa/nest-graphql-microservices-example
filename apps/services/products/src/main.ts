import { NestFactory } from '@nestjs/core';

import { ProductsModule } from './app/products.module';

(async () => {
  const app = await NestFactory.create(ProductsModule);
  await app.listen(4000);
})();
