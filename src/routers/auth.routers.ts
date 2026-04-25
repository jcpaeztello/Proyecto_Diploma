
import { login, register } from "../controllers/auth.controller";

export class AuthRoutes {
    public routes(app: any): void {
        app.route("/auth/login").post(login);
        app.route("/auth/register").post(register);
    }
}