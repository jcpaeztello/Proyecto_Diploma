import { z } from 'zod';

export const CreateLuminariaDto = z.object({
  tipo_luminaria: z.string().min(1).optional(),
  potencia_watts: z.number().positive().optional(),
  estado: z.string().optional(),
  id_zona: z.number().int().positive().optional(),
});

export const UpdateLuminariaDto = z.object({
  tipo_luminaria: z.string().min(1).optional(),
  potencia_watts: z.number().positive().optional(),
  estado: z.string().optional(),
  id_zona: z.number().int().positive().optional(),
});

export const LuminariaParamsDto = z.object({
  id: z.string(),
});

export type CreateLuminariaInput = z.infer<typeof CreateLuminariaDto>;
export type UpdateLuminariaInput = z.infer<typeof UpdateLuminariaDto>;