import { z } from 'zod';

export const CreateSensorDto = z.object({
  tipo_sensor: z.string().min(1, 'El tipo de sensor es requerido'),
  descripcion: z.string().optional(),
  id_dispositivo: z.number().int().positive().optional(),
  unidad_medida: z.string().optional(),
});

export const UpdateSensorDto = z.object({
  tipo_sensor: z.string().min(1).optional(),
  descripcion: z.string().optional(),
  id_dispositivo: z.number().int().positive().optional(),
  unidad_medida: z.string().optional(),
});

export const SensorParamsDto = z.object({
  id: z.string(),
});

export type CreateSensorInput = z.infer<typeof CreateSensorDto>;
export type UpdateSensorInput = z.infer<typeof UpdateSensorDto>;
export type SensorParams = z.infer<typeof SensorParamsDto>;