import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './../usuario/usuario';

@Injectable()
export class AuthService {

    private usuarioAutenticado: boolean = false;
    public mostrarMenu = new EventEmitter<boolean>();

    constructor(
        private router: Router
    ) { }

    public fazerLogin(usuario: Usuario) {
        if (usuario.email === 'admin@admin.com' && usuario.password === 'admin') {
            this.usuarioAutenticado = true;
            this.mostrarMenu.emit(true);
            this.router.navigate(['/']);
        } else {
            this.usuarioAutenticado = false;
        }
    }
}
