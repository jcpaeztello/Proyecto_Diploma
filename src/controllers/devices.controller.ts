import { where } from "sequelize";
import { Request, Response } from "express";
import { Device, DeviceI } from "../models/Device";

export class DeviceController {
  public async test(req: Request, res: Response) {
    try {
      res.send("hola, metodo test para Dispositivo");
    } catch (error) {}
  }

  // Mostrar todos los dispositivos
  public async getAll(req: Request, res: Response) {
    try {
      const devices: DeviceI[] = await Device.findAll();
      res.status(200).json({ devices });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  // Crear dispositivo
  public async create(req: Request, res: Response) {
    const { name, location, status, mode } = req.body;

    try {
      let body: DeviceI = {
        name,
        location,
        status,
        mode,
      };

      const device: DeviceI = await Device.create({ ...body });
      res.status(200).json({ device });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  // Actualizar dispositivo
  public async update(req: Request, res: Response) {
    const pk = Number(req.params.id);

    const { name, location, status, mode } = req.body;

    try {
      let body: DeviceI = {
        name,
        location,
        status,
        mode,
      };

      const deviceExist: DeviceI | null = await Device.findByPk(pk);

      if (!deviceExist)
        return res.status(404).json({ msg: "El dispositivo no existe" });

      await Device.update(body, {
        where: { id: pk },
      });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }

    const device: DeviceI | null = await Device.findByPk(pk);

    if (device) return res.status(200).json({ device });
  }

  // Eliminar dispositivo
  public async delete(req: Request, res: Response) {
    const pk = Number(req.params.id);
    try {
      const deviceExist: DeviceI | null = await Device.findByPk(pk);

      if (!deviceExist)
        return res.status(404).json({ msg: "El dispositivo no existe" });

      await Device.destroy({
        where: { id: pk },
      });

      res.status(200).json({ msg: "Dispositivo eliminado" });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  // Mostrar un dispositivo
  public async getOne(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const device: DeviceI | null = await Device.findOne({
        where: {
          id: idParam,
        },
      });

      if (device) {
        res.status(200).json({ device });
      } else {
        return res.status(404).json({ msg: "El dispositivo no existe" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }
}
