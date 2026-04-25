import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export class Auditoria extends Model {
    id_auditoria?: number;
  usuario?: string;
  accion?: string;
  fecha?: Date;
} 

export interface AuditoriaI {
  id_auditoria?: number;
  usuario?: string;
  accion?: string;
  fecha?: Date;
}

Auditoria.init(
{
  id_auditoria:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },

  usuario:{
    type:DataTypes.STRING
  },

  accion:{
    type:DataTypes.STRING
  },

  fecha:{
    type:DataTypes.DATE
  }

},
{
  tableName:"auditoria_sistema",
  sequelize,
  timestamps:false
}
);