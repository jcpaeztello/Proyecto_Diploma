import { Request, Response, Application, Router } from "express";

import { DatosController } from '../controllers/datos_sensor.controller';

export class DatosRoutes {
    public datosController: DatosController =  new DatosController();

    public routes(app: Application): void {
        app.route("/dato/test").get(this.datosController.test)
        app.route("/datos").get(this.datosController.getAllDatos)
        app.route("/dato").post(this.datosController.createDatos)
        app.route("/dato/:id").put(this.datosController.updateDatos)
        app.route("/dato/:id").delete(this.datosController.deleteDatos)
        app.route("/dato/:id").get(this.datosController.getOneDatos)


    }
}
