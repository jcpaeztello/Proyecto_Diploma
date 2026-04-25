import { Request, Response } from "express";
import {Alerta} from "../models/alerta";

export const getAlertas = async (req: Request, res: Response) => {

  try {

    const alertas = await Alerta.findAll();

    res.json(alertas);

  } catch (error) {

    res.status(500).json({
      msg: "Error al obtener alertas"
    });

  }

};