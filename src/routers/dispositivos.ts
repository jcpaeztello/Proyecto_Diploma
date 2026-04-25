import { Request, Response, Application, Router } from "express";

import { DispositivoController } from '../controllers/dispositivos.controller';

export class DispositivoRoutes {
    public DispositivoController: DispositivoController =  new DispositivoController();

    public routes(app: Application): void {
        app.route("/dispositivos/test").get(this.DispositivoController.test)
        app.route("/dispositivo").get(this.DispositivoController.getAllDispositivos)
        app.route("/dispositivos").post(this.DispositivoController.createDispositivo)
        app.route("/dispositivos/:id").put(this.DispositivoController.updateDispositivo)
        app.route("/dispositivos/:id").delete(this.DispositivoController.deleteDispositivo)
        app.route("/dispositivos/:id").get(this.DispositivoController.getOneDispositivo)


    }
}
