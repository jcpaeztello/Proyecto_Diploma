import { Request, Response } from "express";
import { Usuario, UsuarioI } from "../models/usuario";

export class UsuarioController {

    public async test(req: Request, res: Response) {
        try {
            res.send("Ruta de prueba Usuario");
        } catch (error) {
            res.status(500).json({ msg: "Error interno" });
        }
    }

    // Obtener todos los usuarios
    public async getAllUsuarios(req: Request, res: Response) {
        try {

            const usuarios: UsuarioI[] = await Usuario.findAll();

            res.status(200).json({ usuarios });

        } catch (error) {

            res.status(500).json({ msg: "Error al obtener usuarios" });

        }
    }

    // Obtener un usuario por ID
    public async getOneUsuario(req: Request, res: Response) {

        const { id } = req.params;

        try {

            const usuario: UsuarioI | null = await Usuario.findOne({
                where: { id }
            });

            if (usuario) {

                res.status(200).json({ usuario });

            } else {

                res.status(404).json({ msg: "Usuario no encontrado" });

            }

        } catch (error) {

            res.status(500).json({ msg: "Error interno" });

        }

    }

    // Crear usuario
    public async createUsuario(req: Request, res: Response) {

        const {
            nombre,
            correo,
            contraseña
            
        } = req.body;

        try {

            let body: UsuarioI = {
                nombre,
                correo,
                contraseña,
                
            }

            const usuario: UsuarioI = await Usuario.create({ ...body });

            res.status(200).json({ usuario });

        } catch (error) {

            res.status(500).json({ msg: "Error al crear usuario" });

        }

    }

    // Actualizar usuario
    public async updateUsuario(req: Request, res: Response) {

        const id = Number(req.params.id);

        const {
            nombre,
            correo,
            contraseña
        } = req.body;

        try {

            let body: UsuarioI = {
                nombre,
                correo,
                contraseña
            }

            const usuarioExist: UsuarioI | null = await Usuario.findByPk(id);

            if (!usuarioExist) {
                return res.status(404).json({ msg: "Usuario no existe" });
            }

            await Usuario.update(body, {
                where: { id }
            });

            const usuario: UsuarioI | null = await Usuario.findByPk(id);

            if (usuario) {
                return res.status(200).json({ usuario });
            }

        } catch (error) {

            res.status(500).json({ msg: "Error al actualizar usuario" });

        }

    }

    // Eliminar usuario
    public async deleteUsuario(req: Request, res: Response) {

        const id = Number(req.params.id);

        try {

            const usuarioExist: UsuarioI | null = await Usuario.findByPk(id);

            if (!usuarioExist) {
                return res.status(404).json({ msg: "Usuario no existe" });
            }

            await Usuario.destroy({
                where: { id }
            });

            res.status(200).json({ msg: "Usuario eliminado correctamente" });

        } catch (error) {

            res.status(500).json({ msg: "Error al eliminar usuario" });

        }

    }

}