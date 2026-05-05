import { Request, Response } from "express";
import { bateriaService } from '../services/bateria.service';
import { errorHandler } from '../utils/error.handler';
import { successResponse, createdResponse, noContentResponse } from '../utils/response.helper';
import { CreateBateriaDto, UpdateBateriaDto, BateriaParamsDto } from '../dtos/bateria.dto';

export class BateriaController {

    public async getAll(req: Request, res: Response) {
        try {
            const baterias = await bateriaService.findAll();
            return successResponse(res, baterias);
        } catch (error) {
            return errorHandler(error, res);
        }
    }

    public async getById(req: Request, res: Response) {
        try {
            const params = BateriaParamsDto.parse(req.params);
            const bateria = await bateriaService.findById(Number(params.id));
            return successResponse(res, bateria);
        } catch (error) {
            return errorHandler(error, res);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const data = CreateBateriaDto.parse(req.body);
            const bateria = await bateriaService.create(data);
            return createdResponse(res, bateria, 'Batería creada exitosamente');
        } catch (error) {
            return errorHandler(error, res);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const params = BateriaParamsDto.parse(req.params);
            const data = UpdateBateriaDto.parse(req.body);
            const bateria = await bateriaService.update(Number(params.id), data);
            return successResponse(res, bateria, 200, 'Batería actualizada exitosamente');
        } catch (error) {
            return errorHandler(error, res);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const params = BateriaParamsDto.parse(req.params);
            await bateriaService.delete(Number(params.id));
            return noContentResponse(res);
        } catch (error) {
            return errorHandler(error, res);
        }
    }
}