import { Request, Response, Application } from "express";
import { getEstadoLuminarias } from "../controllers/estado_luminaria.controller";

export class EstadoLuminariaRoutes {

    public routes(app: Application): void {

        app.route("/estado-luminarias").get(getEstadoLuminarias);

    }
    

}