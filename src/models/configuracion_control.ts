import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";



export class Configuracion extends Model {
    id_config!: number;
  id_dispositivo!: number;
  horario_encendido!: string;
  horario_apagado!: string;
  modo_operacion!: string;
} 
export interface ConfiguracionI {
  id_config?: number;
  id_dispositivo?: number;
  horario_encendido?: string;
  horario_apagado?: string;
  modo_operacion?: string;
}



Configuracion.init(
{
  id_config:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },

  id_dispositivo:{
    type:DataTypes.INTEGER
  },

  horario_encendido:{
    type:DataTypes.STRING
  },

  horario_apagado:{
    type:DataTypes.STRING
  },

  modo_operacion:{
    type:DataTypes.STRING
  }

},
{
  tableName:"configuracion_control",
  sequelize,
  timestamps:false
}
);