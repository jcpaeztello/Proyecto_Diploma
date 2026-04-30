import { usuarioRepository } from '../repositories/usuario.repository';
import { NotFoundError, ConflictError } from '../utils/error.handler';
import { CreateUsuarioInput, UpdateUsuarioInput } from '../dtos/usuario.dto';

export interface UsuarioResponse {
  id_usuario: number;
  correo: string;
  nombre?: string | null;
}

const toResponse = (user: any): UsuarioResponse => ({
  id_usuario: user.id_usuario,
  correo: user.correo,
  nombre: user.nombre,
});

export class UsuarioService {
  async findAll(): Promise<UsuarioResponse[]> {
    const users = await usuarioRepository.findAll();
    return users.map(toResponse);
  }

  async findById(id: number): Promise<UsuarioResponse> {
    const user = await usuarioRepository.findById(id);

    if (!user) {
      throw new NotFoundError('Usuario no encontrado');
    }

    return toResponse(user);
  }

  async create(data: CreateUsuarioInput): Promise<UsuarioResponse> {
    const existingUser = await usuarioRepository.findByEmail(data.email);

    if (existingUser) {
      throw new ConflictError('Email ya registrado');
    }

    // Guardar contraseña sin hash
    const newUser = await usuarioRepository.create({
      correo: data.email,
      contraseña: data.password,
    });

    return toResponse(newUser);
  }

  async update(id: number, data: UpdateUsuarioInput): Promise<UsuarioResponse> {
    const user = await usuarioRepository.findById(id);

    if (!user) {
      throw new NotFoundError('Usuario no encontrado');
    }

    if (data.email && data.email !== user.correo) {
      const existingUser = await usuarioRepository.findByEmail(data.email);
      if (existingUser) {
        throw new ConflictError('Email ya está en uso');
      }
    }

    // Guardar contraseña sin hash
    const updateData: any = { ...data };
    delete updateData.password;

    if (data.password) {
      updateData.contraseña = data.password;
    }

    const updatedUser = await usuarioRepository.update(id, updateData);

    if (!updatedUser) {
      throw new NotFoundError('Usuario no encontrado');
    }

    return toResponse(updatedUser);
  }

  async delete(id: number): Promise<void> {
    const deleted = await usuarioRepository.delete(id);

    if (!deleted) {
      throw new NotFoundError('Usuario no encontrado');
    }
  }
}

export const usuarioService = new UsuarioService();