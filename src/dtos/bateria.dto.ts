import { z } from 'zod';

export const CreateBateriaDto = z.object({
  tipo_bateria: z.string().optional(),
  capacidad_ah: z.number().positive().optional(),
  id_panel: z.number().int().positive().optional(),
});

export const UpdateBateriaDto = z.object({
  tipo_bateria: z.string().optional(),
  capacidad_ah: z.number().positive().optional(),
  id_panel: z.number().int().positive().optional(),
});

export const BateriaParamsDto = z.object({ id: z.string() });

export type CreateBateriaInput = z.infer<typeof CreateBateriaDto>;
export type UpdateBateriaInput = z.infer<typeof UpdateBateriaDto>;