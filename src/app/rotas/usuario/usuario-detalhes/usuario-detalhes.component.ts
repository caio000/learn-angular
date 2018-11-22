import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';

@Component({
  selector: 'app-usuario-detalhes',
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.css']
})
export class UsuarioDetalhesComponent implements OnInit {

    public usuario: Usuario;

  constructor(
      private usuarioService: UsuarioService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params: any) => {
          this.usuario = this.usuarioService.getById(+params['id']);

          if (this.usuario == null) {
              this.router.navigate(['']);
          }
      });
  }

}
