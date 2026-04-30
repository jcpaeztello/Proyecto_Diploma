import { Application } from 'express';
import { usuarioController } from '../controllers/usuario.controller';

export class UsuarioRoutes {
  routes(app: Application): void {
    app.route('/usuarios')
      .get(usuarioController.getAll.bind(usuarioController))
      .post(usuarioController.create.bind(usuarioController));

    app.route('/usuarios/:id')
      .get(usuarioController.getById.bind(usuarioController))
      .put(usuarioController.update.bind(usuarioController))
      .delete(usuarioController.delete.bind(usuarioController));
  }
}