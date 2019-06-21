import { Query, Resolver } from '@nestjs/graphql';

import { ResolveReference } from '@ngme/distributed';

const users = [
  {
    id: "1",
    name: "Ada Lovelace",
    birthDate: "1815-12-10",
    username: "@ada"
  },
  {
    id: "2",
    name: "Alan Turing",
    birthDate: "1912-06-23",
    username: "@complete"
  }
];

@Resolver()
export class AccountsResolver {
  @Query()
  me() {
    return users[0];
  }

  @Resolver('User')
  @ResolveReference()
  user({ id }: typeof users[0]) {
    return users.find(user => user.id === id);
  }
}
