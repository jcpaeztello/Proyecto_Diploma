import { Zona } from "./zona_alumbrado";
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
import { Rol } from "./rol";
import { UsuarioRol } from "./usuario_rol";
import { Auditoria } from "./auditoria_sistema";
// import { Usuario } from "./usuario"; // Eliminado

export const relations = () => {
  // Luminaria → Estado luminaria
  EstadoLuminaria.belongsTo(Luminaria); 
  Luminaria.hasMany(EstadoLuminaria);

  // Batería → Estado batería
  EstadoBateria.belongsTo(Bateria); 
  Bateria.hasMany(EstadoBateria);

  // Comando → Respuesta
  RespuestaComando.belongsTo(ComandoRemoto); 
  ComandoRemoto.hasMany(RespuestaComando);

  // Relations con usuario comentadas - modelo eliminado
  // Rol.belongsTo(Usuario); 
  // Usuario.hasMany(Rol);
  // Auditoria.belongsTo(Usuario); 
  // Usuario.hasMany(Alerta);
};