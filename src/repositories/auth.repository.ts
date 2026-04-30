import { User } from '../models/User';

export interface CreateUserData {
  correo: string;
  contraseña: string;
  nombre?: string;
}

export class AuthRepository {
  async findByEmail(correo: string): Promise<User | null> {
    return User.findOne({ where: { correo } });
  }

  async findById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  async create(data: CreateUserData): Promise<User> {
    return User.create(data);
  }

  async updatePassword(id: number, contraseña: string): Promise<User | null> {
    const user = await User.findByPk(id);
    if (!user) return null;

    await user.update({ contraseña });
    return user;
  }
}

export const authRepository = new AuthRepository();