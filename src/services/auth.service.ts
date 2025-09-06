import { Context, ServiceBroker } from "moleculer";

export const AuthService = new ServiceBroker();

AuthService.createService({
  name: "auth",
  actions: {
    async authUser(ctx: Context<AuthUser>) {
      const { username, password } = ctx.params;

      if (username === "admin" && password === "admin") {
        return {
          success: true,
          message: "Authentication successful",
        };
      } else {
        return {
          success: false,
          message: "Authentication failed",
        };
      }
    },
  },
});

interface AuthUser {
  username: string;
  password: string;
}
