"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosController = void 0;
const datos_sensor_1 = require("../models/datos_sensor");
class DatosController {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send('hola, metodo test para Cliente');
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
    getAllDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const datos = yield datos_sensor_1.Datos.findAll();
                res.status(200).json({ datos });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
    createDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nivel_luz, fecha, estado_luz } = req.body;
            try {
                let body = {
                    nivel_luz,
                    fecha,
                    estado_luz
                };
                const datos = yield datos_sensor_1.Datos.create(Object.assign({}, body));
                res.status(200).json({
                    msg: "Dato del sensor guardado",
                    datos
                });
            }
            catch (error) {
                res.status(500).json({ msg: "Error interno del servidor" });
            }
        });
    }
    updateDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pk = Number(req.params.id);
            const { id, nivel_luz, fecha, estado_luz, } = req.body;
            try {
                let body = {
                    nivel_luz,
                    fecha,
                    estado_luz,
                };
                const DatosExist = yield datos_sensor_1.Datos.findByPk(pk);
                if (!DatosExist)
                    return res.status(500).json({ msg: "El dato no existe" });
                yield datos_sensor_1.Datos.update(body, {
                    where: { id: pk }
                });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
            const datos = yield datos_sensor_1.Datos.findByPk(pk);
            if (datos)
                return res.status(200).json({ datos });
        });
    }
    //Eliminar cliente
    deleteDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pk = Number(req.params.id);
            try {
                const datosExist = yield datos_sensor_1.Datos.findByPk(pk);
                if (!datosExist)
                    return res.status(500).json({ msg: "El cliente no existe" });
                yield datos_sensor_1.Datos.destroy({
                    where: { id: pk }
                });
                res.status(200).json({ msg: "Cliente eliminado" });
            }
            catch (error) {
                res.status(500).json;
            }
        });
    }
    //metodo mostrar un cliente
    getOneDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: idParam } = req.params;
            try {
                const datos = yield datos_sensor_1.Datos.findOne({
                    where: {
                        id: idParam,
                    }
                });
                if (datos) {
                    res.status(200).json({ datos });
                }
                else
                    return res.status(300).json({ msg: "El cliente no existe" });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
}
exports.DatosController = DatosController;
