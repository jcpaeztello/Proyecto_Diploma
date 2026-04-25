import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";




export class Zona extends Model {
    id_zona!: number
    nombre!: string;
    descripcion!: string;
    ubicacion!: string;
}

export interface ZonaI {
  id_zona: number;
  nombre: string;
  descripcion: string;
  ubicacion: string;
}



Zona.init(
  {
    id_zona: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    ubicacion: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "zona_alumbrado",
    sequelize,
    timestamps: false,
  }
);