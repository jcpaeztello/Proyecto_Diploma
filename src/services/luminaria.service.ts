import { luminariaRepository } from '../repositories/luminaria.repository';
import { NotFoundError } from '../utils/error.handler';
import { CreateLuminariaInput, UpdateLuminariaInput } from '../dtos/luminaria.dto';

export interface LuminariaResponse {
  id_luminaria: number;
  tipo_luminaria?: string;
  potencia_watts?: number;
  estado?: string;
  id_zona?: number;
}

const toResponse = (l: any): LuminariaResponse => ({
  id_luminaria: l.id_luminaria,
  tipo_luminaria: l.tipo_luminaria,
  potencia_watts: l.potencia_watts,
  estado: l.estado,
  id_zona: l.id_zona,
});

export class LuminariaService {
  async findAll() {
    const luminarias = await luminariaRepository.findAll();
    return luminarias.map(toResponse);
  }

  async findById(id: number) {
    const luminaria = await luminariaRepository.findById(id);
    if (!luminaria) throw new NotFoundError('Luminaria no encontrada');
    return toResponse(luminaria);
  }

  async create(data: CreateLuminariaInput) {
    const newLuminaria = await luminariaRepository.create(data);
    return toResponse(newLuminaria);
  }

  async update(id: number, data: UpdateLuminariaInput) {
    const luminaria = await luminariaRepository.findById(id);
    if (!luminaria) throw new NotFoundError('Luminaria no encontrada');
    const updated = await luminariaRepository.update(id, data);
    return toResponse(updated);
  }

  async delete(id: number) {
    const deleted = await luminariaRepository.delete(id);
    if (!deleted) throw new NotFoundError('Luminaria no encontrada');
  }
}

export const luminariaService = new LuminariaService();