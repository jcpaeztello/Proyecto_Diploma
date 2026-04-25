import { Application } from "express";

import { getAllReadings, createReading, updateReading, deleteReading, getReadingById, getReadingsByDeviceId } from '../controllers/reading.controller';
import { authMiddleware } from "../middleware/authMiddleware";

export class ReadingRoutes {

    public routes(app: Application): void {
        app.route("/readings").get(authMiddleware, getAllReadings)
        app.route("/readings").post(authMiddleware, createReading)
        app.route("/readings/:id").put(authMiddleware, updateReading)
        app.route("/readings/:id").delete(authMiddleware, deleteReading)
        app.route("/readings/:id").get(authMiddleware, getReadingById)
        app.route("/readings/device/:deviceId").get(authMiddleware, getReadingsByDeviceId)
    }
}