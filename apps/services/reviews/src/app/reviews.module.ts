import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';

import { ReviewsResolver } from './reviews.resolver';
import { join } from 'path';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      typePaths: [join(__dirname, '**/*.graphql')]
    }),
  ],
  providers: [ReviewsResolver],
})
export class ReviewsModule {}
