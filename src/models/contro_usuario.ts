import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Device } from "./Device";

export class Control extends Model {
  public accion!: boolean;
  public fecha!: Date;
}

export interface ControlI {
  accion: boolean;
  fecha: Date;
}

Control.init(
  {
    accion: {
      type: DataTypes.ENUM("activo", "inactivo"),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "control",
    sequelize: database,
    timestamps: false,
  },
);

Control.belongsTo(Device);
Device.hasMany(Control);
