import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export class Bateria extends Model {
    id_bateria!: number;
    capacidad_ah!: number;
    voltaje!: number;
    estado!: string;
    id_panel!: number;
} 

export interface BateriaI {
  id_bateria?: number;
  capacidad_ah: number;
  voltaje: number;
  estado?: string;
  id_panel?: number;
}


Bateria.init(
  {
    id_bateria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    capacidad_ah: {
      type: DataTypes.FLOAT,
    },
    voltaje: {
      type: DataTypes.FLOAT,
    },
    estado: {
      type: DataTypes.STRING,
    },
    id_panel: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "bateria",
    sequelize,
    timestamps: false,
  }
);