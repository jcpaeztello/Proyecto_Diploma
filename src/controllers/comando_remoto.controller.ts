import { Request, Response } from "express";
import { ComandoRemoto } from "../models/comando_remoto";

export class ComandoController {

    public async enviarComando(req: Request, res: Response) {
        const comando = await ComandoRemoto.create(req.body);
        res.json(comando);
    }

    public async getComandos(req: Request, res: Response) {
        const comandos = await ComandoRemoto.findAll();
        res.json(comandos);
    }

}