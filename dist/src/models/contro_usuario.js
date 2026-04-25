"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Control = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const dispositivos_1 = require("./dispositivos");
class Control extends sequelize_1.Model {
}
exports.Control = Control;
Control.init({
    accion: {
        type: sequelize_1.DataTypes.ENUM('activo', 'inactivo'),
        allowNull: false
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
}, {
    tableName: "control",
    sequelize: db_1.database,
    timestamps: false
});
Control.belongsTo(dispositivos_1.Dispositivo);
dispositivos_1.Dispositivo.hasMany(Control);
