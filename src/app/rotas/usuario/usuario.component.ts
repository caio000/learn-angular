import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    public id;

    public usuarios: Array<Usuario>;

  constructor(
      private usuarioService: UsuarioService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params: any) => {
          this.id = params['id'];
      });
      console.log(this.getRouteId());
      console.log(this.id);

      this.usuarios = this.usuarioService.getAll();
  }

  getRouteId() {
      return this.route.snapshot.params['id'];
  }

}
