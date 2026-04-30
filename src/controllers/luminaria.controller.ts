import { Request, Response } from 'express';
import { luminariaService } from '../services/luminaria.service';
import { errorHandler } from '../utils/error.handler';
import { successResponse, createdResponse, noContentResponse } from '../utils/response.helper';
import { CreateLuminariaDto, UpdateLuminariaDto, LuminariaParamsDto } from '../dtos/luminaria.dto';

export class LuminariaController {
  async getAll(req: Request, res: Response) {
    try {
      const luminarias = await luminariaService.findAll();
      return successResponse(res, luminarias);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const params = LuminariaParamsDto.parse(req.params);
      const luminaria = await luminariaService.findById(Number(params.id));
      return successResponse(res, luminaria);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = CreateLuminariaDto.parse(req.body);
      const luminaria = await luminariaService.create(data);
      return createdResponse(res, luminaria, 'Luminaria creada');
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const params = LuminariaParamsDto.parse(req.params);
      const data = UpdateLuminariaDto.parse(req.body);
      const luminaria = await luminariaService.update(Number(params.id), data);
      return successResponse(res, luminaria);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const params = LuminariaParamsDto.parse(req.params);
      await luminariaService.delete(Number(params.id));
      return noContentResponse(res);
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}

export const luminariaController = new LuminariaController();