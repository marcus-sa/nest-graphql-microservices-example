import { NestFactory } from '@nestjs/core';

import { ReviewsModule } from './app/reviews.module';

(async () => {
  const app = await NestFactory.create(ReviewsModule);
  await app.listen(4001);
})();
