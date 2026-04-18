import { ControlRoutes } from './control_usuario';
import { DatosRoutes } from './datos_sensor';
import { DispositivoRoutes } from './dispositivos';


export class Routes {
    public controlRoutes: ControlRoutes = new ControlRoutes();
    public datosRoutes: DatosRoutes = new DatosRoutes(); 
   public dispositivosRoutes: DispositivoRoutes = new DispositivoRoutes(); 
    
}
