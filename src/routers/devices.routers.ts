import { Application } from "express";

import { DeviceController } from '../controllers/devices.controller';
import { authMiddleware } from "../middleware/authMiddleware";

export class DeviceRoutes {
    public deviceController: DeviceController =  new DeviceController();

    public routes(app: Application): void {
        app.route("/devices/test").get(this.deviceController.test)
        app.route("/devices").get(authMiddleware, this.deviceController.getAllDispositivos)
        app.route("/devices").post(authMiddleware, this.deviceController.createDispositivo)
        app.route("/devices/:id").put(authMiddleware, this.deviceController.updateDispositivo)
        app.route("/devices/:id").delete(authMiddleware, this.deviceController.deleteDispositivo)
        app.route("/devices/:id").get(authMiddleware, this.deviceController.getOneDispositivo)
    }
}
