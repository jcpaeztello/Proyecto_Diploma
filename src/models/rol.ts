import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export class Rol extends Model {
    id_rol!: number;
    nombre_rol!: string;
   
  }

export interface RolI {
  id_rol?: number;
  nombre_rol: string;
}


Rol.init(
  {
    id_rol: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_rol: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "rol",
    sequelize,
    timestamps: false,
  }
);