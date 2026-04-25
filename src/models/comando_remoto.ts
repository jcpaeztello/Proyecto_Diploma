import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";


export class ComandoRemoto extends Model {
    id_comando!: number;
  id_dispositivo!: number;
  comando!: string;
  fecha_envio!: Date;
} 
export interface ComandoRemotoI {
  id_comando?: number;
  id_dispositivo?: number;
  comando: string;
  fecha_envio?: Date;
}



ComandoRemoto.init(
{
  id_comando:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },

  id_dispositivo:{
    type:DataTypes.INTEGER
  },

  comando:{
    type:DataTypes.STRING
  },

  fecha_envio:{
    type:DataTypes.DATE
  }

},
{
  tableName:"comando_remoto",
  sequelize,
  timestamps:false
}
);