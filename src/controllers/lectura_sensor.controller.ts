import { Request, Response } from "express";
import { Lectura } from "../models/lectura_sensor";

export class LecturaSensorController {

    public async getAll(req: Request, res: Response) {
        const lecturas = await Lectura.findAll();
        res.json(lecturas);
    }

    public async create(req: Request, res: Response) {
        const lectura = await Lectura.create(req.body);
        res.json(lectura);
    }

}