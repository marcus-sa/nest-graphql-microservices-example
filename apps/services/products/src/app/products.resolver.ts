import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';

const products = [
  {
    upc: "1",
    name: "Table",
    price: 899,
    weight: 100
  },
  {
    upc: "2",
    name: "Couch",
    price: 1299,
    weight: 1000
  },
  {
    upc: "3",
    name: "Chair",
    price: 54,
    weight: 50
  }
];

@Resolver('Product')
export class ProductsResolver {
  @ResolveReference()
  product({ upc }) {
    return products.find(product => product.upc === upc);
  }

  @Query()
  topProducts(
    @Args('first') first: number,
  ) {
    return products.slice(0, first);
  }
}
