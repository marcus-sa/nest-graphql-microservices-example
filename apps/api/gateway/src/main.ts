import { NestFactory } from '@nestjs/core';

import { GraphqlDistributedGatewayModule } from '@ngme/distributed';
import { environment } from './environments/environment';

(async () => {
  const app = await NestFactory.create(
    GraphqlDistributedGatewayModule.forRoot(
      environment.gateway,
    ),
  );
  await app.listen(3000);
})();
