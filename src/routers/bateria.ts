import { Application } from "express";
import { BateriaController } from "../controllers/bateria.controller";

export class BateriaRoutes {

    public bateriaController: BateriaController = new BateriaController();

    public routes(app: Application): void {

        app.route("/baterias").get(this.bateriaController.getAll);
        app.route("/baterias").post(this.bateriaController.create);
        app.route("/baterias/:id").get(this.bateriaController.getById);
        app.route("/baterias/:id").put(this.bateriaController.update);
        app.route("/baterias/:id").delete(this.bateriaController.delete);

    }
}