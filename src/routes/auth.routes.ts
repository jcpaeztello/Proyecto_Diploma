import { Application } from 'express';
import { authController } from '../controllers/auth.controller';

export class AuthRoutes {
  routes(app: Application): void {
    app.route('/auth/login').post(authController.login.bind(authController));
    app.route('/auth/register').post(authController.register.bind(authController));
  }
}