import { DataTypes, Model, ForeignKey } from "sequelize";
import { sequelize } from "../database/db";
import { Device } from "./Device";

export class Reading extends Model<ReadingAttributes, ReadingAttributes> {
  public id!: number;
  public device_id!: ForeignKey<number>;
  public value!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public declare readonly device?: Device;
}

interface ReadingAttributes {
  id: number;
  device_id: number;
  value: number;
}

export interface ReadingInstance
  extends Model<ReadingAttributes, ReadingAttributes>, ReadingAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

Reading.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    device_id: { type: DataTypes.INTEGER },
    value: { type: DataTypes.FLOAT },
  },
  {
    tableName: "readings",
    sequelize: sequelize,
    timestamps: true,
  },
);

Reading.belongsTo(Device, { foreignKey: "device_id", as: "Device" });
