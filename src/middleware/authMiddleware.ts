import jwt from "jsonwebtoken";

// ============================================
// MIDDLEWARE DE AUTENTICACIÓN
// ============================================
// Este middleware protege todas las rutas que vienen después
// 
// CÓMO USAR (desde el frontend):
// 1. Después de login, guardar el token:
//    localStorage.setItem('token', response.data.token);
//
// 2. En cada petición GET/POST a rutas protegidas, enviar:
//    headers: {
//      'Authorization': `Bearer ${localStorage.getItem('token')}`
//    }
//
// 3. El middleware extrae el token del header Authorization
// ============================================

export const authMiddleware = (req: any, res: any, next: any) => {
  // Extrae el token del header: Authorization: Bearer <token>
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    // Si no hay token, devuelve error 401
    return res.status(401).json({
      success: false,
      message: "Acceso denegado. No se proporcionó token. Envía el token en header: Authorization: Bearer <token>"
    });
  }

  try {
    // Verifica y decodifica el token usando la clave secreta de .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    // Guarda los datos decodificados en req.user para usar en los controladores
    req.user = decoded;
    next();
  } catch (error) {
    // Si el token es inválido o expiró
    return res.status(401).json({
      success: false,
      message: "Token inválido o expirado. Por favor, inicia sesión nuevamente."
    });
  }
};
