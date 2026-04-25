import { where } from 'sequelize';
import { Request, Response } from 'express';
import { Dispositivo, DispositivoI } from '../models/dispositivos';


export class DeviceController {
    public async test(req: Request, res: Response){
        try {
            res.send('hola, metodo test para Dispositivo')
        } catch (error) {

        }
    }

    // Mostrar todos los dispositivos
        public async getAllDispositivos(req: Request, res: Response){
            try {
                const dispositivos: DispositivoI[] = await Dispositivo.findAll()
                res.status(200).json({dispositivos})
            } catch (error) {
                res.status(500).json({msg:"Error Internal"})
            }
        }
             
    // Crear dispositivo
    public async createDispositivo(req: Request, res: Response){
        const {
            nombreDispositivo,
           ubicacionDispositivo,
          estadoDispositivo,
           modoDispositivo
        } = req.body;

        try{
            let body: DispositivoI = {
                nombreDispositivo,
                ubicacionDispositivo,
               estadoDispositivo,
                modoDispositivo
            }

            const dispositivo: DispositivoI = await Dispositivo.create({...body});
            res.status(200).json({dispositivo});

        } catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }

    // Actualizar dispositivo
    public async updateDispositivo(req: Request, res: Response){
        const pk = Number(req.params.id);

        const {
            nombreDispositivo,
            ubicacionDispositivo,
           estadoDispositivo,
            modoDispositivo
        } = req.body;

        try{

            let body: DispositivoI = {
                nombreDispositivo,
                ubicacionDispositivo,
               estadoDispositivo,
                modoDispositivo
            }

            const dispositivoExist: DispositivoI | null = await Dispositivo.findByPk(pk);

            if(!dispositivoExist) return res.status(500).json({msg:"El dispositivo no existe"})

            await Dispositivo.update(body,{
                where:{id:pk}
            })

        } catch (error){
            res.status(500).json({msg:"Error Internal"})
        }

        const dispositivo: DispositivoI | null = await Dispositivo.findByPk(pk)

        if(dispositivo) return res.status(200).json({dispositivo})
    }

    // Eliminar dispositivo
    public async deleteDispositivo(req: Request, res: Response){
        const pk = Number(req.params.id);
        try{

            const dispositivoExist: DispositivoI | null = await Dispositivo.findByPk(pk)

            if(!dispositivoExist) return res.status(500).json({msg:"El dispositivo no existe"})

            await Dispositivo.destroy({
                where:{id:pk}
            })

            res.status(200).json({msg:"Dispositivo eliminado"})

        } catch (error){
            res.status(500).json({msg:"Error Internal"})
        }
    }

    // Mostrar un dispositivo
    public async getOneDispositivo(req: Request, res: Response){
        const {id:idParam} = req.params

        try{

            const dispositivo: DispositivoI | null = await Dispositivo.findOne({
                where:{
                    id:idParam
                }
            })

            if(dispositivo){
                res.status(200).json({dispositivo})
            }else{
                return res.status(300).json({msg:"El dispositivo no existe"})
            }

        } catch (error){
            res.status(500).json({msg:"Error Internal"})
        }
    }
}