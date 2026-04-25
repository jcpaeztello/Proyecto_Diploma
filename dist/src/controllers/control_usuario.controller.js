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
exports.ControlController = void 0;
const contro_usuario_1 = require("../models/contro_usuario");
class ControlController {
    // Método de prueba
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send('Metodo test del sistema de control de alumbrado IoT');
            }
            catch (error) {
                res.status(500).json({ msg: "Error interno" });
            }
        });
    }
    // Obtener todos los registros de control
    getAllControl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const control = yield contro_usuario_1.Control.findAll();
                res.status(200).json({ control });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
    // Crear un registro de control (encender o apagar luz)
    createControl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { accion, fecha } = req.body;
            try {
                let body = {
                    accion,
                    fecha
                };
                const control = yield contro_usuario_1.Control.create(Object.assign({}, body));
                res.status(200).json({
                    msg: "Accion registrada correctamente",
                    control
                });
            }
            catch (error) {
                res.status(500).json({ msg: "Error interno" });
            }
        });
    }
    // Actualizar registro de control
    updateControl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pk = Number(req.params.id);
            const { accion, fecha } = req.body;
            try {
                let body = {
                    accion,
                    fecha
                };
                const controlExist = yield contro_usuario_1.Control.findByPk(pk);
                if (!controlExist)
                    return res.status(404).json({ msg: "El registro no existe" });
                yield contro_usuario_1.Control.update(body, {
                    where: { id: pk }
                });
            }
            catch (error) {
                return res.status(500).json({ msg: "Error interno" });
            }
            const control = yield contro_usuario_1.Control.findByPk(pk);
            if (control) {
                return res.status(200).json({ control });
            }
        });
    }
    // Eliminar registro de control
    deleteControl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pk = Number(req.params.id);
            try {
                const controlExist = yield contro_usuario_1.Control.findByPk(pk);
                if (!controlExist)
                    return res.status(404).json({ msg: "El registro no existe" });
                yield contro_usuario_1.Control.destroy({
                    where: { id: pk }
                });
                res.status(200).json({ msg: "Registro eliminado correctamente" });
            }
            catch (error) {
                res.status(500).json({ msg: "Error interno" });
            }
        });
    }
    // Obtener un registro específico
    getOneControl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: idParam } = req.params;
            try {
                const control = yield contro_usuario_1.Control.findOne({
                    where: { id: idParam }
                });
                if (control) {
                    res.status(200).json({ control });
                }
                else {
                }
            }
            finally {
            }
        });
    }
}
exports.ControlController = ControlController;
