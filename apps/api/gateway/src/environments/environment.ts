// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  gateway: {
    path: '/graphql',
    serviceList: [
      { name: 'accounts', url: 'http://localhost:4001/graphql' },
      { name: 'reviews', url: 'http://localhost:4002/graphql' },
      //{ name: 'products', url: 'http://localhost:4003/graphql' },
      //{ name: 'inventory', url: 'http://localhost:4004/graphql' },
    ],
  },
};
