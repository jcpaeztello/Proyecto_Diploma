import { where } from 'sequelize';
import { Request, Response } from 'express';
import { Control, ControlI } from '../models/contro_usuario';


export class ControlController {

    // Método de prueba
    public async test(req: Request, res: Response) {
        try {
            res.send('Metodo test del sistema de control de alumbrado IoT');
        } catch (error) {
            res.status(500).json({ msg: "Error interno" });
        }
    }

    // Obtener todos los registros de control
    public async getAllControl(req: Request, res: Response){
        try {
            const control: ControlI[] = await Control.findAll()
            res.status(200).json({control})
        } catch (error) {
            res.status(500).json({msg:"Error Internal"})
        }
    }


    // Crear un registro de control (encender o apagar luz)
    public async createControl(req: Request, res: Response) {

        const {
            accion, fecha
        } = req.body;

        try {

            let body: ControlI = {
                accion,
                fecha
            };

            const control: ControlI = await Control.create({ ...body });

            res.status(200).json({
                msg: "Accion registrada correctamente",
                control
            });

        } catch (error) {
            res.status(500).json({ msg: "Error interno" });
        }
    }

    // Actualizar registro de control
    public async updateControl(req: Request, res: Response) {

        const pk = Number(req.params.id);

        const {
            accion, fecha
        } = req.body;

        try {

            let body: ControlI = {
                accion,
                fecha
            };

            const controlExist: ControlI | null = await Control.findByPk(pk);

            if (!controlExist)
                return res.status(404).json({ msg: "El registro no existe" });

            await Control.update(body, {
                where: { id: pk }
            });

        } catch (error) {
            return res.status(500).json({ msg: "Error interno" });
        }

        const control: ControlI | null = await Control.findByPk(pk);

        if (control) {
            return res.status(200).json({ control });
        }
    }

    // Eliminar registro de control
    public async deleteControl(req: Request, res: Response) {

        const pk = Number(req.params.id);

        try {

            const controlExist: ControlI | null = await Control.findByPk(pk);

            if (!controlExist)
                return res.status(404).json({ msg: "El registro no existe" });

            await Control.destroy({
                where: { id: pk }
            });

            res.status(200).json({ msg: "Registro eliminado correctamente" });

        } catch (error) {
            res.status(500).json({ msg: "Error interno" });
        }
    }

    // Obtener un registro específico
    public async getOneControl(req: Request, res: Response) {

        const { id: idParam } = req.params;

        try {

            const control: ControlI | null = await Control.findOne({
                where: { id: idParam }
            });

            if (control) {
                res.status(200).json({ control });
            } else {
            }
        }
        finally {
        }
    }

}



