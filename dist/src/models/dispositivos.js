"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispositivo = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Dispositivo extends sequelize_1.Model {
}
exports.Dispositivo = Dispositivo;
Dispositivo.init({
    nombreDispositivo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    ubicacionDispositivo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    estadoDispositivo: {
        //type: DataTypes.BOOLEAN,
        type: sequelize_1.DataTypes.ENUM('activo', 'inactivo'),
        allowNull: false
    },
    modoDispositivo: {
        //type: DataTypes.BOOLEAN,
        type: sequelize_1.DataTypes.ENUM('automatico', 'manual'),
        allowNull: false
    }
}, {
    tableName: "dispositivo",
    sequelize: db_1.database,
    timestamps: false
});
