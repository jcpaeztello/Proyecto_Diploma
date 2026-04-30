import { Request, Response } from 'express';
import { usuarioService } from '../services/usuario.service';
import { errorHandler } from '../utils/error.handler';
import { successResponse, createdResponse, noContentResponse } from '../utils/response.helper';
import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioParamsDto } from '../dtos/usuario.dto';

export class UsuarioController {
  async getAll(req: Request, res: Response) {
    try {
      const usuarios = await usuarioService.findAll();
      return successResponse(res, usuarios);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const params = UsuarioParamsDto.parse(req.params);
      const id: number = Number(params.id);
      const usuario = await usuarioService.findById(id);
      return successResponse(res, usuario);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = CreateUsuarioDto.parse(req.body);
      const usuario = await usuarioService.create(data);
      return createdResponse(res, usuario, 'Usuario creado exitosamente');
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const params = UsuarioParamsDto.parse(req.params);
      const data = UpdateUsuarioDto.parse(req.body) as any;
      const id: number = Number(params.id);
      const usuario = await usuarioService.update(id, data);
      return successResponse(res, usuario, 200, 'Usuario actualizado exitosamente');
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const params = UsuarioParamsDto.parse(req.params);
      const id: number = Number(params.id);
      await usuarioService.delete(id);
      return noContentResponse(res);
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}

export const usuarioController = new UsuarioController();