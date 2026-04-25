import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

interface UserAttributes {
  email: string;
  password: string;
}

export interface UserInstance extends Model<UserAttributes, UserAttributes>, UserAttributes {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export const User = sequelize.define<UserInstance>("User", {
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
});