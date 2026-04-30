import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";



export class Alerta extends Model {
    id_alerta!: number;
    tipo_alerta!: string;
    descripcion!: string;
    fecha_alerta!: Date;
} 
export interface AlertaI {
  id_alerta?: number;
  tipo_alerta: string;
  descripcion: string;
  fecha_alerta?: Date;
}


Alerta.init(
{
  id_alerta:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },

  tipo_alerta:{
    type:DataTypes.STRING
  },

  descripcion:{
    type:DataTypes.TEXT
  },

  fecha_alerta:{
    type:DataTypes.DATE
  }

},
{
  tableName:"alerta",
  sequelize,
  timestamps:false
}
);