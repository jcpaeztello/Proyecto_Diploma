import { Request, Response, Application } from "express";
import { getAlertas } from "../controllers/alerta.controller";

export class AlertaRoutes {

    public routes(app: Application): void {

        app.route("/alertas").get(getAlertas);

    }

}