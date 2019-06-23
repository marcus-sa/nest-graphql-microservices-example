import { ResolveReference, ResolveProperty, Resolver } from '@nestjs/graphql';

const usernames = [
  { id: "1", username: "@ada" },
  { id: "2", username: "@complete" }
];

const reviews = [
  {
    id: "1",
    authorID: "1",
    product: { upc: "1" },
    body: "Love it!"
  },
  {
    id: "2",
    authorID: "1",
    product: { upc: "2" },
    body: "Too expensive."
  },
  {
    id: "3",
    authorID: "2",
    product: { upc: "3" },
    body: "Could be better."
  },
  {
    id: "4",
    authorID: "2",
    product: { upc: "1" },
    body: "Prefer something else."
  }
];

@Resolver('Review')
export class ReviewsResolver {
  @ResolveProperty()
  author(review) {
    return { __typename: 'User', id: review.authorID };
  }

  @Resolver('User')
  @ResolveProperty('reviews')
  productReviews(product) {
    return reviews.filter(review => review.product.upc === product.upc);
  }

  @Resolver('User')
  @ResolveProperty('reviews')
  userReviews(user) {
    return reviews.filter(review => review.authorID === user.id);
  }

  @Resolver('User')
  @ResolveProperty()
  numberOfReviews(user) {
    return reviews.filter(review => review.authorID === user.id).length;
  }

  @Resolver('User')
  @ResolveProperty()
  username(user) {
    const found = usernames.find(username => username.id === user.id);
    return found ? found.username : null;
  }
}
