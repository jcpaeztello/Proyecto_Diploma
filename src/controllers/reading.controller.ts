import { Request, Response } from "express";
import { Reading,  ReadingInstance} from "../models/Reading";

export const getAllReadings = async (req: Request, res: Response) => {
  try {
    const readings: ReadingInstance[] = await Reading.findAll({ include: ['Device'] });
    res.status(200).json({ readings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const createReading = async (req: Request, res: Response) => {
  const { value, deviceId } = req.body;

  try {
    let body: any = {
      value,
      device_id: deviceId,
    };

    const reading: ReadingInstance = await Reading.create({ ...body });
    res.status(200).json({ reading });
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const getReadingsByDeviceId = async (req: Request, res: Response) => {
  const deviceId = Number(req.params.deviceId);

  try {
    const readings: ReadingInstance[] = await Reading.findAll({
      where: { device_id: deviceId },
      include: ['Device'],
    });
    res.status(200).json({ readings });
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const deleteReading = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const readingExist: ReadingInstance | null = await Reading.findByPk(id);

    if (!readingExist)
      return res.status(404).json({ msg: "La lectura no existe" });

    await Reading.destroy({
      where: { id },
    });
    res.status(200).json({ msg: "Lectura eliminada" });
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const getReadingById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const reading: ReadingInstance | null = await Reading.findByPk(id, { include: ['Device'] });

    if (reading) {
      res.status(200).json({ reading });
    } else {
      return res.status(404).json({ msg: "La lectura no existe" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};

export const updateReading = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { value, deviceId } = req.body;

  try {
    let body: any = {
      value,
      device_id: deviceId,
    };

    const readingExist: ReadingInstance | null = await Reading.findByPk(id);

    if (!readingExist)
      return res.status(404).json({ msg: "La lectura no existe" });

    await Reading.update(body, {
      where: { id },
    });

    const reading: ReadingInstance | null = await Reading.findByPk(id, { include: ['Device'] });

    if (reading) return res.status(200).json({ reading });
  } catch (error) {
    res.status(500).json({ msg: "Error Internal" });
  }
};
