import { User, UserService } from "./services/user.service";
import { EmailService } from "./services/email.service";
import { AuthService } from "./services/auth.service";

async function startApp() {
  // Start services
  const user = await UserServiceSimulation();
  await EmailServiceSimulation(user);
  await AuthServiceSimulation(user);
}

startApp();

async function UserServiceSimulation(): Promise<User> {
  await UserService.start();

  try {
    // Simulate creating a user
    const newUser = (await UserService.call("users.createUser", {
      username: "john_doe",
      email: "john@email.com",
    })) as User;
    console.log("New user created:", newUser);

    // Simulate fetching all users
    const allUsers = await UserService.call("users.getUsers");
    console.log("All users:", allUsers);

    return newUser;
  } catch (error) {
    console.error(error);
  } finally {
    // Stop services
    await UserService.stop();

    return { id: 0, username: "", email: "" };
  }
}

async function EmailServiceSimulation(user: User) {
  try {
    const emailSent = await EmailService.call("emails.sendEmail", {
      recipient: user.email,
      subject: "Welcome to our platform!",
      content: "Thank you for registering",
    });

    console.log(emailSent);
  } catch (error) {
    console.error(error);
  } finally {
    // Stop services
    await EmailService.stop();
  }
}

async function AuthServiceSimulation(user: User) {
  const authResult = await AuthService.call("auth.authUser", {
    username: user.username,
    password: "password123",
  });

  console.log("Auth result:", authResult);

  await AuthService.stop();
}
