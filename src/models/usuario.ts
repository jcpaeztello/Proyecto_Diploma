import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export class Usuario extends Model {
id_usuario!: number;
  nombre!: string;
  correo!: string;
  contraseña!: string;
}
export interface UsuarioI {
  id_usuario?: number;
  nombre: string;
  correo: string;
  contraseña: string;
}



Usuario.init(
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    correo: {
      type: DataTypes.STRING,
    },
    contraseña: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "usuario",
    sequelize,
    timestamps: false,
  }
);