import { Zona } from "./zona_alumbrado";
import { Dispositivo } from "./dispositivos";
import { Sensor } from "./sensor";
import { Lectura } from "./lectura_sensor";
import { Panel } from "./panel_solar";
import { TelemetriaEnergia } from "./energia";
import { Bateria } from "./bateria";
import { EstadoBateria } from "./estado_bateria";
import { Luminaria } from "./luminaria";
import { EstadoLuminaria } from "./estado_luminaria";
import { Configuracion } from "./configuracion_control";
import { Alerta } from "./alerta";
import { ComandoRemoto } from "./comando_remoto";
import { RespuestaComando } from "./respuesta_comando";
import { Usuario } from "./usuario";
import { Rol } from "./rol";
import { UsuarioRol } from "./usuario_rol";
import { Auditoria } from "./auditoria_sistema";

export const relations = () => {

  // Zona → Dispositivo
  Dispositivo.belongsTo(Zona); 
  Zona.hasMany(Dispositivo);


  // Dispositivo → Sensor
  Sensor.belongsTo(Dispositivo); 
  Dispositivo.hasMany(Sensor);

  // Sensor → Lecturas
  Lectura.belongsTo(Sensor); 
  Sensor.hasMany(Lectura);
  // Dispositivo → Luminaria
   Luminaria.belongsTo(Dispositivo); 
  Dispositivo.hasMany(Luminaria);

  // Luminaria → Estado luminaria
  EstadoLuminaria.belongsTo(Luminaria); 
  Luminaria.hasMany(EstadoLuminaria);

  // Dispositivo → Panel solar
  Panel.belongsTo(Dispositivo); 
  Dispositivo.hasMany(Panel);

  // Panel → Telemetría
  
  TelemetriaEnergia.belongsTo(Panel); 
  Panel.hasMany(TelemetriaEnergia);
  // Panel → Batería
  Bateria.belongsTo(Panel); 
  Panel.hasMany(Bateria);

  // Batería → Estado batería
  EstadoBateria.belongsTo(Bateria); 
  Bateria.hasMany(EstadoBateria);
  // Dispositivo → Configuración
  Configuracion.belongsTo(Dispositivo); 
  Dispositivo.hasMany(Configuracion);
  // Dispositivo → Alertas
  Alerta.belongsTo(Dispositivo); 
  Dispositivo.hasMany(Alerta);
  // Dispositivo → Comandos
  ComandoRemoto.belongsTo(Dispositivo); 
  Dispositivo.hasMany(ComandoRemoto);
  // Comando → Respuesta
  RespuestaComando.belongsTo(ComandoRemoto); 
  ComandoRemoto.hasMany(RespuestaComando);
  // Usuario → Roles
  Rol.belongsTo(Usuario); 
  Usuario.hasMany(Rol);
  // Usuario → Auditoría
  Auditoria.belongsTo(Usuario); 
  Usuario.hasMany(Alerta);

};