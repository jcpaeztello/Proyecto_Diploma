import { Request, Response, Application, Router } from "express";

import { ControlController } from '../controllers/control_usuario.controller';

export class ControlRoutes {
    public controlController: ControlController =  new ControlController();

    public routes(app: Application): void {
        app.route("/control/test").get(this.controlController.test)
        app.route("/control").get(this.controlController.getAllControl)
        app.route("/controls").post(this.controlController.createControl)
        app.route("/controls/:id").put(this.controlController.updateControl)
        app.route("/controls/:id").delete(this.controlController.deleteControl)
        app.route("/controls/:id").get(this.controlController.getAllControl)


    }
}

