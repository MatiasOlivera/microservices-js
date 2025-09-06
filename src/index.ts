import { UserService } from "./services/user.service";

async function startApp() {
  // Start services
  await UserServiceSimulation();
}

startApp();

async function UserServiceSimulation() {
  await UserService.start();

  try {
    // Simulate creating a user
    const newUser = await UserService.call("users.createUser", {
      username: "john_doe",
      email: "john@email.com",
    });
    console.log("New user created:", newUser);

    // Simulate fetching all users
    const allUsers = await UserService.call("users.getUsers");
    console.log("All users:", allUsers);
  } catch (error) {
    console.error(error);
  } finally {
    // Stop services
    await UserService.stop();
  }
}
