import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import { database } from "../database/db";


export class User extends Model<UserAttributes, UserAttributes> {
    public id!: number;
    public email!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

interface UserAttributes {
  id?: number;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInstance extends Model<UserAttributes, UserAttributes>, UserAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

User.init(
  {
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize: database,
    timestamps: true,
  },
);