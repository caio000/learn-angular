import { Injectable } from '@angular/core';

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

    private usuarios: Array<Usuario>;

  constructor() {
      this.usuarios = [
          {'id': 1, 'name': 'Augusto Enzo Aparício'},
          {'id': 2, 'name': 'Carolina Cláudia Letícia Baptista'}
      ];
  }

  add(usuario: Usuario): void {
      this.usuarios.push(usuario);
  }

  getById(id: number): Usuario {
      return this.usuarios.find((usuario) => usuario.id === id);
  }

  getAll(): Array<Usuario> {
      return this.usuarios;
  }
}
