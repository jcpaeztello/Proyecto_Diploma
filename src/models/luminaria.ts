import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";


export class Luminaria extends Model {
    id_luminaria!: number;
    tipo_luminaria!: string;
    potencia_watts!: number;
    estado!: string;
    id_zona!: number;
}
export interface LuminariaI {
  id_luminaria?: number;
  tipo_luminaria?: string;
  potencia_watts?: number;
  estado?: string;
  id_zona?: number;
}



Luminaria.init(
  {
    id_luminaria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_luminaria: {
      type: DataTypes.STRING,
    },
    potencia_watts: {
      type: DataTypes.FLOAT,
    },
    estado: {
      type: DataTypes.STRING,
    },
    id_zona: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "luminaria",
    sequelize,
    timestamps: false,
  }
);