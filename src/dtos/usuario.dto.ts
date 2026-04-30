import { z } from 'zod';

// El DTO usa nombres diferentes para validación pero el mapping se hace en el service
export const CreateUsuarioDto = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const UpdateUsuarioDto = z.object({
  email: z.string().email('Email inválido').optional(),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').optional(),
});

export const UsuarioParamsDto = z.object({
  id: z.string(),
});

export interface CreateUsuarioInput {
  email: string;
  password: string;
}

export interface UpdateUsuarioInput {
  email?: string;
  password?: string;
}

export interface UsuarioParams {
  id: string;
}