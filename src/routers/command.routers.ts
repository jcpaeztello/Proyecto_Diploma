import { Application } from "express";

import {
  getAllCommands,
  createCommand,
  updateCommand,
  deleteCommand,
  executeCommand,
  getCommandById,
  getCommandsByDeviceId,
  getPendingCommandsByDeviceId,
} from "../controllers/command.controller";
import { authMiddleware } from "../middleware/authMiddleware";

export class CommandRoutes {
  public routes(app: Application): void {
    app.route("/commands").get(authMiddleware, getAllCommands);
    app.route("/commands").post(authMiddleware, createCommand);
    app.route("/commands/:id").put(authMiddleware, updateCommand);
    app.route("/commands/:id").delete(authMiddleware, deleteCommand);
    app.route("/commands/:id").get(authMiddleware, getCommandById);
    app.route("/commands/:id/execute").post(authMiddleware, executeCommand);
    app
      .route("/commands/device/:deviceId")
      .get(authMiddleware, getCommandsByDeviceId);
    app
      .route("/commands/device/:deviceId/pending")
      .get(authMiddleware, getPendingCommandsByDeviceId);
  }
}