import { App } from './config/index';

  async function main() {
      const app = new App(21674);
    await app.listen();
}

main();
