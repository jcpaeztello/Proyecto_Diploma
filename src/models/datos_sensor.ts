import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Device } from "./Device";

export class Datos extends Model {
  public nivel_luz!: number;
  public estado_luz!: boolean;
  public fecha!: Date;
}

export interface DatosI {
  nivel_luz: number;
  fecha: Date;
  estado_luz: boolean;
}

Datos.init(
  {
    nivel_luz: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    estado_luz: {
      type: DataTypes.ENUM("activo", "inactivo"),
      allowNull: false,
    },
  },
  {
    tableName: "datos",
    sequelize: database,
    timestamps: false,
  },
);

Datos.belongsTo(Device);
Device.hasMany(Datos);
