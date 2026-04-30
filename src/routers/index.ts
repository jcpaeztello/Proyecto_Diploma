// Rutas con arquitectura de capas
import { AuthRoutes } from '../routes/auth.routes';
import { UsuarioRoutes } from '../routes/usuario.routes';

// Rutas originales
import { SensorRoutes } from "./sensor";
import { LuminariaRoutes } from "./luminaria";
import { BateriaRoutes } from "./bateria";
import { AlertaRoutes } from "./alerta";
import { ComandoRoutes } from "./comando_remoto";
import { EstadoLuminariaRoutes } from "./estado_luminaria";
import { EstadoBateriaRoutes } from "./estado_bateria";
import { LecturaRoutes } from "./lectura_sensor";

// Stub para Dispositivo y zona
class DispositivoRoutes {
  routes(app: any): void { console.log('DispositivoRoutes not implemented'); }
}
class zonaRoutes {
  routes(app: any): void { console.log('zonaRoutes not implemented'); }
}

export class Routes {
  public controlRoutes: ControlRoutes = new ControlRoutes();
  public datosRoutes: DatosRoutes = new DatosRoutes();
  public deviceRoutes: DeviceRoutes = new DeviceRoutes();
  public authRoutes: AuthRoutes = new AuthRoutes();
  public readingRoutes: ReadingRoutes = new ReadingRoutes();
}
