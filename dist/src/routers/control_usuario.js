"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlRoutes = void 0;
const control_usuario_controller_1 = require("../controllers/control_usuario.controller");
class ControlRoutes {
    constructor() {
        this.controlController = new control_usuario_controller_1.ControlController();
    }
    routes(app) {
        app.route("/control/test").get(this.controlController.test);
        app.route("/control").get(this.controlController.getAllControl);
        app.route("/controls").post(this.controlController.createControl);
        app.route("/controls/:id").put(this.controlController.updateControl);
        app.route("/controls/:id").delete(this.controlController.deleteControl);
        app.route("/controls/:id").get(this.controlController.getAllControl);
    }
}
exports.ControlRoutes = ControlRoutes;
