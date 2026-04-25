"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const control_usuario_1 = require("./control_usuario");
const datos_sensor_1 = require("./datos_sensor");
const dispositivos_1 = require("./dispositivos");
class Routes {
    constructor() {
        this.controlRoutes = new control_usuario_1.ControlRoutes();
        this.datosRoutes = new datos_sensor_1.DatosRoutes();
        this.dispositivosRoutes = new dispositivos_1.DispositivoRoutes();
    }
}
exports.Routes = Routes;
