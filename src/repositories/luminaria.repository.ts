import { Luminaria } from '../models/luminaria';

export interface UpdateLuminariaData {
  tipo_luminaria?: string;
  potencia_watts?: number;
  estado?: string;
  id_zona?: number;
}

export class LuminariaRepository {
  async findAll(): Promise<Luminaria[]> {
    return Luminaria.findAll();
  }

  async findById(id: number): Promise<Luminaria | null> {
    return Luminaria.findByPk(id);
  }

  async create(data: any): Promise<Luminaria> {
    return Luminaria.create(data);
  }

  async update(id: number, data: UpdateLuminariaData): Promise<Luminaria | null> {
    const luminaria = await Luminaria.findByPk(id);
    if (!luminaria) return null;

    await luminaria.update(data);
    return luminaria;
  }

  async delete(id: number): Promise<boolean> {
    const luminaria = await Luminaria.findByPk(id);
    if (!luminaria) return false;

    await luminaria.destroy();
    return true;
  }
}

export const luminariaRepository = new LuminariaRepository();