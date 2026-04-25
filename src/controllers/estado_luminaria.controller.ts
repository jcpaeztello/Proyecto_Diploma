import { Request, Response } from "express";
import {EstadoLuminaria} from "../models/estado_luminaria";

export const getEstadoLuminarias = async (req: Request, res: Response) => {

  try {

    const estados = await EstadoLuminaria.findAll();

    res.json(estados);

  } catch (error) {

    res.status(500).json({
      msg: "Error al obtener estados de luminarias"
    });

  }
 
};