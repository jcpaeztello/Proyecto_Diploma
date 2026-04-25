"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosRoutes = void 0;
const datos_sensor_controller_1 = require("../controllers/datos_sensor.controller");
class DatosRoutes {
    constructor() {
        this.datosController = new datos_sensor_controller_1.DatosController();
    }
    routes(app) {
        app.route("/dato/test").get(this.datosController.test);
        app.route("/datos").get(this.datosController.getAllDatos);
        app.route("/dato").post(this.datosController.createDatos);
        app.route("/dato/:id").put(this.datosController.updateDatos);
        app.route("/dato/:id").delete(this.datosController.deleteDatos);
        app.route("/dato/:id").get(this.datosController.getOneDatos);
    }
}
exports.DatosRoutes = DatosRoutes;
