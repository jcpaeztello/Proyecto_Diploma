"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispositivoRoutes = void 0;
const dispositivos_controller_1 = require("../controllers/dispositivos.controller");
class DispositivoRoutes {
    constructor() {
        this.DispositivoController = new dispositivos_controller_1.DispositivoController();
    }
    routes(app) {
        app.route("/dispositivos/test").get(this.DispositivoController.test);
        app.route("/dispositivo").get(this.DispositivoController.getAllDispositivos);
        app.route("/dispositivos").post(this.DispositivoController.createDispositivo);
        app.route("/dispositivos/:id").put(this.DispositivoController.updateDispositivo);
        app.route("/dispositivos/:id").delete(this.DispositivoController.deleteDispositivo);
        app.route("/dispositivos/:id").get(this.DispositivoController.getOneDispositivo);
    }
}
exports.DispositivoRoutes = DispositivoRoutes;
