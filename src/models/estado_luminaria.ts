import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

export class EstadoLuminaria extends Model {
    id_estado!: number;
    id_luminaria!: number;
    estado!: string;
    fecha_estado!: Date;
   
  
  }
export interface EstadoLuminariaI {
  id_estado?: number;
  id_luminaria?: number;
  estado: string;
  fecha_estado?: Date;
}



EstadoLuminaria.init(
{
  id_estado:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },

  id_luminaria:{
    type:DataTypes.INTEGER
  },

  estado:{
    type:DataTypes.STRING
  },

  fecha_estado:{
    type:DataTypes.DATE
  }

},
{
  tableName:"estado_luminaria",
  sequelize,
  timestamps:false
}
);