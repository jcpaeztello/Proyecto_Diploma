import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";


export class Dispositivo extends Model {
  public nombreDispositivo!: string;
  public ubicacionDispositivo!: string;
  public estadoDispositivo!: boolean;
  public modoDispositivo!: boolean;

}

export interface DispositivoI {
    nombreDispositivo: string;
    ubicacionDispositivo: string;
    estadoDispositivo: boolean;
    modoDispositivo: boolean;
}

Dispositivo.init(
  {
    nombreDispositivo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    ubicacionDispositivo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estadoDispositivo:{
        //type: DataTypes.BOOLEAN,
        type: DataTypes.ENUM('activo', 'inactivo'),
        allowNull: false
      }, 
      modoDispositivo:{
        //type: DataTypes.BOOLEAN,
        type: DataTypes.ENUM('automatico', 'manual'),
        allowNull: false
      }
  },
  {
    tableName: "dispositivo",
    sequelize: database,
    timestamps: false
  }
);

