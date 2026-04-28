
import { DispositivoRoutes } from './dispositivo';
import { EstadoLuminariaRoutes } from "./estado_luminaria";
import { EstadoBateriaRoutes } from "./estado_bateria";
import { AlertaRoutes } from "./alerta";
import { LecturaRoutes } from "./lectura_sensor";
import { UsuarioRoutes } from './usuario';
import { SensorRoutes } from "./sensor";
import { LuminariaRoutes } from "./luminaria";
import { BateriaRoutes } from "./bateria";
import { ComandoRoutes } from "./comando_remoto";
import { zonaRoutes } from './zona_alumbrado';
import { authRoutes } from "./auth_routes";



export class Routes {
   
    public dispositivosRoutes: DispositivoRoutes = new DispositivoRoutes();
    public estadoLuminariaRoutes = new EstadoLuminariaRoutes();
    public estadoBateriaRoutes = new EstadoBateriaRoutes();
    public alertaRoutes = new AlertaRoutes();
    public sensorRoutes = new SensorRoutes();
    public lecturaRoutes = new LecturaRoutes();
    public bateriaRoutes = new BateriaRoutes();
    public luminarRoutes = new LuminariaRoutes();
    public UsuarioRoutes = new UsuarioRoutes();
    public comandoRoutes = new ComandoRoutes();
    public zonaRoutes = new zonaRoutes();
    public authRoutes = new authRoutes();
}
