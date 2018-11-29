import { Component, OnInit } from '@angular/core';

import { Usuario } from './../usuario/usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private usuario: Usuario;

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.usuario = new Usuario();
    }

    public fazerLogin() {
        this.authService.fazerLogin(this.usuario);
    }

}
