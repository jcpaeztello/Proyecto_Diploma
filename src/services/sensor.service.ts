import { sensorRepository } from '../repositories/sensor.repository';
import { NotFoundError } from '../utils/error.handler';
import { CreateSensorInput, UpdateSensorInput } from '../dtos/sensor.dto';

export interface SensorResponse {
  id_sensor: number;
  tipo_sensor: string;
  descripcion?: string;
  id_dispositivo?: number;
  unidad_medida?: string;
}

const toResponse = (sensor: any): SensorResponse => ({
  id_sensor: sensor.id_sensor,
  tipo_sensor: sensor.tipo_sensor,
  descripcion: sensor.descripcion,
  id_dispositivo: sensor.id_dispositivo,
  unidad_medida: sensor.unidad_medida,
});

export class SensorService {
  async findAll(): Promise<SensorResponse[]> {
    const sensores = await sensorRepository.findAll();
    return sensores.map(toResponse);
  }

  async findById(id: number): Promise<SensorResponse> {
    const sensor = await sensorRepository.findById(id);

    if (!sensor) {
      throw new NotFoundError('Sensor no encontrado');
    }

    return toResponse(sensor);
  }

  async create(data: CreateSensorInput): Promise<SensorResponse> {
    const newSensor = await sensorRepository.create(data);
    return toResponse(newSensor);
  }

  async update(id: number, data: UpdateSensorInput): Promise<SensorResponse> {
    const sensor = await sensorRepository.findById(id);

    if (!sensor) {
      throw new NotFoundError('Sensor no encontrado');
    }

    const updated = await sensorRepository.update(id, data);
    return toResponse(updated);
  }

  async delete(id: number): Promise<void> {
    const deleted = await sensorRepository.delete(id);

    if (!deleted) {
      throw new NotFoundError('Sensor no encontrado');
    }
  }
}

export const sensorService = new SensorService();