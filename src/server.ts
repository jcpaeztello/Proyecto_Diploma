import { App } from "./config/index";

async function main() {
  const app = new App(process.env.PORT || 21674);
  await app.listen();
}

main();
