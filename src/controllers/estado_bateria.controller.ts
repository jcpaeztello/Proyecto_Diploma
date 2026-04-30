import { Request, Response } from "express";
import {EstadoBateria} from "../models/estado_bateria";

export const getEstadoBaterias = async (req: Request, res: Response) => {

  try {

    const estados = await EstadoBateria.findAll();

    res.json(estados);

  } catch (error) {

    res.status(500).json({
      msg: "Error al obtener estados de batería"
    });

  }

};