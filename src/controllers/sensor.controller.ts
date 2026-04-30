import { Request, Response } from 'express';
import { sensorService } from '../services/sensor.service';
import { errorHandler } from '../utils/error.handler';
import { successResponse, createdResponse, noContentResponse } from '../utils/response.helper';
import { CreateSensorDto, UpdateSensorDto, SensorParamsDto } from '../dtos/sensor.dto';

export class SensorController {
  async getAll(req: Request, res: Response) {
    try {
      const sensores = await sensorService.findAll();
      return successResponse(res, sensores);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const params = SensorParamsDto.parse(req.params);
      const sensor = await sensorService.findById(Number(params.id));
      return successResponse(res, sensor);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = CreateSensorDto.parse(req.body);
      const sensor = await sensorService.create(data);
      return createdResponse(res, sensor, 'Sensor creado exitosamente');
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const params = SensorParamsDto.parse(req.params);
      const data = UpdateSensorDto.parse(req.body);
      const sensor = await sensorService.update(Number(params.id), data);
      return successResponse(res, sensor, 200, 'Sensor actualizado exitosamente');
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const params = SensorParamsDto.parse(req.params);
      await sensorService.delete(Number(params.id));
      return noContentResponse(res);
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}

export const sensorController = new SensorController();