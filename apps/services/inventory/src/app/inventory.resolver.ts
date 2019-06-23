import { Resolver, ResolveReference } from '@nestjs/graphql';

const inventory = [
  { upc: "1", inStock: true },
  { upc: "2", inStock: false },
  { upc: "3", inStock: true }
];

@Resolver()
export class InventoryResolver {
  @Resolver('Product')
  @ResolveReference()
  product(object) {
    return {
      ...object,
      ...inventory.find(product => product.upc === object.upc),
    };
  }

  @Resolver('Product')
  shippingEstimate(product) {
    // free for expensive items
    if (product.price > 1000) return 0;
    // estimate is based on weight
    return product.weight * 0.5;
  }
}
