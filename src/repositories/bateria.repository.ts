import { Bateria } from '../models/bateria';

export interface UpdateBateriaData {
  capacidad_ah?: number;
  voltaje?: number;
  estado?: string;
  id_panel?: number;
}

export class BateriaRepository {
  async findAll(): Promise<Bateria[]> {
    return Bateria.findAll();
  }

  async findById(id: number): Promise<Bateria | null> {
    return Bateria.findByPk(id);
  }

  async create(data: any): Promise<Bateria> {
    return Bateria.create(data);
  }

  async update(id: number, data: UpdateBateriaData): Promise<Bateria | null> {
    const bateria = await Bateria.findByPk(id);
    if (!bateria) return null;

    await bateria.update(data);
    return bateria;
  }

  async delete(id: number): Promise<boolean> {
    const bateria = await Bateria.findByPk(id);
    if (!bateria) return false;

    await bateria.destroy();
    return true;
  }
}

export const bateriaRepository = new BateriaRepository();