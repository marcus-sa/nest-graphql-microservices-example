import { NestFactory } from '@nestjs/core';

import { GatewayModule } from './app/gateway.module';

(async () => {
  const app = await NestFactory.create(GatewayModule);
  await app.listen(3000);
})();
