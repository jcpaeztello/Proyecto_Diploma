import { Request, Response } from "express";
import {Luminaria, LuminariaI } from "../models/luminaria";

export class LuminariaController {

    public async getAll(req: Request, res: Response) {
        const Luminarias = await Luminaria.findAll();
        res.json(Luminarias);
    }

    public async create(req: Request, res: Response) {
        const luminaria = await Luminaria.create(req.body);
        res.json(luminaria);
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params;

        await Luminaria.update(req.body, {
            where: { id_luminaria: id }
        });

        res.json({ msg: "Luminaria actualizada" });
    }
}