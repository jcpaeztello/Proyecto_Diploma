import { User } from '../models/User';

export interface UpdateUserData {
  correo?: string;
  contraseña?: string;
}

export class UsuarioRepository {
  async findAll(): Promise<User[]> {
    return User.findAll();
  }

  async findById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  async findByEmail(correo: string): Promise<User | null> {
    return User.findOne({ where: { correo } });
  }

  async create(data: { correo: string; contraseña: string }): Promise<User> {
    return User.create(data);
  }

  async update(id: number, data: UpdateUserData): Promise<User | null> {
    const user = await User.findByPk(id);
    if (!user) return null;

    await user.update(data);
    return user;
  }

  async delete(id: number): Promise<boolean> {
    const user = await User.findByPk(id);
    if (!user) return false;

    await user.destroy();
    return true;
  }
}

export const usuarioRepository = new UsuarioRepository();