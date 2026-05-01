import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { errorHandler } from '../utils/error.handler';
import { successResponse, createdResponse } from '../utils/response.helper';
import { LoginDto, RegisterDto } from '../dtos/auth.dto';

export class AuthController {
  async login(req: Request, res: Response) {
    try {
      const data = LoginDto.parse(req.body);
      const result = await authService.login(data);
      // IMPORTANTE: Se devuelve el token en la respuesta para que el frontend
      // lo guarde y lo envíe luego con Authorization: Bearer <token>
      return res.status(200).json({
        success: true,
        message: 'Login exitoso',
        token: result.token,
        user: result.user,
      });
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  async register(req: Request, res: Response) {
    try {
      const data = RegisterDto.parse(req.body);
      const result = await authService.register(data);
      return createdResponse(res, result, 'Usuario registrado exitosamente');
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}

export const authController = new AuthController();