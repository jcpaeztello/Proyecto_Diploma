import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export class Lectura extends Model {
    id_lectura!: number;
    id_sensor!: number;
    valor!: number;
    fecha_lectura!: Date;
}

export interface LecturaI {
  id_lectura?: number;
  id_sensor?: number;
  valor: number;
  fecha_lectura?: Date;
}



Lectura.init(
  {
    id_lectura: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_sensor: {
      type: DataTypes.INTEGER,
    },
    valor: {
      type: DataTypes.FLOAT,
    },
    fecha_lectura: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "lectura_sensor",
    sequelize,
    timestamps: false,
  }
);