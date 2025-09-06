import { Context, ServiceBroker } from "moleculer";

export const UserService = new ServiceBroker();

function generateId() {
  return Math.floor(Math.random() * 1000) + 1;
}

const users: User[] = [];

UserService.createService({
  name: "users",
  actions: {
    async createUser(ctx: Context<User>) {
      const { username, email } = ctx.params;
      const user = { id: generateId(), username, email };
      users.push(user);
      return user;
    },

    async getUsers() {
      return users;
    },
  },
});

interface User {
  id: number;
  username: string;
  email: string;
}
