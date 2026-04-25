import { ControlRoutes } from "./control_usuario";
import { DatosRoutes } from "./datos_sensor";
import { DeviceRoutes } from "./devices.routers";
import { AuthRoutes } from "./auth.routers";

export class Routes {
  public controlRoutes: ControlRoutes = new ControlRoutes();
  public datosRoutes: DatosRoutes = new DatosRoutes();
  public deviceRoutes: DeviceRoutes = new DeviceRoutes();
  public authRoutes: AuthRoutes = new AuthRoutes();
}
