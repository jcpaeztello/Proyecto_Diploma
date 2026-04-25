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
exports.DispositivoController = void 0;
const dispositivos_1 = require("../models/dispositivos");
class DispositivoController {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send('hola, metodo test para Dispositivo');
            }
            catch (error) {
            }
        });
    }
    // Mostrar todos los dispositivos
    getAllDispositivos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dispositivos = yield dispositivos_1.Dispositivo.findAll();
                res.status(200).json({ dispositivos });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
    // Crear dispositivo
    createDispositivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombreDispositivo, ubicacionDispositivo, estadoDispositivo, modoDispositivo } = req.body;
            try {
                let body = {
                    nombreDispositivo,
                    ubicacionDispositivo,
                    estadoDispositivo,
                    modoDispositivo
                };
                const dispositivo = yield dispositivos_1.Dispositivo.create(Object.assign({}, body));
                res.status(200).json({ dispositivo });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
    // Actualizar dispositivo
    updateDispositivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pk = Number(req.params.id);
            const { nombreDispositivo, ubicacionDispositivo, estadoDispositivo, modoDispositivo } = req.body;
            try {
                let body = {
                    nombreDispositivo,
                    ubicacionDispositivo,
                    estadoDispositivo,
                    modoDispositivo
                };
                const dispositivoExist = yield dispositivos_1.Dispositivo.findByPk(pk);
                if (!dispositivoExist)
                    return res.status(500).json({ msg: "El dispositivo no existe" });
                yield dispositivos_1.Dispositivo.update(body, {
                    where: { id: pk }
                });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
            const dispositivo = yield dispositivos_1.Dispositivo.findByPk(pk);
            if (dispositivo)
                return res.status(200).json({ dispositivo });
        });
    }
    // Eliminar dispositivo
    deleteDispositivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pk = Number(req.params.id);
            try {
                const dispositivoExist = yield dispositivos_1.Dispositivo.findByPk(pk);
                if (!dispositivoExist)
                    return res.status(500).json({ msg: "El dispositivo no existe" });
                yield dispositivos_1.Dispositivo.destroy({
                    where: { id: pk }
                });
                res.status(200).json({ msg: "Dispositivo eliminado" });
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
    // Mostrar un dispositivo
    getOneDispositivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: idParam } = req.params;
            try {
                const dispositivo = yield dispositivos_1.Dispositivo.findOne({
                    where: {
                        id: idParam
                    }
                });
                if (dispositivo) {
                    res.status(200).json({ dispositivo });
                }
                else {
                    return res.status(300).json({ msg: "El dispositivo no existe" });
                }
            }
            catch (error) {
                res.status(500).json({ msg: "Error Internal" });
            }
        });
    }
}
exports.DispositivoController = DispositivoController;
