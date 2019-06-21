import { Module } from '@nestjs/common';
import { GraphqlDistributedModule } from '@ngme/distributed';

import { ReviewsResolver } from './reviews.resolver';
import { join } from 'path';

@Module({
  imports: [
    GraphqlDistributedModule.forRoot({
      typePaths: [join(__dirname, '**/*.graphql')]
    }),
  ],
  providers: [ReviewsResolver],
})
export class ReviewsModule {}
