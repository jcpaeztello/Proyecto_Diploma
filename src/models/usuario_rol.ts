import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export class UsuarioRol extends Model {
    id_usuario!: number;
    id_rol!: number;
} 
export interface UsuarioRolI {
  id_usuario?: number;
  id_rol?: number;
}


UsuarioRol.init(
{
  id_usuario:{
    type:DataTypes.INTEGER,
    primaryKey:true
  },

  id_rol:{
    type:DataTypes.INTEGER,
    primaryKey:true
  }

},
{
  tableName:"usuario_rol",
  sequelize,
  timestamps:false
}
);