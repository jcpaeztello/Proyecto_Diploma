import { z } from 'zod';

export const CreateBateriaDto = z.object({
  capacidad_ah: z.number().positive(),
  voltaje: z.number().positive(),
  estado: z.string().default('activo'),
  id_panel: z.number().int().positive(),
});

export const UpdateBateriaDto = z.object({
  capacidad_ah: z.number().positive().optional(),
  voltaje: z.number().positive().optional(),
  estado: z.string().optional(),
  id_panel: z.number().int().positive().optional(),
});

export const BateriaParamsDto = z.object({ id: z.string() });

export type CreateBateriaInput = z.infer<typeof CreateBateriaDto>;
export type UpdateBateriaInput = z.infer<typeof UpdateBateriaDto>;