import { Application } from "express";
import { LuminariaController } from "../controllers/luminaria.controller";

export class LuminariaRoutes {

    public luminariaController: LuminariaController = new LuminariaController();

    public routes(app: Application): void {

        app.route("/luminarias").get(this.luminariaController.getAll);
        app.route("/luminarias").post(this.luminariaController.create);
        app.route("/luminarias/:id").get(this.luminariaController.getById);
        app.route("/luminarias/:id").put(this.luminariaController.update);
        app.route("/luminarias/:id").delete(this.luminariaController.delete);

    }
}