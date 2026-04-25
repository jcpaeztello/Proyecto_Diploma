import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export class RespuestaComando extends Model {
    id_respuesta!: number;
  id_comando!: number;
  respuesta!: string;
  fecha_respuesta!: Date;
} 

export interface RespuestaComandoI {
  id_respuesta?: number;
  id_comando?: number;
  respuesta: string;
  fecha_respuesta?: Date;
}



RespuestaComando.init(
{
  id_respuesta:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },

  id_comando:{
    type:DataTypes.INTEGER
  },

  respuesta:{
    type:DataTypes.STRING
  },

  fecha_respuesta:{
    type:DataTypes.DATE
  }

},
{
  tableName:"respuesta_comando",
  sequelize,
  timestamps:false
}
);