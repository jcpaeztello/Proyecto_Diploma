"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datos = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const dispositivos_1 = require("./dispositivos");
class Datos extends sequelize_1.Model {
}
exports.Datos = Datos;
Datos.init({
    nivel_luz: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    estado_luz: {
        type: sequelize_1.DataTypes.ENUM('activo', 'inactivo'),
        allowNull: false
    }
}, {
    tableName: "datos",
    sequelize: db_1.database,
    timestamps: false
});
Datos.belongsTo(dispositivos_1.Dispositivo);
dispositivos_1.Dispositivo.hasMany(Datos);
