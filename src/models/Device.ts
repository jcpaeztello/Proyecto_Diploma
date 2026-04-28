import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Device extends Model {
  public name!: string;
  public location!: string;
  public status!: boolean;
  public mode!: boolean;
}

export interface DeviceI {
  name: string;
  location: string;
  status: boolean;
  mode: boolean;
}

Device.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      //type: DataTypes.BOOLEAN,
      type: DataTypes.ENUM("activo", "inactivo"),
      allowNull: false,
    },
    mode: {
      //type: DataTypes.BOOLEAN,
      type: DataTypes.ENUM("automatico", "manual"),
      allowNull: false,
    },
  },
  {
    tableName: "devices",
    sequelize: database,
    timestamps: false,
  },
);
