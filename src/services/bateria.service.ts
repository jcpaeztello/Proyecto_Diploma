import { bateriaRepository } from '../repositories/bateria.repository';
import { NotFoundError } from '../utils/error.handler';
import { CreateBateriaInput, UpdateBateriaInput } from '../dtos/bateria.dto';

export interface BateriaResponse {
  id_bateria: number;
  capacidad_ah: number;
  voltaje: number;
  estado: string;
  id_panel: number;
}

const toResponse = (b: any): BateriaResponse => ({
  id_bateria: b.id_bateria,
  capacidad_ah: b.capacidad_ah,
  voltaje: b.voltaje,
  estado: b.estado,
  id_panel: b.id_panel,
});

export class BateriaService {
  async findAll() {
    const baterias = await bateriaRepository.findAll();
    return baterias.map(toResponse);
  }

  async findById(id: number) {
    const bateria = await bateriaRepository.findById(id);
    if (!bateria) throw new NotFoundError('Batería no encontrada');
    return toResponse(bateria);
  }

  async create(data: CreateBateriaInput) {
    const newBateria = await bateriaRepository.create(data);
    return toResponse(newBateria);
  }

  async update(id: number, data: UpdateBateriaInput) {
    const bateria = await bateriaRepository.findById(id);
    if (!bateria) throw new NotFoundError('Batería no encontrada');
    const updated = await bateriaRepository.update(id, data);
    return toResponse(updated);
  }

  async delete(id: number) {
    const deleted = await bateriaRepository.delete(id);
    if (!deleted) throw new NotFoundError('Batería no encontrada');
  }
}

export const bateriaService = new BateriaService();