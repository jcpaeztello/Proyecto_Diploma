import { Request, Response } from "express";
import { Sensor } from "../models/sensor";

export class SensorController {

    public async getAll(req: Request, res: Response) {
        const sensores = await Sensor.findAll();
        res.json(sensores);
    }

    public async create(req: Request, res: Response) {
        const sensor = await Sensor.create(req.body);
        res.json(sensor);
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params;

        await Sensor.update(req.body, {
            where: { id_sensor: id }
        });

        res.json({ msg: "Sensor actualizado" });
    }

    public async delete(req: Request, res: Response) {
        const { id } = req.params;

        await Sensor.destroy({
            where: { id_sensor: id }
        });

        res.json({ msg: "Sensor eliminado" });
    }
}