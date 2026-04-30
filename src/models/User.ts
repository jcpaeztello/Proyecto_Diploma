import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";


export class User extends Model<UserAttributes, UserAttributes> {
    public id_usuario!: number;
    public nombre!: string | null;
    public correo!: string;
    public contraseña!: string;
}

export interface UserAttributes {
  id_usuario?: number;
  nombre?: string | null;
  correo: string;
  contraseña: string;
}

User.init(
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id_usuario'
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'nombre'
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'correo'
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'contraseña'
    },
  },
  {
    tableName: "usuarios",
    sequelize: sequelize,
    timestamps: false,
  },
);