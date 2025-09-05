import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

// Greeting service
broker.createService({
  name: "greeter",
  actions: {
    sayHello(ctx) {
      return `Hello, ${ctx.params.name || "World"}!`;
    },
  },
});

async function startApp() {
  await broker.start();
  const response = await broker.call("greeter.sayHello", { name: "Moleculer" });
  console.log(response);
  broker.stop();
}

startApp();
