import { Request, Response, Application, Router } from "express";

import { ControlController } from '../controllers/control_usuario.controller';

export class ControlRoutes {
    public controlController: ControlController =  new ControlController();

    public routes(app: Application): void {
        app.route("/control/test").get(this.controlController.test)
        app.route("/controlU").get(this.controlController.getAllControl)
        app.route("/control").post(this.controlController.createControl)
        app.route("/control/:id").put(this.controlController.updateControl)
        app.route("/control/:id").delete(this.controlController.deleteControl)
        app.route("/control/:id").get(this.controlController.getAllControl)


    }
}

