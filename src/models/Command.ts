import { DataTypes, Model, ForeignKey } from "sequelize";
import { sequelize } from "../database/db";
import { Device } from "./Device";

export class Command extends Model<CommandAttributes, CommandAttributes> {
  public id!: number;
  public device_id!: ForeignKey<number>;
  public command!: string;
  public executed!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public declare readonly device?: Device;
}

export interface CommandAttributes {
  id: number;
  device_id: number;
  command: string;
  executed: boolean;
}

export interface CommandInstance extends Model<CommandAttributes, CommandAttributes>, CommandAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}


Command.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    device_id: { type: DataTypes.INTEGER },
    command: { type: DataTypes.STRING },
    executed: { type: DataTypes.BOOLEAN },
  },
  {
    tableName: "commands",
    sequelize: sequelize,
    timestamps: true,
  },
);

Command.belongsTo(Device, { foreignKey: "device_id", as: "Device" });
