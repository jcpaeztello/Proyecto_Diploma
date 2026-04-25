import { Request, Response, Application } from "express";
import { getEstadoBaterias } from "../controllers/estado_bateria.controller";

export class EstadoBateriaRoutes {

    public routes(app: Application): void {

        app.route("/estado").get(getEstadoBaterias);

    }

}