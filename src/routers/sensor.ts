import { Application } from "express";
import { SensorController } from "../controllers/sensor.controller";

export class SensorRoutes {

    public sensorController: SensorController = new SensorController();

    public routes(app: Application): void {

        app.route("/sensores").get(this.sensorController.getAll);
        app.route("/sensores").post(this.sensorController.create);
        app.route("/sensores/:id").get(this.sensorController.getById);
        app.route("/sensores/:id").put(this.sensorController.update);
        app.route("/sensores/:id").delete(this.sensorController.delete);

    }
}
