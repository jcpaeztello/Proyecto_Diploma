import { Request, Response } from "express";
import { Bateria } from "../models/bateria";

export class BateriaController {

    public async getAll(req: Request, res: Response) {
        const baterias = await Bateria.findAll();
        res.json(baterias);
    }

    public async create(req: Request, res: Response) {
        const bateria = await Bateria.create(req.body);
        res.json(bateria);
    }

}