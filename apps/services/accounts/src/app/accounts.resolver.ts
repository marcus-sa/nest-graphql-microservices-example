import { Query, Resolver, ResolveReference } from '@nestjs/graphql';

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
    return users;
  }

  @Resolver('User')
  @ResolveReference()
  user({ id }) {
    return users.find(user => user.id === id);
  }
}
