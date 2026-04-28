import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const login = async (req: any, res: any) => {
  // Validar body
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Faltan datos requeridos" });
  }
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(401).json({ message: "Usuario no registrado" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Contraseña incorrecta" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "8h",
  });

  res.json({ token });
};

export const register = async (req: any, res: any) => {
  // Validar body
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Faltan datos requeridos" });
  }
  const { email, password } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser)
    return res.status(400).json({ message: "Email ya registrado" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashedPassword });

  res.status(201).json({ message: "Usuario registrado", userId: newUser.id });
};
