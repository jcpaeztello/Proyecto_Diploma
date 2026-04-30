import { Response } from 'express';

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export const successResponse = <T>(
  res: Response,
  data: T,
  statusCode = 200,
  message?: string
): Response => {
  const response: ApiResponse<T> = {
    success: true,
    data,
    message,
  };
  return res.status(statusCode).json(response);
};

export const errorResponse = (
  res: Response,
  statusCode: number,
  message: string,
  errors?: Record<string, string[]>
): Response => {
  const response: ApiResponse<null> = {
    success: false,
    message,
    errors,
  };
  return res.status(statusCode).json(response);
};

export const createdResponse = <T>(
  res: Response,
  data: T,
  message = 'Recurso creado exitosamente'
): Response => {
  const response: ApiResponse<T> = {
    success: true,
    data,
    message,
  };
  return res.status(201).json(response);
};

export const noContentResponse = (res: Response): Response => {
  return res.status(204).json();
};