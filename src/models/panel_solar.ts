import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";


export class Panel extends Model {
    id_panel!: number;
  capacidad!: number;
  ubicacion!: string;
  id_zona!: number;
}
export interface PanelI {
  id_panel?: number;
  capacidad: number;
  ubicacion?: string;
  id_zona?: number;
}



Panel.init(
  {
    id_panel: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    capacidad: {
      type: DataTypes.FLOAT,
    },
    ubicacion: {
      type: DataTypes.STRING,
    },
    id_zona: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "panel_solar",
    sequelize,
    timestamps: false,
  }
);