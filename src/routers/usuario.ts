import { Application } from "express";
import { UsuarioController } from "../controllers/usuario.controller";

export class UsuarioRoutes {

    public usuarioController: UsuarioController = new UsuarioController();

    public routes(app: Application): void {

        app.route("/usuarios").get(this.usuarioController.getAllUsuarios);
        app.route("/usuarios/:id").get(this.usuarioController.getOneUsuario);
        app.route("/usuarios").post(this.usuarioController.createUsuario);
        app.route("/usuarios/:id").put(this.usuarioController.updateUsuario);
        app.route("/usuarios/:id").delete(this.usuarioController.deleteUsuario);

    }
}