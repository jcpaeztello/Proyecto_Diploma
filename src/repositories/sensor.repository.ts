import { Sensor } from '../models/sensor';

export interface UpdateSensorData {
  tipo_sensor?: string;
  descripcion?: string;
  id_dispositivo?: number;
  unidad_medida?: string;
}

export class SensorRepository {
  async findAll(): Promise<Sensor[]> {
    return Sensor.findAll();
  }

  async findById(id: number): Promise<Sensor | null> {
    return Sensor.findByPk(id);
  }

  async create(data: any): Promise<Sensor> {
    return Sensor.create(data);
  }

  async update(id: number, data: UpdateSensorData): Promise<Sensor | null> {
    const sensor = await Sensor.findByPk(id);
    if (!sensor) return null;

    await sensor.update(data);
    return sensor;
  }

  async delete(id: number): Promise<boolean> {
    const sensor = await Sensor.findByPk(id);
    if (!sensor) return false;

    await sensor.destroy();
    return true;
  }
}

export const sensorRepository = new SensorRepository();