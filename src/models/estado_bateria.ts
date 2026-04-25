import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export class EstadoBateria extends Model {
    id_estado!: number;
    id_bateria!: number;
    nivel_carga!: number;
    fecha_estado!: Date;
   
  
  }
export interface EstadoBateriaI {
  id_estado?: number;
  id_bateria?: number;
  nivel_carga: number;
  fecha_estado?: Date;
}



EstadoBateria.init(
{
  id_estado:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },

  id_bateria:{
    type:DataTypes.INTEGER
  },

  nivel_carga:{
    type:DataTypes.FLOAT
  },

  fecha_estado:{
    type:DataTypes.DATE
  }

},
{
  tableName:"estado_bateria",
  sequelize,
  timestamps:false
}
);