import { Application } from "express";
import { TelemetryController } from "../controllers/telemetry.controller";
import { authMiddleware } from "../middleware/authMiddleware";
import { requireAnyRole } from "../middleware/roleMiddleware";

export class TelemetryRoutes {

    public telemetryController: TelemetryController = new TelemetryController();

    public routes(app: Application): void {

        // Endpoint público para simulador (sin autenticación)
        app.route("/api/solar/telemetry").post((req, res) => this.telemetryController.create(req, res));
        app.route("/api/solar/telemetry/public").post((req, res) => this.telemetryController.create(req, res));
        
        // Endpoints protegidos para usuarios autenticados
        app.route("/api/solar/telemetry").get((req, res, next) => authMiddleware(req, res, next), (req, res, next) => requireAnyRole(['Monitor', 'Operador', 'Admin'])(req, res, next), (req, res) => this.telemetryController.getAll(req, res));
        app.route("/api/solar/telemetry/debug").get((req, res, next) => authMiddleware(req, res, next), (req, res, next) => requireAnyRole(['Monitor', 'Operador', 'Admin'])(req, res, next), (req, res) => this.telemetryController.debug(req, res));
        app.route("/api/solar/telemetry/mock").get((req, res, next) => authMiddleware(req, res, next), (req, res, next) => requireAnyRole(['Monitor', 'Operador', 'Admin'])(req, res, next), (req, res) => this.telemetryController.mockData(req, res));

    }

}