import { Application } from "express";
import { LecturaSensorController } from "../controllers/lectura_sensor.controller";

export class LecturaRoutes {

    public lecturaController: LecturaSensorController = new LecturaSensorController();

    public routes(app: Application): void {

        app.route("/lecturas").get(this.lecturaController.getAll);
        app.route("/lecturas").post(this.lecturaController.create);

    }
}