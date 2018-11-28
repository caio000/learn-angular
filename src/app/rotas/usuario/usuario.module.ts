import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

import { UsuarioRoutingModule } from './usuario.routing.module';

import { UsuarioComponent } from './usuario.component';
import { UsuarioDetalhesComponent } from './usuario-detalhes/usuario-detalhes.component';
import { UsuarioService } from './usuario.service';

@NgModule({
  imports: [
      CommonModule,
      UsuarioRoutingModule,
      // RouterModule
  ],
  declarations: [
      UsuarioComponent,
      UsuarioDetalhesComponent,
  ],
  providers: [
      UsuarioService
  ]
})
export class UsuarioModule { }
