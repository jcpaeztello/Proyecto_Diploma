import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";


export class Sensor extends Model {
    id_sensor!: number;
    tipo_sensor!: string;
    descripcion!: string;
    id_dispositivo!: number;
    unidad_medida!: string;
}

export interface SensorI {
  id_sensor?: number;
  tipo_sensor: string;
  descripcion?: string;
  id_dispositivo?: number;
  unidad_medida?: string;
}


Sensor.init(
  {
    id_sensor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_sensor: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    id_dispositivo: {
      type: DataTypes.INTEGER,
    },
    unidad_medida: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "sensor",
    sequelize,
    timestamps: false,
  }
);