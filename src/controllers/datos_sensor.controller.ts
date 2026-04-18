import {  Request, Response } from 'express';
import { Sequelize } from "sequelize";

import { Datos, DatosI } from '../models/datos_sensor';
import { database } from '../database/db';

export class DatosController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllDatos(req: Request, res:Response){
        try {
            const datos: DatosI[] = await Datos.findAll(
                {
                  where:{
                    estado_luz:'activo',
                  }
                }
            ) // select * from clientes;
            res.status(200).json({Datos})
        } catch (error) {

        }
    }

    public async createDatos(req: Request, res:Response){

        const {nivel_luz, fecha, estado_luz} = req.body;
       
        try{
       
          let body: DatosI = {
            nivel_luz,
            fecha,
            estado_luz
          }
       
          const datos: DatosI = await Datos.create({...body});
       
          res.status(200).json({
            msg:"Dato del sensor guardado",
            datos
          })
       
        }catch(error){
       
          res.status(500).json({msg:"Error interno del servidor"})
       
        }
       
       }

    public async updateDatos(req: Request, res:Response){
        const pk = Number(req.params.id);
        const {id,
            nivel_luz,
            fecha,
            estado_luz,
        }=req.body;
        

        try{
            let body: DatosI = {
                nivel_luz,
                fecha,
                estado_luz,
            }
            const DatosExist: DatosI | null = await Datos.findByPk(pk);
            if(!DatosExist) return res.status(500).json({msg:"El dato no existe"})
            await Datos.update(body, {
                where: {id:pk}
            });
           
        } catch (error){
            res.status(500).json({msg: "Error Internal"})

        }
        const datos:DatosI|null = await Datos.findByPk(pk);
        if(datos) return res.status(200).json({datos});
    }

    //Eliminar cliente
    public async deleteDatos(req: Request, res: Response){
        const pk = Number(req.params.id);
        try {
            const datosExist: DatosI | null = await Datos.findByPk(pk);
            if(!datosExist) return res.status(500).json({msg:"El cliente no existe"})
            await Datos.destroy({
                where:{id:pk}
            })
            res.status(200).json({msg:"Cliente eliminado"})
        } catch (error) {
            res.status(500).json
        }
    }

    //metodo mostrar un cliente
    public async getOneDatos(req: Request, res: Response){
        const { id: idParam } = req.params
        try{
            const datos:DatosI | null = await Datos.findOne({
                where: {
                    id: idParam,
                }
            })
            if(datos){
                res.status(200).json({datos})
            } else return res.status(300).json({msg: "El cliente no existe"})
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }
}