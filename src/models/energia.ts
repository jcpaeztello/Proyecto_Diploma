import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export class TelemetriaEnergia extends Model {
    id_telemetria!: number;
    id_panel!: number;
    energia_generada!: number;
    fecha_registro!: Date;
   
  
  }

export interface TelemetriaEnergiaI {
  id_telemetria?: number;
  id_panel?: number;
  energia_generada: number;
  fecha_registro?: Date;
}



TelemetriaEnergia.init(
{
  id_telemetria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  id_panel: {
    type: DataTypes.INTEGER
  },

  energia_generada: {
    type: DataTypes.FLOAT
  },

  fecha_registro: {
    type: DataTypes.DATE
  }

},
{
  tableName: "energia",
  sequelize,
  timestamps: false
}
);